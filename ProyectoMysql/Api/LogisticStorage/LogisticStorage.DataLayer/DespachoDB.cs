using Framework;
using Framework.Data;
using LogisticStorage.Common;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.DataLayer
{
    public class DespachoDB : BaseDataEntity
    {
        public virtual List<DespachoEntity> DespachoObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_Reserva_Main");
                FillSchemeTable(dr);
                List<DespachoEntity> EntityList = new List<DespachoEntity>();

                while (dr.Read())
                {
                    DespachoEntity entity = new DespachoEntity();
                    if (FillFrom<DespachoEntity>(dr, entity)) EntityList.Add(entity);
                    entity.OnLogicalLoaded();
                }

                Helper.Close(dr);
                return EntityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public virtual List<DespachoEntity> ObtenerCabecera(Int32 OrdenPedidoId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoId", DbType.Int32, 4, false, 0, 0, OrdenPedidoId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_Despacho_ObtenerCabecera");
                FillSchemeTable(dr);
                List<DespachoEntity> EntityList = new List<DespachoEntity>();
                while (dr.Read())
                {
                    DespachoEntity entity = new DespachoEntity();
                    if (FillFrom(dr, entity)) EntityList.Add(entity);
                    entity.OnLogicalLoaded();
                }

                Helper.Close(dr);
                return EntityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public virtual bool Registrar(DespachoEntity Ent)
        {
            StartHelper(true);
            try
            {
                RegistrarDB(Ent);
            }
            catch (Exception ex)
            {
                Helper.CancelTransaction();
                throw ex;
            }

            Helper.Close();
            return true;
        }

        private bool RegistrarDB(DespachoEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_Despacho_Update";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_Despacho_Save";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);

                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_DespachoId", DbType.Int32, 4, false, 0, 0, Ent.DespachoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoId", DbType.Int32, 4, false, 0, 0, Ent.OrdenPedidoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EntidadEntregadoId", DbType.Int32, 4, false, 0, 0, Ent.EntidadEntregadoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 100, false, 0, 0, Ent.Codigo);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaHoraEntrega", DbType.DateTime, 12, false, 0, 0, Ent.FechaHoraEntrega);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.DespachoId <= 0) Ent.DespachoId = (Int32)DbDatabase.GetParameterValue("v_DespachoId");
                    Ent.OnLogicalAdded();
                }
                else
                {
                    if (returnValue <= 0) throw new Exception("ErrorDB.UpdateEntity");
                    Ent.OnLogicalUpdate();
                }
            }

            if (Ent.DetalleItem != null && Ent.DetalleItem.Count > 0)
            {
                DespachoDetalleDB DespachoDetalleDB = new DespachoDetalleDB();
                DespachoDetalleDB.SetHelper(Helper);

                foreach (DespachoDetalleEntity detalle in Ent.DetalleItem)
                {
                    if (Ent.LogicalState == LogicalState.Added)
                    {
                        if (detalle.LogicalState != LogicalState.Deleted) detalle.LogicalState = LogicalState.Added;
                    }
                    detalle.DespachoId = Ent.DespachoId;
                    DespachoDetalleDB.Registrar(detalle);
                }

            }


            return true;
        }


    }
}

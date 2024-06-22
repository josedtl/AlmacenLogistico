using Framework.Data;
using Framework;
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
    public class OrdenPedidoDB : BaseDataEntity
    {

        public virtual List<OrdenPedidoEntity> ObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_OrdenPedido_Main");
                FillSchemeTable(dr);
                List<OrdenPedidoEntity> EntityList = new List<OrdenPedidoEntity>();

                while (dr.Read())
                {
                    OrdenPedidoEntity entity = new OrdenPedidoEntity();
                    if (FillFrom<OrdenPedidoEntity>(dr, entity)) EntityList.Add(entity);
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

        public virtual List<OrdenPedidoEntity> ObtenerItem(Int32 OrdenPedidoId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoId", DbType.Int32, 4, false, 0, 0, OrdenPedidoId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_OrdenPedidoCabeceraItem");
                FillSchemeTable(dr);
                List<OrdenPedidoEntity> EntityList = new List<OrdenPedidoEntity>();
                while (dr.Read())
                {
                    OrdenPedidoEntity entity = new OrdenPedidoEntity();
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

        public virtual bool Registrar(OrdenPedidoEntity Ent)
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

        private bool RegistrarDB(OrdenPedidoEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_OrdenPedido_Update";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_OrdenPedido_SaveOP";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_OrdenPedidoId", DbType.Int32, 4, false, 0, 0, Ent.OrdenPedidoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ProcesoId", DbType.Int32, 4, false, 0, 0, Ent.ProcesoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TipoProcesoId", DbType.Int32, 4, false, 0, 0, Ent.TipoProcesoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EstadoProcesoId", DbType.Int32, 4, false, 0, 0, Ent.EstadoProcesoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 100, false, 0, 0, Ent.Codigo);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EntidadId", DbType.Int32, 4, false, 0, 0, Ent.EntidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NumDocumentoResponsable", DbType.String, 100, false, 0, 0, Ent.NumDocumentoResponsable);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NomResponsable", DbType.String, 20, false, 0, 0, Ent.NomResponsable);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaEmision", DbType.DateTime, 12, false, 0, 0, Ent.FechaEmision);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.OrdenPedidoId <= 0) Ent.OrdenPedidoId = (Int32)DbDatabase.GetParameterValue("v_OrdenPedidoId");
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
                OrdenPedidoDetalleDB OrdenPedidoDetalleDB = new OrdenPedidoDetalleDB();
                OrdenPedidoDetalleDB.SetHelper(Helper);

                foreach (OrdenPedidoDetalleEntity detalle in Ent.DetalleItem)
                {
                    if (Ent.LogicalState == LogicalState.Added)
                    {
                        if (detalle.LogicalState != LogicalState.Deleted) detalle.LogicalState = LogicalState.Added;
                    }
                    detalle.OrdenPedidoId = Ent.OrdenPedidoId;
                    OrdenPedidoDetalleDB.Registrar(detalle);
                }

            }


            return true;
        }

        public virtual List<OrdenPedidoEntity> ObtenerFiltroOCO()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_OrdenPedidoObtenerFiltroOCO");
                FillSchemeTable(dr);
                List<OrdenPedidoEntity> EntityList = new List<OrdenPedidoEntity>();

                while (dr.Read())
                {
                    OrdenPedidoEntity entity = new OrdenPedidoEntity();
                    if (FillFrom<OrdenPedidoEntity>(dr, entity)) EntityList.Add(entity);
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
    }
}

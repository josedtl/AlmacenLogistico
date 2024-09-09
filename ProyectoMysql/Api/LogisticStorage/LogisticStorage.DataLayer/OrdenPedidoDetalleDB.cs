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
    public class OrdenPedidoDetalleDB : BaseDataEntity
    {


        public virtual List<OrdenPedidoDetalleEntity> ObtenerItem(Int32 OrdenPedidoId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoId", DbType.Int32, 4, false, 0, 0, OrdenPedidoId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_OrdenPedidoDetalleItemCabecera");
                FillSchemeTable(dr);
                List<OrdenPedidoDetalleEntity> EntityList = new List<OrdenPedidoDetalleEntity>();
                while (dr.Read())
                {
                    OrdenPedidoDetalleEntity entity = new OrdenPedidoDetalleEntity();
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

        public virtual bool Registrar(OrdenPedidoDetalleEntity Ent)
        {
            StartHelper(true);
            try
            {
                if (Ent.LogicalState == LogicalState.Deleted) EliminarDB(Ent);
                else RegistrarDB(Ent);
            }
            catch (Exception ex)
            {
                Helper.CancelTransaction();
                throw ex;
            }

            Helper.Close();
            return true;
        }

        private bool RegistrarDB(OrdenPedidoDetalleEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_OrdenPedidoDetalle_Update";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_OrdenPedidoDetalle_Save";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_OrdenPedidoDetalleId", DbType.Int32, 4, false, 0, 0, Ent.OrdenPedidoDetalleId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoId", DbType.Int32, 4, false, 0, 0, Ent.OrdenPedidoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UnidadMedidaId", DbType.Int32, 4, false, 0, 0, Ent.UnidadMedidaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidadSolicitado", DbType.Decimal, 15, false, 0, 0, Ent.CantidadSolicitado);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidadReservado", DbType.Decimal, 15, false, 0, 0, Ent.CantidadReservado);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidadFaltante", DbType.Decimal, 15, false, 0, 0, Ent.CantidadFaltante);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidadAtendido", DbType.Decimal, 15, false, 0, 0, Ent.CantidadAtendido);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Enlazado", DbType.Boolean, 2, false, 0, 0, Ent.Enlazado);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Atendido", DbType.Boolean, 2, false, 0, 0, Ent.Atendido);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TarifaId", DbType.Int32, 4, false, 0, 0, Ent.TarifaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MonedaId", DbType.Int32, 4, false, 0, 0, Ent.MonedaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Precio", DbType.Int32, 4, false, 0, 0, Ent.Precio);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.OrdenPedidoDetalleId <= 0) Ent.OrdenPedidoDetalleId = (Int32)DbDatabase.GetParameterValue("v_OrdenPedidoDetalleId");
                    Ent.OnLogicalAdded();
                }
                else
                {
                    if (returnValue <= 0) throw new Exception("ErrorDB.UpdateEntity");
                    Ent.OnLogicalUpdate();
                }
            }


            return true;
        }

        private bool EliminarDB(OrdenPedidoDetalleEntity Item)
        {
            if (Item.OrdenPedidoDetalleId == 0) return true;
            int returnValue = 0;
            try
            {
                if (m_Helper.IsTransactional)
                {
                    DbDatabase.GetStoredProcCommand("sp_OrdenPedidoDetalle_Eliminar");
                    DbDatabase.SetTransaction(Helper.DbTransaction);
                    DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoDetalleId", DbType.Int32, 4, false, 0, 0, Item.OrdenPedidoDetalleId);
                    returnValue = DbDatabase.ExecuteNonQuery();
                }
                else
                {
                    returnValue = DbDatabase.ExecuteNonQuery("sp_OrdenPedidoDetalle_Eliminar", Item.OrdenPedidoDetalleId);
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
            if (returnValue < 0) throw new Exception("ErrorDB.DeleteEntity");
            return true;
        }

        public virtual List<OrdenPedidoDetalleEntity> ObtenerFiltroOCD()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_OrdenPedidoDetalleObtenerFiltroOCD");
                FillSchemeTable(dr);
                List<OrdenPedidoDetalleEntity> EntityList = new List<OrdenPedidoDetalleEntity>();

                while (dr.Read())
                {
                    OrdenPedidoDetalleEntity entity = new OrdenPedidoDetalleEntity();
                    if (FillFrom<OrdenPedidoDetalleEntity>(dr, entity)) EntityList.Add(entity);
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

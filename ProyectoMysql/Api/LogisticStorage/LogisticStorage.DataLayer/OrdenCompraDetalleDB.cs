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
    public class OrdenCompraDetalleDB: BaseDataEntity
    {

        public virtual List<OrdenCompraDetalleEntity> ObtenerItem(Int32 OrdenCompraId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenCompraId", DbType.Int32, 4, false, 0, 0, OrdenCompraId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_OrdenCompraDetalleCabeceraItem");
                FillSchemeTable(dr);
                List<OrdenCompraDetalleEntity> EntityList = new List<OrdenCompraDetalleEntity>();
                while (dr.Read())
                {
                    OrdenCompraDetalleEntity entity = new OrdenCompraDetalleEntity();
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

        public virtual bool Registrar(OrdenCompraDetalleEntity Ent)
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

        private bool RegistrarDB(OrdenCompraDetalleEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_OrdenCompraDetalle_Update";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_OrdenCompraDetalle_Save";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_OrdenCompraDetalleId", DbType.Int32, 4, false, 0, 0, Ent.OrdenCompraDetalleId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenCompraId", DbType.Int32, 4, false, 0, 0, Ent.OrdenCompraId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UnidadMedidaId", DbType.Int32, 4, false, 0, 0, Ent.UnidadMedidaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidadSolicitado", DbType.Decimal, 15, false, 0, 0, Ent.CantidadSolicitado);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidadComprado", DbType.Decimal, 15, false, 0, 0, Ent.CantidadComprado);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidadFaltante", DbType.Decimal, 15, false, 0, 0, Ent.CantidadFaltante);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_PrecioUnitario", DbType.Decimal, 15, false, 0, 0, Ent.PrecioUnitario);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.OrdenCompraDetalleId <= 0) Ent.OrdenCompraDetalleId = (Int32)DbDatabase.GetParameterValue("v_OrdenCompraDetalleId");
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

        private bool EliminarDB(OrdenCompraDetalleEntity Item)
        {
            if (Item.OrdenCompraDetalleId == 0) return true;
            int returnValue = 0;
            try
            {
                if (m_Helper.IsTransactional)
                {
                    DbDatabase.GetStoredProcCommand("sp_OrdenCompraDetalle_Delete");
                    DbDatabase.SetTransaction(Helper.DbTransaction);
                    DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenCompraDetalleId", DbType.Int32, 4, false, 0, 0, Item.OrdenCompraDetalleId);
                    returnValue = DbDatabase.ExecuteNonQuery();
                }
                else
                {
                    returnValue = DbDatabase.ExecuteNonQuery("sp_OrdenCompraDetalle_Delete", Item.OrdenCompraDetalleId);
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
            if (returnValue < 0) throw new Exception("ErrorDB.DeleteEntity");
            return true;
        }

    }
}

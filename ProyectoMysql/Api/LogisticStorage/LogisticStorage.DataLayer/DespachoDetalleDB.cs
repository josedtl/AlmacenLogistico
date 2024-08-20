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
    public class DespachoDetalleDB: BaseDataEntity
    {
        public virtual List<DespachoDetalleEntity> ObtenerDetalle(Int32 OrdenPedidoId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoId", DbType.Int32, 4, false, 0, 0, OrdenPedidoId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_Despacho_ObtenerDetalle");
                FillSchemeTable(dr);
                List<DespachoDetalleEntity> EntityList = new List<DespachoDetalleEntity>();
                while (dr.Read())
                {
                    DespachoDetalleEntity entity = new DespachoDetalleEntity();
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

        public virtual bool Registrar(DespachoDetalleEntity Ent)
        {
            StartHelper(true);
            try
            {
                //if (Ent.LogicalState == LogicalState.Deleted) EliminarDB(Ent);
                //else RegistrarDB(Ent);
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

        private bool RegistrarDB(DespachoDetalleEntity Ent)
        {
            //if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            //{
                String storedName = "sp_DespachoDetalle_Update";
                Ent.LogicalState = LogicalState.Added;
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_DespachoDetalle_Save";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);


                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_DespachoDetalleId", DbType.Int32, 4, false, 0, 0, Ent.DespachoDetalleId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_OrdenPedidoDetalleId", DbType.Int32, 4, false, 0, 0, Ent.OrdenPedidoDetalleId); 
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_DespachoId", DbType.Int32, 4, false, 0, 0, Ent.DespachoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Cantidad", DbType.Decimal, 12, false, 0, 0, Ent.Cantidad); 

                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.DespachoDetalleId <= 0) Ent.DespachoDetalleId = (Int32)DbDatabase.GetParameterValue("v_DespachoDetalleId");
                    Ent.OnLogicalAdded();
                }
                else
                {
                    if (returnValue <= 0) throw new Exception("ErrorDB.UpdateEntity");
                    Ent.OnLogicalUpdate();
                }


                if (Ent.DetalleReservaItem != null && Ent.DetalleReservaItem.Count > 0)
                {
                    ReservaDB ReservaDB = new ReservaDB();
                    ReservaDB.SetHelper(Helper);

                    foreach (ReservaEntity detalle in Ent.DetalleReservaItem)
                    {
                        //if (Ent.LogicalState == LogicalState.Added)
                        //{
                        //    if (detalle.LogicalState != LogicalState.Deleted) detalle.LogicalState = LogicalState.Added;
                        //}
                        //detalle.OrdenPedidoId = Ent.OrdenPedidoId;
                        ReservaDB.ReservarDespacho(detalle);
                    }

                }

            return true;
        }

    }
}

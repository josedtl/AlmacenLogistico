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
using System.Collections.ObjectModel;

namespace LogisticStorage.DataLayer
{
    public class ReservaDetalleDB : BaseDataEntity
    {

        public virtual List<ReservaDetalleEntity> ReservaLista(List<ReservaDetalleEntity> Items)
        {
            StartHelper(true);
            try
            {
                for (int o = 0; o < Items.Count; o++) Reserva(Items[o]);
            }
            catch (Exception ex)
            {
                Helper.CancelTransaction();
                throw ex;
            }

            Helper.Close();
            return Items;
        }


        public virtual bool Reserva(ReservaDetalleEntity Ent)
        {
            StartHelper(true);
            try
            {
                ReservarDB(Ent);
                //if (Ent.LogicalState == LogicalState.Deleted) EliminarDB(Ent);
                //else RegistrarDB(Ent);
            }
            catch (Exception ex)
            {
                Helper.CancelTransaction();
                throw ex;
            }

            Helper.Close();
            return true;
        }
        private bool ReservarDB(ReservaDetalleEntity Ent)
        {
  
                String storedName = "sp_ReservarMercaderiaItem";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidaReserva", DbType.Decimal, 15, false, 0, 0, Ent.Cantidad);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoDetalleId", DbType.Int32, 4, false, 0, 0, Ent.OrdenPedidoDetalleId);
                int returnValue = DbDatabase.ExecuteNonQuery();
                //if (Ent.LogicalState == LogicalState.Added)
                //{
                //    if (Ent.OrdenPedidoDetalleId <= 0) Ent.OrdenPedidoDetalleId = (Int32)DbDatabase.GetParameterValue("v_OrdenPedidoDetalleId");
                //    Ent.OnLogicalAdded();
                //}
                //else
                //{
                //    if (returnValue <= 0) throw new Exception("ErrorDB.UpdateEntity");
                //    Ent.OnLogicalUpdate();
                //}
       


            return true;
        }
    }
}

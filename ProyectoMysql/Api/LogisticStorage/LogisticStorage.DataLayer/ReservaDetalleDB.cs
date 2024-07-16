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
    public class ReservaDetalleDB : BaseDataEntity
    {

        private bool ReservarDB(OrdenPedidoDetalleEntity Ent)
        {
  
                String storedName = "sp_ReservarMercaderiaItem";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoId", DbType.Int32, 4, false, 0, 0, Ent.OrdenPedidoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CantidadSolicitado", DbType.Decimal, 15, false, 0, 0, Ent.CantidadSolicitado);
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
       


            return true;
        }
    }
}

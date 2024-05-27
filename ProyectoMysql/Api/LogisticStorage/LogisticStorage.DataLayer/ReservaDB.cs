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
    public class ReservaDB : BaseDataEntity
    {

        public virtual List<ReservaEntity> GetMercaderiaMainItems()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_ReservaMercaderiaListaMain");
                FillSchemeTable(dr);
                List<ReservaEntity> EntityList = new List<ReservaEntity>();

                while (dr.Read())
                {
                    ReservaEntity entity = new ReservaEntity();
                    if (FillFrom<ReservaEntity>(dr, entity)) EntityList.Add(entity);
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

        public virtual bool ReservarMercaderia(ReservaEntity Ent)
        {
            StartHelper(true);
            try
            {
                ReservarMercaderiaDB(Ent);
            }
            catch (Exception ex)
            {
                Helper.CancelTransaction();
                throw ex;
            }

            Helper.Close();
            return true;
        }

        private bool ReservarMercaderiaDB(ReservaEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_Reserva_Update";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_Reserva_SaveOP";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Cantidad", DbType.Decimal, 4, false, 0, 0, Ent.Cantidad);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenPedidoDetalleId", DbType.Int32, 4, false, 0, 0, Ent.OrdenPedidoDetalleId);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.MercaderiaId <= 0) Ent.MercaderiaId = (Int32)DbDatabase.GetParameterValue("v_ReservaId");
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

        public virtual List<ReservaEntity> ReservaPedido(Int32 MercaderiaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, MercaderiaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_ReservaOrdenPedidoListaMain");
                FillSchemeTable(dr);
                List<ReservaEntity> EntityList = new List<ReservaEntity>();
                while (dr.Read())
                {
                    ReservaEntity entity = new ReservaEntity();
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


        public virtual List<ReservaEntity> ReservaResumen(Int32 MercaderiaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, MercaderiaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_ReservaObtenerResumen");
                FillSchemeTable(dr);
                List<ReservaEntity> EntityList = new List<ReservaEntity>();
                while (dr.Read())
                {
                    ReservaEntity entity = new ReservaEntity();
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

    }
}

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
    public class RecepcionDetalleDB : BaseDataEntity
    {


        public virtual List<RecepcionDetalleEntity> ObtenerItem(Int32 RecepcionId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_RecepcionId", DbType.Int32, 4, false, 0, 0, RecepcionId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_RecepcionDetalleObtenerItem");
                FillSchemeTable(dr);
                List<RecepcionDetalleEntity> EntityList = new List<RecepcionDetalleEntity>();
                while (dr.Read())
                {
                    RecepcionDetalleEntity entity = new RecepcionDetalleEntity();
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

        public virtual bool Registrar(RecepcionDetalleEntity Ent)
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

        private bool RegistrarDB(RecepcionDetalleEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_OrdenPedido_Update";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_RecepcionDetalleRegistrar";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_RecepcionDetalleId", DbType.Int32, 4, false, 0, 0, Ent.RecepcionDetalleId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_RecepcionId", DbType.Int32, 4, false, 0, 0, Ent.RecepcionId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Cantidad", DbType.Decimal, 12, false, 0, 0, Ent.Cantidad);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Lote", DbType.String, 50, false, 0, 0, Ent.Lote);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaIngreso", DbType.DateTime, 12, false, 0, 0, Ent.FechaIngreso);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaVencimiento", DbType.DateTime, 12, false, 0, 0, Ent.FechaVencimiento);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Observacion", DbType.String, 100, false, 0, 0, Ent.Observacion);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.RecepcionDetalleId <= 0) Ent.RecepcionDetalleId = (Int32)DbDatabase.GetParameterValue("v_RecepcionDetalleId");
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
    }
}

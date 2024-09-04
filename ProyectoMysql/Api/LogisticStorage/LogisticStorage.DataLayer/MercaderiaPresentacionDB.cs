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
    public class MercaderiaPresentacionDB : BaseDataEntity
    {

        public virtual List<MercaderiaPresentacionEntity> ObtenerDetalle(Int32 MercaderiaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, MercaderiaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MercaderiaPresentacion_ObtenerDetalle");
                FillSchemeTable(dr);
                List<MercaderiaPresentacionEntity> EntityList = new List<MercaderiaPresentacionEntity>();
                while (dr.Read())
                {
                    MercaderiaPresentacionEntity entity = new MercaderiaPresentacionEntity();
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

        public virtual bool Registrar(MercaderiaPresentacionEntity Ent)
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

        private bool RegistrarDB(MercaderiaPresentacionEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_MercaderiaPresentacion_Actualizar";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_MercaderiaPresentacion_Registrar";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_MercaderiaPresentacionId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaPresentacionId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UnidadMedidaId", DbType.Int32, 4, false, 0, 0, Ent.UnidadMedidaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Cantidad", DbType.Decimal, 15, false, 0, 0, Ent.Cantidad);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.MercaderiaPresentacionId <= 0) Ent.MercaderiaPresentacionId = (Int32)DbDatabase.GetParameterValue("v_MercaderiaPresentacionId");
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

        private bool EliminarDB(MercaderiaPresentacionEntity Item)
        {
            if (Item.MercaderiaPresentacionId == 0) return true;
            int returnValue = 0;
            try
            {
                if (m_Helper.IsTransactional)
                {
                    DbDatabase.GetStoredProcCommand("sp_MercaderiaPresentacion_Eliminar");
                    DbDatabase.SetTransaction(Helper.DbTransaction);
                    DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaPresentacionId", DbType.Int32, 4, false, 0, 0, Item.MercaderiaPresentacionId);
                    returnValue = DbDatabase.ExecuteNonQuery();
                }
                else
                {
                    returnValue = DbDatabase.ExecuteNonQuery("sp_MercaderiaPresentacion_Eliminar", Item.MercaderiaPresentacionId);
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

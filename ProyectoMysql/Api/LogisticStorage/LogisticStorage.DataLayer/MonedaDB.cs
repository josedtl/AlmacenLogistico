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
    public class MonedaDB : BaseDataEntity
    {
        public virtual List<MonedaEntity> ObtenerItems()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MonedaAllItems");
                FillSchemeTable(dr);
                List<MonedaEntity> EntityList = new List<MonedaEntity>();
                while (dr.Read())
                {
                    MonedaEntity entity = new MonedaEntity();
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
        public virtual List<MonedaEntity> ObtenerItem(Int32 MonedaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MonedaId", DbType.Int32, 4, false, 0, 0, MonedaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MonedaAllItem");
                FillSchemeTable(dr);
                List<MonedaEntity> EntityList = new List<MonedaEntity>();
                while (dr.Read())
                {
                    MonedaEntity entity = new MonedaEntity();
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

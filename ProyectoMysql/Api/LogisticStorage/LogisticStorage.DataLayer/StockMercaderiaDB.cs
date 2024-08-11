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
    public class StockMercaderiaDB : BaseDataEntity
    {
        public virtual List<StockMercaderiaEntity> ObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_MercaderiaObtenerStockMain");
                FillSchemeTable(dr);
                List<StockMercaderiaEntity> EntityList = new List<StockMercaderiaEntity>();

                while (dr.Read())
                {
                    StockMercaderiaEntity entity = new StockMercaderiaEntity();
                    if (FillFrom<StockMercaderiaEntity>(dr, entity)) EntityList.Add(entity);
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

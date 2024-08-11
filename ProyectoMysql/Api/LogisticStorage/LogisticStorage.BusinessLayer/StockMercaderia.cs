using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class StockMercaderia
    {
        public static List<StockMercaderiaEntity> ObtenerMain()
        {
            StockMercaderiaDB DB = new StockMercaderiaDB();
            return DB.ObtenerMain();
        }
    }
}

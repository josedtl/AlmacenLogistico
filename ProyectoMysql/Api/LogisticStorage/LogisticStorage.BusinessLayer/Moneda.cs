using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class Moneda
    {
        public static List<MonedaEntity> ObtenerItems()
        {
            MonedaDB DB = new MonedaDB();
            return DB.ObtenerItems();
        }

        public static List<MonedaEntity> ObtenerItem(Int32 MonedaId)
        {
            MonedaDB DB = new MonedaDB();
            return DB.ObtenerItem(MonedaId);
        }
    }
}

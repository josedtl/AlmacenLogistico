using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class UnidadMedida
    {

        public static List<UnidadMedidaEntity> ObtenerItems()
        {
            UnidadMedidaDB DB = new UnidadMedidaDB();
            return DB.ObtenerItems();
        }

        public static List<UnidadMedidaEntity> ObtenerItem(Int32 UnidadMedidaId)
        {
            UnidadMedidaDB DB = new UnidadMedidaDB();
            return DB.ObtenerItem(UnidadMedidaId);
        }
    }
}

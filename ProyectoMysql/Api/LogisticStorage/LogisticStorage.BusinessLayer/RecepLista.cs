using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class RecepLista
    {
        public static List<RecepListaEntity> ObtenerItem(Int32 ListaId)
        {
            RecepListaDB DB = new RecepListaDB();
            return DB.ObtenerItem(ListaId);
        }

        public static List<RecepListaEntity> ObtenerItems(String Codigo)
        {
            RecepListaDB DB = new RecepListaDB();
            return DB.ObtenerItems(Codigo);
        }
    }
}

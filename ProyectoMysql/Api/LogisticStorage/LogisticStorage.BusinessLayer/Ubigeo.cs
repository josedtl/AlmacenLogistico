using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class Ubigeo
    {
        public static List<UbigeoEntity> BuscarItem(String Nombre)
        {
            UbigeoDB DB = new UbigeoDB();
            return DB.BuscarItem(Nombre);
        }

        public static List<UbigeoEntity> ObtenerItem(Int32 UbigeoId)
        {
            UbigeoDB DB = new UbigeoDB();
            return DB.ObtenerItem(UbigeoId);
        }
    }
}

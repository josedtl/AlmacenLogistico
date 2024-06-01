using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class TipoEntidad
    {

        public static List<TipoEntidadEntity> ObtenerItems()
        {
            TipoEntidadDB DB = new TipoEntidadDB();
            return DB.ObtenerItems();
        }
    }
}

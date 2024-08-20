using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class EstadoProceso
    {
        public static List<EstadoProcesoEntity> ObtenerItems()
        {
            EstadoProcesoDB DB = new EstadoProcesoDB();
            return DB.ObtenerItems();   
        }

    }
}

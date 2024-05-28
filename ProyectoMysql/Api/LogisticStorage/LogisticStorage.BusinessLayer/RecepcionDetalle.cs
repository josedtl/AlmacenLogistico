using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class RecepcionDetalle
    {


        public static List<RecepcionDetalleEntity> ObtenerItem(Int32 EmpresaId)
        {
            RecepcionDetalleDB DB = new RecepcionDetalleDB();
            return DB.ObtenerItem(EmpresaId);
        }
    }
}

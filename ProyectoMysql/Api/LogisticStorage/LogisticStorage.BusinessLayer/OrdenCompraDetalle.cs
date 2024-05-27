using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class OrdenCompraDetalle
    {
        public static List<OrdenCompraDetalleEntity> ObtenerItem(Int32 OrdenCompraId)
        {
            OrdenCompraDetalleDB DB = new OrdenCompraDetalleDB();
            return DB.ObtenerItem(OrdenCompraId);
        }
    }
}

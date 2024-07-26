using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class DespachoDetalle
    {

        public static List<DespachoDetalleEntity> ObtenerDetalle(Int32 OrdenPedidoId)
        { 
        DespachoDetalleDB DB = new DespachoDetalleDB();
            return DB.ObtenerDetalle(OrdenPedidoId);
        }
    }
}

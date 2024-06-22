using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class OrdenPedidoDetalle
    {
        public static List<OrdenPedidoDetalleEntity> ObtenerItem(Int32 OrdenPedidoId)
        {
            OrdenPedidoDetalleDB DB = new OrdenPedidoDetalleDB();
            return DB.ObtenerItem(OrdenPedidoId);
        }

        public static List<OrdenPedidoDetalleEntity> ObtenerFiltroOCD()
        {
            OrdenPedidoDetalleDB DB = new OrdenPedidoDetalleDB();
            return DB.ObtenerFiltroOCD();
        }
    }
}

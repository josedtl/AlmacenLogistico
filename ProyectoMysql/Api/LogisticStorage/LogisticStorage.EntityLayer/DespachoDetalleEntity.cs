using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class DespachoDetalleEntity
    {

        public DespachoDetalleEntity() {
            DespachoDetalleId = 0;
            DespachoId = 0;
            Cantidad = 0;
            OrdenPedidoDetalleId = 0;
        }

        public Int32 DespachoDetalleId { get; set; }
        public Int32 DespachoId { get; set; }  
        public double Cantidad { get; set; }
        public Int32 OrdenPedidoDetalleId { get; set; }
        

    }
}

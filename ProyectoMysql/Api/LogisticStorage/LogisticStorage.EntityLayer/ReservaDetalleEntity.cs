using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class ReservaDetalleEntity
    {
        public ReservaDetalleEntity()
        {
            this.OrdenPedidoDetalleId = 0;
            this.MercaderiaId = 0;
            this.Cantidad = 0;
        }

        public Int32 OrdenPedidoDetalleId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public Decimal Cantidad { get; set; }
    }
}

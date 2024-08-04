using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class ReservaEntity : BaseEntityObject
    {
        public ReservaEntity()
        {
            this.ReservaId = 0;
            this.OrdenPedidoId = 0;
            this.OrdenPedidoDetalleId = 0;
            this.MercaderiaId = 0;
            this.Cantidad = 0;
            this.StockId = 0;

            this.Codigo = String.Empty;
            this.Nombre = String.Empty;
            this.CodigoComercial = String.Empty;
            this.CantidaPedido = 0;
            this.Stock = 0;
            this.CodigoPedido = String.Empty;
            this.UnidadMedida = String.Empty;
            this.Reserva = 0;
        }


        public Int32 ReservaId { get; set; }
        public Int32 OrdenPedidoId { get; set; }
        public Int32 OrdenPedidoDetalleId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public Decimal Cantidad { get; set; }
        public Int32 StockId { get; set; }
    }
}

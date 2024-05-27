using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class ReservaEntity : BaseEntityObject
    {
        public ReservaEntity()
        {
            this.MercaderiaId = 0;
            this.Codigo = String.Empty;
            this.Nombre = String.Empty;
            this.CodigoComercial = String.Empty;
            this.CantidaPedido = 0;
            this.Cantidad = 0;
            this.Stock = 0;
            this.CodigoPedido = String.Empty;
            this.UnidadMedida = String.Empty;
            this.Reserva = 0;
        }

        public Int32 MercaderiaId { get; set; }
        public String Codigo { get; set; }
        public String Nombre { get; set; }
        public String CodigoComercial { get; set; }

        public Decimal CantidaPedido { get; set; }
        public Decimal Cantidad { get; set; }
        public Decimal Stock { get; set; }
        public Int32 OrdenPedidoDetalleId { get; set; }
        public String CodigoPedido { get; set; }
        public String UnidadMedida { get; set; }
        public Decimal Reserva { get; set; }


    }
}

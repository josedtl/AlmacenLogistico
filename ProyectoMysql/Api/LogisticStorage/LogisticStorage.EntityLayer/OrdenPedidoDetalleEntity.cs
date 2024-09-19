using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class OrdenPedidoDetalleEntity : BaseEntityObject
    {
        public OrdenPedidoDetalleEntity()
        {
            this.OrdenPedidoDetalleId = 0;
            this.OrdenPedidoId = 0;
            this.MercaderiaId = 0;
            this.UnidadMedidaId = 0;
            this.CantidadSolicitado = 0;
            this.CantidadReservado = 0;
            this.CantidadFaltante = 0;
            this.CantidadAtendido = 0;
            this.Enlazado = false;
            this.Atendido = false;
            this.NomProducto = String.Empty;
            this.CategoriaId = 0;
            this.CodigoUM = String.Empty;
            this.Stock = 0;
            this.TarifaId = 0;
            this.MonedaId = 0;
            this.Precio = 0;
        }

        public Int32 OrdenPedidoDetalleId { get; set; }
        public Int32 OrdenPedidoId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public Int32 UnidadMedidaId { get; set; }
        public Decimal CantidadSolicitado { get; set; }
        public Decimal CantidadReservado { get; set; }
        public Decimal CantidadFaltante { get; set; }
        public Decimal CantidadAtendido { get; set; }
        public Boolean Enlazado { get; set; }
        public Boolean Atendido { get; set; }

        public Int32 TarifaId { get; set; }
        public Int32 MonedaId { get; set; }
        public Decimal Precio { get; set; }

    }
}

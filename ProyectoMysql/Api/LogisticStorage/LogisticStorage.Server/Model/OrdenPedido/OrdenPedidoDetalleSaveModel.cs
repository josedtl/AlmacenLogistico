using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class OrdenPedidoDetalleSaveModel
    {

        public OrdenPedidoDetalleSaveModel () {
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



        }
        public OrdenPedidoDetalleSaveModel(OrdenPedidoDetalleEntity Item)
        {
            this.OrdenPedidoDetalleId = Item.OrdenPedidoDetalleId;
            this.OrdenPedidoId = Item.OrdenPedidoId;
            this.MercaderiaId = Item.MercaderiaId;
            this.UnidadMedidaId = Item.UnidadMedidaId;
            this.CantidadSolicitado = Item.CantidadSolicitado;
            this.CantidadReservado = Item.CantidadReservado;
            this.CantidadFaltante = Item.CantidadFaltante;
            this.CantidadAtendido = Item.CantidadAtendido;
            this.Enlazado = Item.Enlazado;
            this.Atendido = Item.Atendido;
            this.NomProducto = Item.NomProducto;
            this.CategoriaId = Item.CategoriaId;
            this.CodigoUM = Item.CodigoUM;
            this.Stock = Item.Stock;
        }

        [JsonPropertyName("OrdenPedidoDetalleId")]
        public Int32 OrdenPedidoDetalleId { get; set; }

        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }

        [JsonPropertyName("MercaderiaId")]
        public Int32 MercaderiaId { get; set; }

        [JsonPropertyName("UnidadMedidaId")]
        public Int32 UnidadMedidaId { get; set; }

        [JsonPropertyName("CantidadSolicitado")]
        public Decimal CantidadSolicitado { get; set; }

        [JsonPropertyName("CantidadReservado")]
        public Decimal CantidadReservado { get; set; }

        [JsonPropertyName("CantidadFaltante")]
        public Decimal CantidadFaltante { get; set; }

        [JsonPropertyName("CantidadAtendido")]
        public Decimal CantidadAtendido { get; set; }

        [JsonPropertyName("Enlazado")]
        public Boolean Enlazado { get; set; }

        [JsonPropertyName("Atendido")]
        public Boolean Atendido { get; set; }

        [JsonPropertyName("NomProducto")]
        public String NomProducto { get; set; }

        [JsonPropertyName("CategoriaId")]
        public Int32 CategoriaId { get; set; }

        [JsonPropertyName("CodigoUM")]
        public String CodigoUM { get; set; }

        [JsonPropertyName("Stock")]
        public Decimal Stock { get; set; }

        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }
    }
}

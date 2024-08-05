using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoDetalleModel
    {
        public DespachoDetalleModel() { 
            this.OrdenPedidoId = 0;
            this.OrdenPedidoDetalleId = 0;
            this.NomProducto = "";
            this.CodigoUM = "";
            this.CantidadSolicitado = 0;
            this.Cantidad = 0;
            this.CantidadAtendido = 0;
        }

        public DespachoDetalleModel(DespachoDetalleEntity ent)
        {
            this.OrdenPedidoId = ent.OrdenPedidoId;
            this.OrdenPedidoDetalleId = ent.OrdenPedidoDetalleId;
            this.NomProducto = ent.NomProducto;
            this.CodigoUM = ent.CodigoUM;
            this.CantidadSolicitado = ent.CantidadSolicitado;
            this.Cantidad = ent.CantidadReservado;
            this.CantidadAtendido = ent.CantidadAtendido;
        }

        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }
        [JsonPropertyName("OrdenPedidoDetalleId")]
        public Int32 OrdenPedidoDetalleId { get; set; }
        [JsonPropertyName("NomProducto")]
        public String NomProducto { get; set; }
        [JsonPropertyName("CodigoUM")]
        public String CodigoUM { get; set; }
        [JsonPropertyName("CantidadSolicitado")]
        public double CantidadSolicitado { get; set; }
        [JsonPropertyName("CantidadReservado")]
        public double Cantidad { get; set; }
        [JsonPropertyName("CantidadAtendido")]
        public double CantidadAtendido { get; set; }
    }
}

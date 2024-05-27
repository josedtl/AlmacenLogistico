using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class ReservaPedidoModel
    {

        public ReservaPedidoModel()
        {
            this.MercaderiaId = 0;
            this.OrdenPedidoDetalleId = 0;
            this.CodigoPedido = String.Empty;
            this.Cantidad = 0;
        }

        public ReservaPedidoModel(ReservaEntity Item)
        {
            this.MercaderiaId = Item.MercaderiaId;
            this.OrdenPedidoDetalleId = Item.OrdenPedidoDetalleId;
            this.CodigoPedido = Item.CodigoPedido;
            this.Cantidad = Item.Cantidad;
        }


        [JsonPropertyName("OrdenPedidoDetalleId")] public Int32 OrdenPedidoDetalleId { get; set; }
        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("CodigoPedido")] public String CodigoPedido { get; set; }
        [JsonPropertyName("Cantidad")] public Decimal Cantidad { get; set; }
    }
}

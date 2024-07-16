using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class ReservaDetalleModel
    {
        public ReservaDetalleModel()
        {
            this.OrdenPedidoDetalleId = 0;
            this.MercaderiaId = 0;
            this.Cantidad = 0;
        }

        [JsonPropertyName("OrdenPedidoDetalleId")]
        public Int32 OrdenPedidoDetalleId { get; set; }
        [JsonPropertyName("MercaderiaId")]
        public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("Cantidad")]
        public Decimal Cantidad { get; set; }
    }
}

using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class ReservaMercaderiaOPModel
    {
        public ReservaMercaderiaOPModel()
        {
            this.Cantidad = 0;
            this.MercaderiaId = 0;
            this.OrdenPedidoDetalleId = 0;
            this.Action = 0;
        }

        [JsonPropertyName("Cantidad")] public Decimal Cantidad { get; set; }
        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("OrdenPedidoDetalleId")] public Int32 OrdenPedidoDetalleId { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }
    }
}

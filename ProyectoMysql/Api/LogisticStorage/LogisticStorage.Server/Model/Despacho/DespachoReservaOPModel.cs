using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoReservaOPModel
    {
        public DespachoReservaOPModel()
        {
            this.ReservaId = 0;
            this.OrdenPedidoId = 0;
            this.OrdenPedidoDetalleId = 0;
            this.MercaderiaId = 0;
            this.Cantidad = 0;
            this.StockId = 0;
        }

        public DespachoReservaOPModel(ReservaEntity Item)
        {
            this.ReservaId = Item.ReservaId;
            this.OrdenPedidoId = Item.OrdenPedidoId;
            this.OrdenPedidoDetalleId = Item.OrdenPedidoDetalleId;
            this.MercaderiaId = Item.MercaderiaId;
            this.Cantidad = Item.Cantidad;
            this.StockId = Item.StockId;
        }


        [JsonPropertyName("ReservaId")] public Int32 ReservaId { get; set; }
        [JsonPropertyName("OrdenPedidoId")] public Int32 OrdenPedidoId { get; set; }
        [JsonPropertyName("OrdenPedidoDetalleId")] public Int32 OrdenPedidoDetalleId { get; set; }
        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("Cantidad")] public Decimal Cantidad { get; set; }
        [JsonPropertyName("StockId")] public Int32 StockId { get; set; }

    }
}

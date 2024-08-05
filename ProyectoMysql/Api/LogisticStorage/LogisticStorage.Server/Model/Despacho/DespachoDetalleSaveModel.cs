using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoDetalleSaveModel
    {
        public DespachoDetalleSaveModel() { 
            this.DespachoDetalleId = 0;
            this.DespachoId = 0;
            this.OrdenPedidoDetalleId = 0;
            this.Cantidad = 0;
            this.DetalleReservaItem = new List<DespachoReservaOPModel>();
        }

        public DespachoDetalleSaveModel( DespachoDetalleEntity ent)
        {
            this.DespachoDetalleId = ent.DespachoDetalleId;
            this.DespachoId = ent.DespachoId;
            this.OrdenPedidoDetalleId = ent.OrdenPedidoDetalleId;
            this.Cantidad = ent.Cantidad;
        }

        [JsonPropertyName("DespachoDetalleId")]
        public Int32 DespachoDetalleId { get; set; }

        [JsonPropertyName("DespachoId")]
        public Int32 DespachoId { get; set; }

        [JsonPropertyName("OrdenPedidoDetalleId")]
        public Int32 OrdenPedidoDetalleId { get; set; }

        [JsonPropertyName("Cantidad")]
        public Decimal Cantidad { get; set; }

        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }


        [JsonPropertyName("DetalleReservaItem")]
        public List<DespachoReservaOPModel> DetalleReservaItem { get; set; }

    }
}

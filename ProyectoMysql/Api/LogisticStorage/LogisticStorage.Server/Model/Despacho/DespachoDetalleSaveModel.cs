using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoDetalleSaveModel
    {
        public DespachoDetalleSaveModel() { 
            DespachoDetalleId = 0;
            DespachoId = 0;
            OrdenPedidoDetalleId = 0;
            Cantidad = 0;
        }

        public DespachoDetalleSaveModel( DespachoDetalleEntity ent)
        {
            DespachoDetalleId = ent.DespachoDetalleId;
            DespachoId = ent.DespachoId;
            OrdenPedidoDetalleId = ent.OrdenPedidoDetalleId;
            Cantidad = ent.Cantidad;
         
        }

        [JsonPropertyName("DespachoDetalleId")]
        public Int32 DespachoDetalleId { get; set; }

        [JsonPropertyName("DespachoId")]
        public Int32 DespachoId { get; set; }

        [JsonPropertyName("OrdenPedidoDetalleId")]
        public Int32 OrdenPedidoDetalleId { get; set; }

        [JsonPropertyName("Cantidad")]
        public Int32 Cantidad { get; set; }

        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }

    }
}

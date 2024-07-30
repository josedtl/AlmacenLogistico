using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoSaveModel
    {
        public DespachoSaveModel() {
            DespachoId = 0;
            OrdenPedidoId = 0;
            Codigo = "";
            EntidadEntregadoId = 0;
            FechaHoraEntrega = DateTime.Now;
            FechaRegistro = DateTime.Now;
            }

        public DespachoSaveModel(DespachoSaveModel Ent)
        {
            DespachoId = Ent.DespachoId;
            OrdenPedidoId = Ent.OrdenPedidoId;
            Codigo = Ent.Codigo;
            EntidadEntregadoId = Ent.EntidadEntregadoId;
            FechaHoraEntrega = Ent.FechaHoraEntrega;
            FechaRegistro = Ent.FechaRegistro;

        }


        [JsonPropertyName("DespachoId")]
        public Int32 DespachoId { get; set; }

        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }

        [JsonPropertyName("Codigo")]
        public string Codigo { get; set; }

        [JsonPropertyName("EntidadEntregadoId")]
        public Int32 EntidadEntregadoId { get; set; }

        [JsonPropertyName("FechaHoraEntrega")]
        public DateTime FechaHoraEntrega { get; set; }
        [JsonPropertyName("FechaRegistro")]
        public DateTime FechaRegistro { get; set; }

        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }

        [JsonPropertyName("DetalleItems")]
        public List<DespachoDetalleSaveModel> DetalleItems { get; set; }
    }
}

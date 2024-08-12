using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoSaveModel
    {
        public DespachoSaveModel()
        {
            this.DespachoId = 0;
            this.OrdenPedidoId = 0;
            this.Codigo = "";
            this.EntidadEntregadoId = 0;
            this.FechaHoraEntrega = DateTime.Now;
            this.FechaRegistro = String.Empty;
            this.NomProceso = String.Empty;
            this.NomResponsable = String.Empty;
            this.DetalleItems = new List<DespachoDetalleSaveModel>();
        }

        public DespachoSaveModel(DespachoEntity Ent)
        {
            this.DespachoId = Ent.DespachoId;
            this.OrdenPedidoId = Ent.OrdenPedidoId;
            this.Codigo = Ent.Codigo;
            this.EntidadEntregadoId = Ent.EntidadEntregadoId;
            this.FechaHoraEntrega = Ent.FechaHoraEntrega;
            this.FechaRegistro = Ent.FechaRegistro.ToString("dd-MM-yyyy");
            this.NomProceso = Ent.NomProceso;
            this.NomResponsable = Ent.NomResponsable;
            this.DetalleItems = new List<DespachoDetalleSaveModel>();
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
        public String FechaRegistro { get; set; }

        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }
        [JsonPropertyName("NomProceso")]
        public string NomProceso { get; set; }

        [JsonPropertyName("NomResponsable")]
        public String NomResponsable { get; set; }

        [JsonPropertyName("DetalleItems")]
        public List<DespachoDetalleSaveModel> DetalleItems { get; set; }
    }
}

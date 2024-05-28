using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class RecepcionSaveModel
    {
        public RecepcionSaveModel()
        {
            this.RecepcionId = 0;
            this.ProcesoId = 0;
            this.EstadoProcesoId = 0;
            this.Codigo = String.Empty;
            this.EntidadId = 0;
            this.ObjetoId = 0;
            this.TipoComprobanteId = 0;
            this.SerieComprobante = String.Empty;
            this.CorrelativoComprobante = String.Empty;
            this.FechaRecepcion = DateTime.Now;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.Observacion = String.Empty;
        }
        public RecepcionSaveModel(RecepcionEntity Item)
        {
            this.RecepcionId = Item.RecepcionId;
            this.ProcesoId = Item.ProcesoId;
            this.EstadoProcesoId = Item.EstadoProcesoId;
            this.Codigo = Item.Codigo;
            this.EntidadId = Item.EntidadId;
            this.ObjetoId = Item.ObjetoId;
            this.TipoComprobanteId = Item.TipoComprobanteId;
            this.SerieComprobante = Item.SerieComprobante;
            this.CorrelativoComprobante = Item.CorrelativoComprobante;
            this.FechaRecepcion = Item.FechaRecepcion;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.Observacion = Item.Observacion;
            this.DetalleItems = new List<RecepcionDetalleSaveModel>();
        }

        [JsonPropertyName("RecepcionId")] public Int32 RecepcionId { get; set; }
        [JsonPropertyName("ProcesoId")] public Int32 ProcesoId { get; set; }
        [JsonPropertyName("EstadoProcesoId")] public Int32 EstadoProcesoId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("EntidadId")] public Int32 EntidadId { get; set; }
        [JsonPropertyName("ObjetoId")] public Int32 ObjetoId { get; set; }
        [JsonPropertyName("TipoComprobanteId")] public Int32 TipoComprobanteId { get; set; }
        [JsonPropertyName("SerieComprobante")] public String SerieComprobante { get; set; }
        [JsonPropertyName("CorrelativoComprobante")] public String CorrelativoComprobante { get; set; }
        [JsonPropertyName("FechaRecepcion")] public DateTime FechaRecepcion { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("CodUsuario")] public String CodUsuario { get; set; }
        [JsonPropertyName("Observacion")] public String Observacion { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }

        [JsonPropertyName("DetalleItems")] public List<RecepcionDetalleSaveModel> DetalleItems { get; set; }

    }
}

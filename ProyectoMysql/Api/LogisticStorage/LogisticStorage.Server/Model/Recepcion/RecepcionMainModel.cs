using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class RecepcionMainModel
    {
        public RecepcionMainModel()
        {
            this.RecepcionId = 0;
            this.Codigo = String.Empty;
            this.TipoRecepcion = String.Empty;
            this.TipoComprobante = String.Empty;
            this.SerieComprobante = String.Empty;
            this.CorrelativoComprobante = String.Empty;
            this.FechaRecepcion = DateTime.Now;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.ValorEstadoProceso = 0;
            this.NomEstadoProceso = String.Empty;
        }
        public RecepcionMainModel(RecepcionEntity Item)
        {
            this.RecepcionId = Item.RecepcionId;
            this.Codigo = Item.Codigo;
            this.TipoRecepcion = Item.TipoRecepcion;
            this.TipoComprobante = Item.TipoComprobante;
            this.SerieComprobante = Item.SerieComprobante;
            this.CorrelativoComprobante = Item.CorrelativoComprobante;
            this.FechaRecepcion = Item.FechaRecepcion;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.ValorEstadoProceso = Item.ValorEstadoProceso;
            this.NomEstadoProceso = Item.NomEstadoProceso;
        }
        [JsonPropertyName("RecepcionId")] public Int32 RecepcionId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("TipoRecepcion")] public String TipoRecepcion { get; set; }
        [JsonPropertyName("TipoComprobante")] public String TipoComprobante { get; set; }
        [JsonPropertyName("SerieComprobante")] public String SerieComprobante { get; set; }
        [JsonPropertyName("CorrelativoComprobante")] public String CorrelativoComprobante { get; set; }
        [JsonPropertyName("FechaRecepcion")] public DateTime FechaRecepcion { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("CodUsuario")] public String CodUsuario { get; set; }
        [JsonPropertyName("ValorEstadoProceso")] public Int16 ValorEstadoProceso { get; set; }
        [JsonPropertyName("NomEstadoProceso")] public String NomEstadoProceso { get; set; }
    }
}

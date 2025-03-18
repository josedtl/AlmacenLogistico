using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Models.Comprobante
{
    public class ComprobantePagoModel
    {

        public ComprobantePagoModel(ComprobantePagoEntity Item)
        {

            this.ComprobantePagoId = Item.ComprobantePagoId;
            this.TipoOperacionId = Item.TipoOperacionId;
            this.TipoDocumentoId = Item.TipoDocumentoId;
            this.SecuenciaCorrelativo = Item.SecuenciaCorrelativo;
            this.Correlativo = Item.Correlativo;
            this.CorrelativoId = Item.CorrelativoId;
            this.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
            this.ClienteId = Item.ClienteId;
            this.NumDocumento = Item.NumDocumento;
            this.NombreCliente = Item.NombreCliente;
            this.Direccion = Item.Direccion;
            this.FormaPagoId = Item.FormaPagoId;
            this.TipoTributoId = Item.TipoTributoId;
            this.MonedaId = Item.MonedaId;
            this.TipoPrecioVentaUnitarioId = Item.TipoDocumentoIdentidadId;
            this.ImpuestoTotal = Item.ImpuestoTotal;
            this.ImporteBrutoTotal = Item.ImporteBrutoTotal;
            this.ImporteNetoTotal = Item.ImporteNetoTotal;

        }
        public ComprobantePagoModel()
        {

            this.ComprobantePagoId = 0;
            this.TipoOperacionId = 0;
            this.TipoDocumentoId = 0;
            this.SecuenciaCorrelativo = 0;
            this.Correlativo = String.Empty;
            this.CorrelativoId = 0;
            this.TipoDocumentoIdentidadId = 0;
            this.ClienteId = 0;
            this.NumDocumento = String.Empty;
            this.NombreCliente = String.Empty;
            this.Direccion = String.Empty;
            this.FormaPagoId = 0;
            this.TipoTributoId = 0;
            this.MonedaId = 0;
            this.TipoPrecioVentaUnitarioId = 0;
            this.ImpuestoTotal = 0;
            this.ImporteBrutoTotal = 0;
            this.ImporteNetoTotal = 0;
            this.ComprobantePagoDetalle_List = new List<ComprobantePagoDetalleModel>();

        }

        [JsonPropertyName("ComprobantePagoId")] public int ComprobantePagoId { get; set; }
        [JsonPropertyName("TipoOperacionId")] public int TipoOperacionId { get; set; }
        [JsonPropertyName("TipoDocumentoId")] public int TipoDocumentoId { get; set; }
        [JsonPropertyName("SecuenciaCorrelativo")] public int SecuenciaCorrelativo { get; set; }
        [JsonPropertyName("Correlativo")] public string Correlativo { get; set; }
        [JsonPropertyName("CorrelativoId")] public int CorrelativoId { get; set; }
        [JsonPropertyName("TipoDocumentoIdentidadId")] public int TipoDocumentoIdentidadId { get; set; }
        [JsonPropertyName("ClienteId")] public int ClienteId { get; set; }
        [JsonPropertyName("NumDocumento")] public string NumDocumento { get; set; }
        [JsonPropertyName("NombreCliente")] public string NombreCliente { get; set; }
        [JsonPropertyName("Direccion")] public string Direccion { get; set; }
        [JsonPropertyName("FormaPagoId")] public int FormaPagoId { get; set; }
        [JsonPropertyName("TipoTributoId")] public int TipoTributoId { get; set; }
        [JsonPropertyName("MonedaId")] public int MonedaId { get; set; }
        [JsonPropertyName("TipoPrecioVentaUnitarioId")] public int TipoPrecioVentaUnitarioId { get; set; }
        [JsonPropertyName("ImpuestoTotal")] public decimal ImpuestoTotal { get; set; }
        [JsonPropertyName("ImporteBrutoTotal")] public decimal ImporteBrutoTotal { get; set; }
        [JsonPropertyName("ImporteNetoTotal")] public decimal ImporteNetoTotal { get; set; }
        [JsonPropertyName("LogicalState")] public Int16 LogicalState { get; set; }

        [JsonPropertyName("ComprobantePagoDetalle_List")] public List<ComprobantePagoDetalleModel> ComprobantePagoDetalle_List { get; set; }
    }
}

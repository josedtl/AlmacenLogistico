using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server
{
    public class ComprobantePagoMainModel
    {
        public ComprobantePagoMainModel(ComprobantePagoEntity Item)
        {

            this.ComprobantePagoId = Item.ComprobantePagoId;
            this.Correlativo = Item.Correlativo;
            this.TipoDocumento = Item.TipoDocumento;
            this.Moneda = Item.Moneda;
            this.FormaPago = Item.FormaPago;
            this.NumDocumento = Item.NumDocumento;
            this.NombreCliente = Item.NombreCliente;
            this.ImpuestoTotal = Item.ImpuestoTotal;
            this.ImporteBrutoTotal = Item.ImporteBrutoTotal;
            this.ImporteNetoTotal = Item.ImporteNetoTotal;

        }
        public ComprobantePagoMainModel()
        {

            this.ComprobantePagoId = 0;
            this.Correlativo = String.Empty;
            this.TipoDocumento = String.Empty;
            this.Moneda = String.Empty;
            this.FormaPago = String.Empty;
            this.NumDocumento = String.Empty;
            this.NombreCliente = String.Empty;
            this.ImpuestoTotal = 0;
            this.ImporteBrutoTotal = 0;
            this.ImporteNetoTotal = 0;

        }

        [JsonPropertyName("ComprobantePagoId")] public int ComprobantePagoId { get; set; }
        [JsonPropertyName("Correlativo")] public string Correlativo { get; set; }
        [JsonPropertyName("TipoDocumento")] public string TipoDocumento { get; set; }
        [JsonPropertyName("NumDocumento")] public string NumDocumento { get; set; }
        [JsonPropertyName("NombreCliente")] public string NombreCliente { get; set; }
        [JsonPropertyName("FormaPago")] public string FormaPago { get; set; }
        [JsonPropertyName("Moneda")] public string Moneda { get; set; }
        [JsonPropertyName("ImpuestoTotal")] public decimal ImpuestoTotal { get; set; }
        [JsonPropertyName("ImporteBrutoTotal")] public decimal ImporteBrutoTotal { get; set; }
        [JsonPropertyName("ImporteNetoTotal")] public decimal ImporteNetoTotal { get; set; }

      

    }
}

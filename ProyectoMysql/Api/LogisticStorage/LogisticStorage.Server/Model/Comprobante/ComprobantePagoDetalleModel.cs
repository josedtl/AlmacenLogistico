using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server
{
    public class ComprobantePagoDetalleModel
    {
        public ComprobantePagoDetalleModel()
        {
            this.ComprobantePagoDetalleId = 0;
            this.ComprobantePagoId = 0;
            this.Numeracion = 0;
            this.PrecioUnitario = 0;
            this.PrecioUnitarioImpuesto = 0;
            this.Cantidad = 0;
            this.PrecioBrutoTotal = 0;
            this.ImpuestoTotal = 0;
            this.TipoAfectacionIgvId = 0;
            this.TipoTributoId = 0;
            this.UnidadMedidaId = 0;
            this.CodigoItem = "";
            this.Concepto = "";
        }
        public ComprobantePagoDetalleModel(ComprobantePagoDetalleEntity Item)
        {
            this.ComprobantePagoDetalleId = Item.ComprobantePagoDetalleId;
            this.ComprobantePagoId = Item.ComprobantePagoId;
            this.Numeracion = Item.Numeracion;
            this.PrecioUnitario = Item.PrecioUnitario;
            this.PrecioUnitarioImpuesto = Item.PrecioUnitarioImpuesto;
            this.Cantidad = Item.Cantidad;
            this.PrecioBrutoTotal = Item.PrecioBrutoTotal;
            this.ImpuestoTotal = Item.ImpuestoTotal;
            this.TipoAfectacionIgvId = Item.TipoAfectacionIgvId;
            this.TipoTributoId = Item.TipoTributoId;
            this.UnidadMedidaId = Item.UnidadMedidaId;
            this.CodigoItem = Item.CodigoItem;
            this.Concepto = Item.Concepto;
        }

        [JsonPropertyName("ComprobantePagoDetalleId")]
        public int ComprobantePagoDetalleId { get; set; }

        [JsonPropertyName("ComprobantePagoId")]
        public int ComprobantePagoId { get; set; }

        [JsonPropertyName("Numeracion")]
        public int Numeracion { get; set; }

        [JsonPropertyName("PrecioUnitario")]
        public decimal PrecioUnitario { get; set; }

        [JsonPropertyName("PrecioUnitarioImpuesto")]
        public decimal PrecioUnitarioImpuesto { get; set; }

        [JsonPropertyName("Cantidad")]
        public decimal Cantidad { get; set; }

        [JsonPropertyName("PrecioBrutoTotal")]
        public decimal PrecioBrutoTotal { get; set; }

        [JsonPropertyName("ImpuestoTotal")]
        public decimal ImpuestoTotal { get; set; }

        [JsonPropertyName("TipoAfectacionIgvId")]
        public int TipoAfectacionIgvId { get; set; }

        [JsonPropertyName("TipoTributoId")]
        public int TipoTributoId { get; set; }

        [JsonPropertyName("UnidadMedidaId")]
        public int UnidadMedidaId { get; set; }

        [JsonPropertyName("CodigoItem")]
        public string CodigoItem { get; set; }

        [JsonPropertyName("Concepto")]
        public string Concepto { get; set; }
        [JsonPropertyName("LogicalState")] public Int16 LogicalState { get; set; }
    }
}
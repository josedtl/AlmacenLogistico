using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Tarifa
{
    public class TarifaMainModel
    {
        public TarifaMainModel() { 
            this.TarifaId = 0;
            this.Valor=String.Empty;
            this.NomProducto = String.Empty;
            this.NomMoneda = String.Empty;
            this.NomUnidad = String.Empty;
            this.PrecioConImpuesto = 0;
            this.PrecioSinImpuesto = 0;
            this.Vigente = true;
            this.FechaCreacion=DateTime.Now;
            this.NomImpuesto =String.Empty;

        }    

        public  TarifaMainModel(TarifaEntity ent) {
            this.TarifaId = ent.TarifaId;
            this.Valor = ent.Valor;
            this.NomProducto = ent.NomProducto;
            this.NomMoneda = ent.NomMoneda;
            this.NomUnidad = ent.NomUnidad;
            this.PrecioConImpuesto = ent.PrecioConImpuesto;
            this.PrecioSinImpuesto = ent.PrecioSinImpuesto;
            this.Vigente = true;
            this.FechaCreacion = DateTime.Now;
            this.NomImpuesto= ent.NomImpuesto;
        }
        [JsonPropertyName("TarifaId")] public Int32 TarifaId { get; set; }
        [JsonPropertyName("NomProducto")] public string NomProducto { get; set; }
        [JsonPropertyName("NomUnidad")] public string NomUnidad { get; set; }
        [JsonPropertyName("NomMoneda")] public string NomMoneda { get; set; }
        [JsonPropertyName("Valor")] public string Valor { get; set; }
        [JsonPropertyName("PrecioSinImpuesto")] public Decimal PrecioSinImpuesto { get; set; }
        [JsonPropertyName("PrecioConImpuesto")] public Decimal PrecioConImpuesto { get; set; }
        [JsonPropertyName("FechaCreacion")] public DateTime FechaCreacion { get; set; }
        [JsonPropertyName("Vigente")] public Boolean Vigente { get; set; }
        [JsonPropertyName("NomImpuesto")] public string NomImpuesto { get; set; }
    }
}

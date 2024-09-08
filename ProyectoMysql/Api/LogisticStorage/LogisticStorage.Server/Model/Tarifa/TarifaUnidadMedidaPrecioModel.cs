using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Tarifa
{
    public class TarifaUnidadMedidaPrecioModel
    {
        public TarifaUnidadMedidaPrecioModel() { 
            this.TarifaId = 0;
            this.CodUnidad = String.Empty;
            this.UnidadMedidaId = 0;
            this.PrecioConImpuesto = 0;
        }

        public TarifaUnidadMedidaPrecioModel(TarifaEntity ent) {
            this.TarifaId = ent.TarifaId;
            this.CodUnidad = ent.CodUnidad;
            this.UnidadMedidaId = ent.UnidadMedidaId;
            this.PrecioConImpuesto = ent.PrecioConImpuesto;
        }

        [JsonPropertyName("TarifaId")] public Int32 TarifaId { get; set; }
        [JsonPropertyName("CodUnidad")] public String CodUnidad { get; set; }
        [JsonPropertyName("UnidadMedidaId")] public Int32 UnidadMedidaId { get; set; }
        [JsonPropertyName("PrecioConImpuesto")] public Decimal PrecioConImpuesto { get; set; }

    }
}

using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Tarifa
{
    public class TarifaMonedaModel
    {
        public TarifaMonedaModel() { 
            this.MonedaId = 0;
            this.CodMoneda = String.Empty;
            this.Simbolo = String.Empty;
        }

        public TarifaMonedaModel(TarifaEntity ent) {
            this.MonedaId = ent.MonedaId;
            this.CodMoneda = ent.CodMoneda;
            this.Simbolo = ent.Simbolo;
        }


        [JsonPropertyName("MonedaId")] public Int32 MonedaId { get; set; }
        [JsonPropertyName("CodMoneda")] public String CodMoneda { get; set; }
        [JsonPropertyName("Simbolo")] public String Simbolo { get; set; }

    }
}

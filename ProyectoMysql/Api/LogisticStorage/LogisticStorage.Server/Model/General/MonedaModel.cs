using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.General
{
    public class MonedaModel
    {
        public MonedaModel()
        {

            this.MonedaId = 0;
            this.CodMoneda = String.Empty;
            this.Simbolo = String.Empty;
            this.Descripcion = String.Empty;
        }

        public MonedaModel(MonedaEntity Item)
        {

            this.MonedaId = Item.MonedaId;
            this.CodMoneda = Item.CodMoneda;
            this.Simbolo = Item.Simbolo;
            this.Descripcion = Item.Descripcion;
        }
        [JsonPropertyName("MonedaId")] public Int32 MonedaId { get; set; }
        [JsonPropertyName("CodMoneda")] public String CodMoneda { get; set; }
        [JsonPropertyName("Simbolo")] public String Simbolo { get; set; }
        [JsonPropertyName("Descripcion")] public String Descripcion { get; set; }
    }
}

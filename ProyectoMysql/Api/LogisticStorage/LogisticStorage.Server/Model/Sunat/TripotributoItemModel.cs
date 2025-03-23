using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Model.Sunat
{
    public class TripotributoItemModel
    {
        public TripotributoItemModel()
        {
            TipoTributosId = 0;
            Nombre = String.Empty;
        }

        public TripotributoItemModel(ST05_TripotributoEntity Item)
        {
            TipoTributosId = Item.TipoTributosId;
            Nombre = Item.Nombre;
        }

        [JsonPropertyName("TipoTributosId")] public Int32 TipoTributosId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
    }
}

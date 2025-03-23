using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Model.Sunat
{
    public class MonedaItemModel
    {

        public MonedaItemModel()
        {
            MonedaId = 0;
            CodigoSunat = String.Empty;
            Simbolo = String.Empty;
            Nombre = String.Empty;
        }
        public MonedaItemModel(ST02_MonedaEntity Item)
        {
            MonedaId = Item.MonedaId;
            CodigoSunat = Item.CodigoSunat;
            Simbolo = Item.Simbolo;
            Nombre = Item.Nombre;
        }
        [JsonPropertyName("MonedaId")] public Int32 MonedaId { get; set; }
        [JsonPropertyName("CodigoSunat")] public String CodigoSunat { get; set; }
        [JsonPropertyName("Simbolo")] public String Simbolo { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }

    }
}

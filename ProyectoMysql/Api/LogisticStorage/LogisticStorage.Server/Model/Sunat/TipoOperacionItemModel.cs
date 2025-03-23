using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Model.Sunat
{
    public class TipoOperacionItemModel
    {
        public TipoOperacionItemModel()
        {
            TipoOperacionId = 0;
            Codigo = String.Empty;
            Nombre = String.Empty;
        }

        public TipoOperacionItemModel(ST51_TipoOperacionEntity Item)
        {
            TipoOperacionId = Item.TipoOperacionId;
            Codigo = Item.Codigo;
            Nombre = Item.Nombre;
        }

        [JsonPropertyName("TipoOperacionId")] public Int32 TipoOperacionId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
    }
}

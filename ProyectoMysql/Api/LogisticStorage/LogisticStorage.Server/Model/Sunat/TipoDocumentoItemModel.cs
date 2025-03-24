using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Model.Sunat
{
    public class TipoDocumentoItemModel
    {
        public TipoDocumentoItemModel()
        {
            TipoDocumentoId = 0;
            Codigo = String.Empty;
            Nombre = String.Empty;
        }

        public TipoDocumentoItemModel(ST01_TipodocumentoEntity Item)
        {
            TipoDocumentoId = Item.TipoDocumentoId;
            Codigo = Item.Codigo;
            Nombre = Item.Nombre;
        }

        [JsonPropertyName("TipoDocumentoId")] public Int32 TipoDocumentoId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }

    }
}

using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Model.Sunat
{
    public class TipoDocumentoIdentidadItemModel
    {
        public TipoDocumentoIdentidadItemModel()
        {
            TipoDocumentoIdentidadId = 0;
            Nombre = String.Empty;
        }

        public TipoDocumentoIdentidadItemModel(ST06_TipoDocumentoIdentidadEntity Item)
        {
            TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
            Nombre = Item.Nombre;
        }

        [JsonPropertyName("TipoDocumentoIdentidadId")] public Int32 TipoDocumentoIdentidadId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
    }
}

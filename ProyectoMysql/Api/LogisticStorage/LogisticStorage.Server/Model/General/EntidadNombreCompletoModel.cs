using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class EntidadNombreCompletoModel
    {
        public EntidadNombreCompletoModel()
        {
            this.EntidadId = 0;
            this.Nombres = String.Empty;
        }
        public EntidadNombreCompletoModel(EntidadEntity Item)
        {
            this.EntidadId = Item.EntidadId;
            this.Nombres = Item.Nombres;
        }

        [JsonPropertyName("EntidadId")]
        public Int32 EntidadId { get; set; }
        [JsonPropertyName("Nombres")]
        public String Nombres { get; set; }

    }
}

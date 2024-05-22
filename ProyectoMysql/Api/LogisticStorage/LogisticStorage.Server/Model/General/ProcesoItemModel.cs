using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class ProcesoItemModel
    {

        public ProcesoItemModel()
        {
            this.ProcesoId = 0;
            this.Nombre = String.Empty;
        }
        public ProcesoItemModel(ProcesoEntity Item)
        {
            this.ProcesoId = Item.ProcesoId;
            this.Nombre = Item.Nombre;
        }

        [JsonPropertyName("ProcesoId")]
        public Int32 ProcesoId { get; set; }
        [JsonPropertyName("Nombre")]
        public String Nombre { get; set; }

    }
}

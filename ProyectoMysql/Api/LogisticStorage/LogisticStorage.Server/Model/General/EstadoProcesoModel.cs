using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.General
{
    public class EstadoProcesoModel
    {

        public EstadoProcesoModel()
        {
            this.EstadoProcesoId = 0;
            this.Nombre = String.Empty;
        }

        public EstadoProcesoModel(EstadoProcesoEntity  Item)
        {
            this.EstadoProcesoId = Item.EstadoProcesoId;
            this.Nombre = Item.Nombre;
        }
        [JsonPropertyName("EstadoProcesoId")]
        public Int32 EstadoProcesoId { get; set; }
        [JsonPropertyName("Nombre")]
        public String Nombre { get; set; }
   

    }
}

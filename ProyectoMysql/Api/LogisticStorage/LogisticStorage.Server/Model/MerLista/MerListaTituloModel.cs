using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class MerListaTituloModel
    {
        public MerListaTituloModel()
        {
            this.CampoId = 0;
            this.Nombre = String.Empty;
        }

        public MerListaTituloModel(MerListaEntity item)
        {
            this.CampoId = item.CampoId;
            this.Nombre = item.Nombre;
        }

        [JsonPropertyName("CampoId")] public Int32 CampoId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
    }
}

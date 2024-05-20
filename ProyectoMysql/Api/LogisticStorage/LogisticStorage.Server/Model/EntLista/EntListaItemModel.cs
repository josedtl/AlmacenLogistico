using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class EntListaItemModel
    {

        public EntListaItemModel()
        {
            this.ListaId = 0;
            this.CampoId = 0;
            this.Nombre = String.Empty;
            this.Codigo = String.Empty;
        }

        public EntListaItemModel(EntListaEntity item)
        {
            this.ListaId = item.ListaId;
            this.CampoId = item.CampoId;
            this.Nombre = item.Nombre;
            this.Codigo = item.Codigo;
        }

        [JsonPropertyName("ListaId")] public Int32 ListaId { get; set; }
        [JsonPropertyName("CampoId")] public Int32 CampoId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
    }
}

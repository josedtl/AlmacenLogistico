using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.General
{

    public class RecepListaModel
    {
        public RecepListaModel()
        {
            this.ListaId = 0;
            this.Nombre = String.Empty;
        }

        public RecepListaModel(RecepListaEntity Item)
        {
            this.ListaId = Item.ListaId;
            this.Nombre = Item.Nombre;
        }

        [JsonPropertyName("ListaId")] public Int32 ListaId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }

    }

}

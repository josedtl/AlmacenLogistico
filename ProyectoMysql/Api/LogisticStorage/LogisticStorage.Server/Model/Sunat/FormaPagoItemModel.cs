using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Model.Sunat
{
    public class FormaPagoItemModel
    {
        public FormaPagoItemModel()
        {
            FormaPagoId = 0;
            Nombre = String.Empty;
        }

        public FormaPagoItemModel(FormaPagoListaEntity Item)
        {
            FormaPagoId = Item.FormaPagoId;
            Nombre = Item.Nombre;
        }

        [JsonPropertyName("FormaPagoId")] public Int32 FormaPagoId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }

    }
}

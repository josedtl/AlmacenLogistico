using System.Text.Json.Serialization;
using FactCore.EntityLayer;

namespace LogisticStorage.Server.Model.Sunat
{
    public class tipoprecioventaunitarioItemModel
    {

        public tipoprecioventaunitarioItemModel()
        {
            TipoPrecioVentaUnitarioId = 0;
            Codigo = String.Empty;
            Nombre = String.Empty;
        }

        public tipoprecioventaunitarioItemModel(ST16_tipoprecioventaunitarioEntity Item)
        {
            TipoPrecioVentaUnitarioId = Item.TipoPrecioVentaUnitarioId;
            Codigo = Item.Codigo;
            Nombre = Item.Nombre;
        }

        [JsonPropertyName("TipoPrecioVentaUnitarioId")] public Int32 TipoPrecioVentaUnitarioId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }

    }
}

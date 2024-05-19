using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.General
{
    public class UnidadMedidaItemModel
    {
        public UnidadMedidaItemModel()
        {

            this.UnidadMedidaId = 0;
            this.Codigo = String.Empty;
            this.CodigoComercial = String.Empty;
            this.Nombre = String.Empty;
        }

        public UnidadMedidaItemModel( UnidadMedidaEntity Item)
        {

            this.UnidadMedidaId = Item.UnidadMedidaId;
            this.Codigo = Item.Codigo;
            this.CodigoComercial  = Item.CodigoComercial;
            this.Nombre = Item.Nombre;
        }

        [JsonPropertyName("UnidadMedidaId")]
        public Int32 UnidadMedidaId { get; set; }
        [JsonPropertyName("Codigo")]
        public String Codigo { get; set; }
        [JsonPropertyName("CodigoComercial")]
        public String CodigoComercial { get; set; }
        [JsonPropertyName("Nombre")]
        public String Nombre { get; set; }
    }
}

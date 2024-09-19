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
            this.NomProducto = string.Empty;
            this.MercaderiaPresentacionId = 0;
            this.MercaderiaId = 0;
        }

        public UnidadMedidaItemModel( UnidadMedidaEntity Item)
        {

            this.UnidadMedidaId = Item.UnidadMedidaId;
            this.Codigo = Item.Codigo;
            this.CodigoComercial  = Item.CodigoComercial;
            this.Nombre = Item.Nombre;
            this.MercaderiaId = Item.MercaderiaId;
            this.MercaderiaPresentacionId= Item.MercaderiaPresentacionId;
            this.NomProducto= Item.NomProducto;

        }

        [JsonPropertyName("UnidadMedidaId")]
        public Int32 UnidadMedidaId { get; set; }
        [JsonPropertyName("Codigo")]
        public String Codigo { get; set; }
        [JsonPropertyName("CodigoComercial")]
        public String CodigoComercial { get; set; }
        [JsonPropertyName("Nombre")]
        public String Nombre { get; set; }
        public Int32 MercaderiaPresentacionId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public String NomProducto { get; set; }
    }
}

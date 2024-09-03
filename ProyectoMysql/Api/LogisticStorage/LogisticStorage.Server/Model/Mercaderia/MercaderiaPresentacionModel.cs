using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class MercaderiaPresentacionModel
    {
        public MercaderiaPresentacionModel()
        {
            this.MercaderiaPresentacionId = 0;
            this.MercaderiaId = 0;
            this.UnidadMedidaId = 0;
            this.Cantidad = 0;
        }

        public MercaderiaPresentacionModel(MercaderiaPresentacionEntity Item)
        {
            this.MercaderiaPresentacionId = Item.MercaderiaPresentacionId;
            this.MercaderiaId = Item.MercaderiaId;
            this.UnidadMedidaId = Item.UnidadMedidaId;
            this.Cantidad = Item.Cantidad;
        
        }
        [JsonPropertyName("MercaderiaPresentacionId")] public Int32 MercaderiaPresentacionId { get; set; }
        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("UnidadMedidaId")] public Int32 UnidadMedidaId { get; set; }
        [JsonPropertyName("Cantidad")] public Decimal Cantidad { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }
        

    }
}

using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class UbigeoItemModel
    {
        public UbigeoItemModel()
        {
            this.UbigeoId = 0;
            this.DesUbigeo = String.Empty;
        }


        public UbigeoItemModel(UbigeoEntity Item)
        {
            this.UbigeoId = Item.UbigeoId;
            this.DesUbigeo = Item.DesUbigeo;
        }
        [JsonPropertyName("UbigeoId")]
        public Int32 UbigeoId { get; set; }
        [JsonPropertyName("DesUbigeo")]
        public String DesUbigeo { get; set; }
    }
}

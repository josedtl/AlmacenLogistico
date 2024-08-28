using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Mercaderia
{
    public class MercaderiaTarifaModel
    {
        public MercaderiaTarifaModel()
        {
            this.MercaderiaId = 0;
            this.Nombre = String.Empty;
        }

        public MercaderiaTarifaModel(MercaderiaEntity ent)
        {
            this.MercaderiaId = ent.MercaderiaId;
            this.Nombre = ent.Nombre;
        }
        [JsonPropertyName("MercaderiaId")] public int MercaderiaId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
    }
}

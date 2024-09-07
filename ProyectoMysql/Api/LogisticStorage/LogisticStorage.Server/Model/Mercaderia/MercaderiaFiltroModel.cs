using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class MercaderiaFiltroModel
    {
        public MercaderiaFiltroModel()
        {
            this.CategoriaId = 0;
            this.TipoId = 0;
            this.Nombre = String.Empty;
        }

        public MercaderiaFiltroModel(MercaderiaEntity item)
        {
            this.CategoriaId = item.CategoriaId;
            this.Nombre = item.Nombre;
            this.TipoId = item.TipoProductoId;
        }

        [JsonPropertyName("CategoriaId")] public Int32 CategoriaId { get; set; }
        [JsonPropertyName("TipoId")] public Int32 TipoId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
    }
}

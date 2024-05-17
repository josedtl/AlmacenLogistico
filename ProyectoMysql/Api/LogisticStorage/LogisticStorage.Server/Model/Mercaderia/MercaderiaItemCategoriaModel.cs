using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class MercaderiaItemCategoriaModel
    {
        public MercaderiaItemCategoriaModel()
        {
            this.MercaderiaId = 0;
            this.Codigo = String.Empty;
            this.CategoriaId = 0;
            this.Nombre = String.Empty;
            this.Descripcion = String.Empty;
            this.UnidadMedidaId = 0;
        }

        public MercaderiaItemCategoriaModel(MercaderiaEntity item)
        {
            this.MercaderiaId = item.MercaderiaId;
            this.Codigo = item.Codigo;
            this.CategoriaId = item.CategoriaId;
            this.Nombre = item.Nombre;
            this.Descripcion = item.Descripcion;
            this.UnidadMedidaId = item.UnidadMedidaId;
        }

        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("CategoriaId")] public Int32 CategoriaId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
        [JsonPropertyName("Descripcion")] public String Descripcion { get; set; }
        [JsonPropertyName("UnidadMedidaId")] public Int32 UnidadMedidaId { get; set; }
    }
}

using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class MercaderiaItemOPModel
    {
        public MercaderiaItemOPModel()
        {
            this.MercaderiaId = 0;
            this.Nombre = String.Empty;
            this.CodigoUM = String.Empty;
            this.Descripcion = String.Empty;
            this.Stock = 0;
            this.CategoriaId = 0;
        }

        public MercaderiaItemOPModel(MercaderiaEntity item)
        {
            this.MercaderiaId = item.MercaderiaId;
            this.Nombre = item.Nombre;
            this.CodigoUM = item.CodigoUM;
            this.Descripcion = item.Descripcion;
            this.Stock = item.Stock;
            this.CategoriaId = item.CategoriaId;
        }

        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
        [JsonPropertyName("CodigoUM")] public String CodigoUM { get; set; }
        [JsonPropertyName("Descripcion")] public String Descripcion { get; set; }
        [JsonPropertyName("Stock")] public Decimal Stock { get; set; }
        [JsonPropertyName("CategoriaId")] public Int32 CategoriaId { get; set; }
    }
}

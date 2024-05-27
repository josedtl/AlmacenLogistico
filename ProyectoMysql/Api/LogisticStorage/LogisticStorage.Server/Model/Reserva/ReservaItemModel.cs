using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class ReservaItemModel
    {
        public ReservaItemModel()
        {
            this.MercaderiaId = 0;
            this.Codigo = String.Empty;
            this.Nombre = String.Empty;
            this.CodigoComercial = String.Empty;
            this.CantidaPedido = 0;
            this.Cantidad = 0;
            this.Stock = 0;
        }
        public ReservaItemModel( ReservaEntity Item)
        {
            this.MercaderiaId = Item.MercaderiaId;
            this.Codigo = Item.Codigo;
            this.Nombre = Item.Nombre;
            this.CodigoComercial = Item.CodigoComercial;
            this.CantidaPedido = Item.CantidaPedido;
            this.Cantidad = Item.Cantidad;
            this.Stock = Item.Stock;
        }
        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
        [JsonPropertyName("CodigoComercial")] public String CodigoComercial { get; set; }
        [JsonPropertyName("CantidaPedido")] public Decimal CantidaPedido { get; set; }
        [JsonPropertyName("Cantidad")] public Decimal Cantidad { get; set; }
        [JsonPropertyName("Stock")] public Decimal Stock { get; set; }
    }
}

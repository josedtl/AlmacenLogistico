using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class StockMercaderiaMainModel
    {
        public StockMercaderiaMainModel()
        {

            this.MercaderiaId = 0;
            this.Codigo = String.Empty;
            this.NomCategoria = String.Empty;
            this.NomTipoProducto = String.Empty;
            this.NomMarca = String.Empty;
            this.NomModelo = String.Empty;
            this.NomUnidadMedida = String.Empty;
            this.Stock = 0;
            this.Reserva = 0;
        }
        public StockMercaderiaMainModel(StockMercaderiaEntity Item)
        {

            this.MercaderiaId = Item.MercaderiaId;
            this.Codigo = Item.Codigo;
            this.NomCategoria = Item.NomCategoria;
            this.NomTipoProducto = Item.NomTipoProducto;
            this.NomMarca = Item.NomMarca;
            this.NomModelo = Item.NomModelo;
            this.NomUnidadMedida = Item.NomUnidadMedida;
            this.Stock = Item.Stock;
            this.Reserva = Item.Reserva;
        }

        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("NomCategoria")] public String NomCategoria { get; set; }
        [JsonPropertyName("NomTipoProducto")] public String NomTipoProducto { get; set; }
        [JsonPropertyName("NomMarca")] public String NomMarca { get; set; }
        [JsonPropertyName("NomModelo")] public String NomModelo { get; set; }
        [JsonPropertyName("NomUnidadMedida")] public String NomUnidadMedida { get; set; }
        [JsonPropertyName("Stock")] public Decimal Stock { get; set; }
        [JsonPropertyName("Reserva")] public Decimal Reserva { get; set; }

    }
}

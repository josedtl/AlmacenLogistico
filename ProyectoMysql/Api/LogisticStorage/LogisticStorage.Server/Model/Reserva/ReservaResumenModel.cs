using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class ReservaResumenModel
    {
        public ReservaResumenModel()
        {
            this.MercaderiaId = 0;
            this.Codigo= String.Empty;
            this.Nombre=String.Empty;
            this.UnidadMedida=String.Empty;
            this.Reserva = 0;
            this.Stock = 0;
        }

        public ReservaResumenModel(ReservaEntity Item)
        {
            this.MercaderiaId = Item.MercaderiaId;
            this.Codigo = Item.Codigo;
            this.Nombre = Item.Nombre;
            this.UnidadMedida = Item.UnidadMedida;
            this.Reserva = Item.Reserva;
            this.Stock = Item.Stock;
        }


        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
        [JsonPropertyName("UnidadMedida")] public String UnidadMedida { get; set; }
        [JsonPropertyName("Stock")] public Decimal Stock { get; set; }
        [JsonPropertyName("Reserva")] public Decimal Reserva { get; set; }
    }
}

using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class RecepcionDetalleSaveModel
    {

        public RecepcionDetalleSaveModel()
        {

            this.RecepcionDetalleId = 0;
            this.RecepcionId = 0;
            this.MercaderiaId = 0;
            this.Cantidad = 0;
            this.Lote = String.Empty;
            this.FechaIngreso = DateTime.Now;
            this.FechaRegistro = DateTime.Now;
            this.FechaVencimiento = DateTime.Now;
            this.Observacion = String.Empty;
        }
        public RecepcionDetalleSaveModel(RecepcionDetalleEntity Item)
        {

            this.RecepcionDetalleId = Item.RecepcionDetalleId;
            this.RecepcionId = Item.RecepcionId;
            this.MercaderiaId = Item.MercaderiaId;
            this.Cantidad = Item.Cantidad;
            this.Lote = Item.Lote;
            this.FechaIngreso = Item.FechaIngreso;
            this.FechaRegistro = Item.FechaRegistro;
            this.FechaVencimiento = Item.FechaVencimiento;
            this.Observacion = Item.Observacion;
        }
        [JsonPropertyName("RecepcionDetalleId")] public Int32 RecepcionDetalleId { get; set; }
        [JsonPropertyName("RecepcionId")] public Int32 RecepcionId { get; set; }
        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("Cantidad")] public Decimal Cantidad { get; set; }
        [JsonPropertyName("Lote")] public String Lote { get; set; }
        [JsonPropertyName("FechaIngreso")] public DateTime FechaIngreso { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("FechaVencimiento")] public DateTime FechaVencimiento { get; set; }
        [JsonPropertyName("Observacion")] public String Observacion { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }
    }
}

using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.General
{
    public class PorcentajeImpuestoModel
    {
        public PorcentajeImpuestoModel()
        {

            this.PorcentajeImpuestoId = 0;
            this.Nombre = String.Empty;
            this.Descripcion = String.Empty;
            this.Valor = 0;
            this.ValorOperacion = 0;
            this.EstadoRegistro = true;
        }

        public PorcentajeImpuestoModel(PorcentajeImpuestoEntity Item)
        {

            this.PorcentajeImpuestoId = Item.PorcentajeImpuestoId;
            this.Nombre = Item.Nombre;
            this.Descripcion = Item.Descripcion;
            this.Valor = Item.Valor;
            this.ValorOperacion = Item.ValorOperacion;
            this.EstadoRegistro=Item.EstadoRegistro;
        }
        [JsonPropertyName("PorcentajeImpuestoId")] public Int32 PorcentajeImpuestoId { get; set; }
       [JsonPropertyName("Nombre")] public string Nombre { get; set; }
       [JsonPropertyName("Descripcion")] public string Descripcion { get; set; }
       [JsonPropertyName("Valor")] public decimal Valor { get; set; }
       [JsonPropertyName("ValorOperacion")] public decimal ValorOperacion { get; set; }
        [JsonPropertyName("EstadoRegistro")] public Boolean EstadoRegistro { get; set; }
    }
}

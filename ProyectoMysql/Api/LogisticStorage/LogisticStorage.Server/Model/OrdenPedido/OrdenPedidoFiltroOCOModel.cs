using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.OrdenPedido
{
    public class OrdenPedidoFiltroOCOModel
    {
        public OrdenPedidoFiltroOCOModel()
        {
            this.OrdenPedidoId = 0;
            this.Codigo = String.Empty;
            this.EntidadId = 0;
            this.NomProceso = String.Empty;
            this.NomResponsable = String.Empty;
            this.FechaEmision = DateTime.Now;
        }
        public OrdenPedidoFiltroOCOModel(OrdenPedidoEntity Item)
        {
            this.OrdenPedidoId = Item.OrdenPedidoId;
            this.Codigo = Item.Codigo;
            this.EntidadId = Item.EntidadId;
            this.NomProceso = Item.NomProceso;
            this.NomResponsable = Item.NomResponsable;
            this.FechaEmision = Item.FechaEmision;
        }

        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }

        [JsonPropertyName("Codigo")]
        public String Codigo { get; set; }

        [JsonPropertyName("EntidadId")]
        public Int32 EntidadId { get; set; }

        [JsonPropertyName("NomProceso")]
        public String NomProceso { get; set; }
       
        [JsonPropertyName("NomResponsable")]
        public String NomResponsable { get; set; }

        [JsonPropertyName("FechaEmision")]
        public DateTime FechaEmision { get; set; }
    }
}

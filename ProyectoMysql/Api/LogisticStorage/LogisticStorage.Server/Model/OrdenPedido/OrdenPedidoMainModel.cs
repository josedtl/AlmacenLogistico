using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class OrdenPedidoMainModel
    {
        public OrdenPedidoMainModel()
        {
            this.OrdenPedidoId = 0;
            this.Codigo = String.Empty;
            this.EntidadId = 0;
            this.NumDocumentoResponsable = String.Empty;
            this.NomResponsable = String.Empty;
            this.FechaEmision = DateTime.Now;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.NomEstadoProceso = String.Empty;
            this.ValorEstadoProceso = 0;
            this.NomProceso = String.Empty;
        }

        public OrdenPedidoMainModel(OrdenPedidoEntity Item)
        {
            this.OrdenPedidoId = Item.OrdenPedidoId;
            this.Codigo = Item.Codigo;
            this.EntidadId = Item.EntidadId;
            this.NumDocumentoResponsable = Item.NumDocumentoResponsable;
            this.NomResponsable = Item.NomResponsable;
            this.FechaEmision = Item.FechaEmision;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.NomEstadoProceso = Item.NomEstadoProceso;
            this.ValorEstadoProceso = Item.ValorEstadoProceso;
            this.NomProceso = Item.NomProceso;
        }


        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }

        [JsonPropertyName("Codigo")]
        public String Codigo { get; set; }

        [JsonPropertyName("EntidadId")]
        public Int32 EntidadId { get; set; }

        [JsonPropertyName("NumDocumentoResponsable")]
        public String NumDocumentoResponsable { get; set; }

        [JsonPropertyName("NomResponsable")]
        public String NomResponsable { get; set; }

        [JsonPropertyName("FechaEmision")]
        public DateTime FechaEmision { get; set; }

        [JsonPropertyName("FechaRegistro")]
        public DateTime FechaRegistro { get; set; }

        [JsonPropertyName("CodUsuario")]
        public String CodUsuario { get; set; }

        [JsonPropertyName("NomEstadoProceso")]
        public String NomEstadoProceso { get; set; }

        [JsonPropertyName("ValorEstadoProceso")]
        public Int32 ValorEstadoProceso { get; set; }

        [JsonPropertyName("NomProceso")]
        public String NomProceso { get; set; }
    }
}

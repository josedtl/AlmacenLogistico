using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class OrdenPedidoSaveModel
    {
        public OrdenPedidoSaveModel()
        {
            this.OrdenPedidoId = 0;
            this.ProcesoId = 0;
            this.TipoProcesoId = 0;
            this.EstadoProcesoId = 0;
            this.Codigo = String.Empty;
            this.EntidadId = 0;
            this.NumDocumentoResponsable = String.Empty;
            this.NomResponsable = String.Empty;
            this.FechaEmision = DateTime.Now;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.NomEstadoProceso = String.Empty;
        }


        public OrdenPedidoSaveModel(OrdenPedidoEntity Item)
        {
            this.OrdenPedidoId = Item.OrdenPedidoId;
            this.ProcesoId = Item.ProcesoId;
            this.TipoProcesoId = Item.TipoProcesoId;
            this.EstadoProcesoId = Item.EstadoProcesoId;
            this.Codigo = Item.Codigo;
            this.EntidadId = Item.EntidadId;
            this.NumDocumentoResponsable = Item.NumDocumentoResponsable;
            this.NomResponsable = Item.NomResponsable;
            this.FechaEmision = Item.FechaEmision;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.NomEstadoProceso = Item.NomEstadoProceso;
        }
        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }

        [JsonPropertyName("ProcesoId")]
        public Int32 ProcesoId { get; set; }

        [JsonPropertyName("TipoProcesoId")]
        public Int32 TipoProcesoId { get; set; }

        [JsonPropertyName("EstadoProcesoId")]
        public Int32 EstadoProcesoId { get; set; }

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

        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }

        [JsonPropertyName("NomEstadoProceso")]
        public String NomEstadoProceso { get; set; }

        [JsonPropertyName("DetalleItems")]
        public List<OrdenPedidoDetalleSaveModel> DetalleItems { get; set; }
    }
}

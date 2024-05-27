using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class OrdenCompraSaveModel
    {
        public OrdenCompraSaveModel()
        {
            this.OrdenCompraId = 0;
            this.ProcesoId = 0;
            this.EstadoProcesoId = 0;
            this.TipoProcesoId = 0;
            this.Codigo = String.Empty;
            this.EntidadId = 0;
            this.NumDocumentoProveedor = String.Empty;
            this.NomProveedor = String.Empty;
            this.FechaEmision = DateTime.MinValue;
            this.FechaRegistro = DateTime.MinValue;
            this.CodUsuario = String.Empty;
            this.DetalleItems = new List<OrdenCompraDetalleSaveModel>();
            this.Action = 0;
            this.NomEstadoProceso = String.Empty;
        }

        public OrdenCompraSaveModel( OrdenCompraEntity Item)
        {
            this.OrdenCompraId = Item.OrdenCompraId;
            this.ProcesoId = Item.ProcesoId;
            this.EstadoProcesoId = Item.EstadoProcesoId;
            this.TipoProcesoId = Item.TipoProcesoId;
            this.Codigo = Item.Codigo;
            this.EntidadId = Item.EntidadId;
            this.NumDocumentoProveedor = Item.NumDocumentoProveedor;
            this.NomProveedor = Item.NomProveedor;
            this.FechaEmision = Item.FechaEmision;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.DetalleItems = new List<OrdenCompraDetalleSaveModel>();
            this.Action = 0;
            this.NomEstadoProceso = Item.NomEstadoProceso;
        }


        [JsonPropertyName("OrdenCompraId")] public Int32 OrdenCompraId { get; set; }
        [JsonPropertyName("ProcesoId")] public Int32 ProcesoId { get; set; }
        [JsonPropertyName("EstadoProcesoId")] public Int32 EstadoProcesoId { get; set; }
        [JsonPropertyName("TipoProcesoId")] public Int32 TipoProcesoId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("EntidadId")] public Int32 EntidadId { get; set; }
        [JsonPropertyName("NumDocumentoProveedor")] public String NumDocumentoProveedor { get; set; }
        [JsonPropertyName("NomProveedor")] public String NomProveedor { get; set; }
        [JsonPropertyName("FechaEmision")] public DateTime FechaEmision { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("CodUsuario")] public String CodUsuario { get; set; }
        [JsonPropertyName("DetalleItems")] public List<OrdenCompraDetalleSaveModel> DetalleItems { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }
        [JsonPropertyName("NomEstadoProceso")] public String NomEstadoProceso { get; set; }

    }
}

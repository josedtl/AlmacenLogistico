using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class OrdenCompraMainModel
    {
        public OrdenCompraMainModel()
        {
            this.OrdenCompraId = 0;
            this.Codigo = String.Empty;
            this.NumDocumentoProveedor = String.Empty;
            this.NomProveedor = String.Empty;
            this.FechaEmision = DateTime.MinValue;
            this.FechaRegistro = DateTime.MinValue;
            this.CodUsuario = String.Empty;
            this.NomEstadoProceso = String.Empty;
            this.ValorEstadoProceso = 0;

        }

        public OrdenCompraMainModel(OrdenCompraEntity Item)
        {
            this.OrdenCompraId = Item.OrdenCompraId;
            this.Codigo = Item.Codigo;
            this.NumDocumentoProveedor = Item.NumDocumentoProveedor;
            this.NomProveedor = Item.NomProveedor;
            this.FechaEmision = Item.FechaEmision;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.NomEstadoProceso = Item.NomEstadoProceso;
            this.ValorEstadoProceso = Item.ValorEstadoProceso;

        }
        [JsonPropertyName("OrdenCompraId")] public Int32 OrdenCompraId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("NumDocumentoProveedor")] public String NumDocumentoProveedor { get; set; }
        [JsonPropertyName("NomProveedor")] public String NomProveedor { get; set; }
        [JsonPropertyName("FechaEmision")] public DateTime FechaEmision { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("CodUsuario")] public String CodUsuario { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }
        [JsonPropertyName("NomEstadoProceso")] public String NomEstadoProceso { get; set; }
        [JsonPropertyName("ValorEstadoProceso")] public Int16 ValorEstadoProceso { get; set; }

    }
}

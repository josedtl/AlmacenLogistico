using FactCore.EntityLayer;
using System.Text.Json.Serialization;

namespace FactCoreApi
{
    public class EmpresaEnlaceModel
    {
        public EmpresaEnlaceModel()
        {
            this.EmpresaId = 0;
            this.TipoDocumentoIdentidadId = 0;
            this.NumDocumento = String.Empty;
            this.NombreComercial = String.Empty;
            this.FechaRegistro = DateTime.MinValue;
            this.CodUsuario = String.Empty;
        }
        public EmpresaEnlaceModel(EntidadEntity Item)
        {
            this.EmpresaId = Item.EntidadId;
            this.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
            this.NumDocumento = Item.NumDocumento;
            this.NombreComercial = Item.NombreComercial;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
        }

        [JsonPropertyName("EmpresaId")]
        public Int32 EmpresaId { get; set; }

        [JsonPropertyName("TipoDocumentoIdentidadId")]
        public Int32 TipoDocumentoIdentidadId { get; set; }

        [JsonPropertyName("NumDocumento")]
        public String NumDocumento { get; set; }

        [JsonPropertyName("NombreComercial")]
        public String NombreComercial { get; set; }
 
        [JsonPropertyName("FechaRegistro")]
        public DateTime FechaRegistro { get; set; }

        [JsonPropertyName("CodUsuario")]
        public String CodUsuario { get; set; }
 
        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }

    }
}

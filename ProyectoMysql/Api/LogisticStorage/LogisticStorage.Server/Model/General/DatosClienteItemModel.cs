using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class DatosClienteItemModel
    {
        public DatosClienteItemModel() {

            this.TipoEntidadId = 0;
            this.EntidadId = 0;
            this.NumDocumento = String.Empty;
            this.Nombres = String.Empty;
            this.NombreComercial = String.Empty;
            this.ApellidoPaterno = String.Empty;
            this.ApellidoMaterno = String.Empty;
            this.TipoDocumentoIdentidadId = 0;
            this.CodUsuario = String.Empty;

        }


        [JsonPropertyName("TipoEntidadId")]
        public Int32 TipoEntidadId { get; set; }
        [JsonPropertyName("EntidadId")]
        public Int32 EntidadId { get; set; }

        [JsonPropertyName("TipoDocumentoIdentidadId")]
        public Int32 TipoDocumentoIdentidadId { get; set; }

        [JsonPropertyName("NumDocumento")]
        public String NumDocumento { get; set; }


        [JsonPropertyName("CodUsuario")]
        public String CodUsuario { get; set; }

        [JsonPropertyName("Nombres")]
        public String Nombres { get; set; }

        [JsonPropertyName("ApellidoPaterno")]
        public String ApellidoPaterno { get; set; }
        [JsonPropertyName("ApellidoMaterno")]
        public String ApellidoMaterno { get; set; }

    

        [JsonPropertyName("NombreComercial")]
        public String NombreComercial { get; set; }
    }
}

using FactCore.EntityLayer;
using System.Text.Json.Serialization;

namespace FactCoreApi
{
    public class EmpresaSaveModel
    {
        public EmpresaSaveModel()
        {
            this.EmpresaId = 0;
            this.TipoDocumentoIdentidadId = 0;
            this.NumDocumento = String.Empty;
            this.Nombres = String.Empty;
            this.NombreComercial = String.Empty;
            this.UbigeoId = 0;
            this.Direccion = String.Empty;
            this.Telefono = String.Empty;
            this.Correo = String.Empty;
            this.FechaRegistro = DateTime.MinValue;
            this.CodUsuario = String.Empty;
            this.EstadoRegistro = false;
        }


        public EmpresaSaveModel(EntidadEntity Item)
        {
            this.EmpresaId = Item.EntidadId;
            this.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
            this.NumDocumento = Item.NumDocumento;
            this.Nombres = Item.Nombres;
            this.NombreComercial = Item.NombreComercial;
            this.UbigeoId = Item.UbigeoId;
            this.Direccion = Item.Direccion;
            this.Telefono = Item.Telefono;
            this.Correo = Item.Correo;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.EstadoRegistro = Item.EstadoRegistro;
        }

        [JsonPropertyName("EmpresaId")]
        public Int32 EmpresaId { get; set; }

        [JsonPropertyName("TipoDocumentoIdentidadId")]
        public Int32 TipoDocumentoIdentidadId { get; set; }

        [JsonPropertyName("NumDocumento")]
        public String NumDocumento { get; set; }

        [JsonPropertyName("Nombres")]
        public String Nombres { get; set; }

        [JsonPropertyName("NombreComercial")]
        public String NombreComercial { get; set; }

        [JsonPropertyName("UbigeoId")]
        public Int32 UbigeoId { get; set; }

        [JsonPropertyName("Direccion")]
        public String Direccion { get; set; }

        [JsonPropertyName("Telefono")]
        public String Telefono { get; set; }

        [JsonPropertyName("Correo")]
        public String Correo { get; set; }

        [JsonPropertyName("FechaRegistro")]
        public DateTime FechaRegistro { get; set; }

        [JsonPropertyName("CodUsuario")]
        public String CodUsuario { get; set; }

        [JsonPropertyName("EstadoRegistro")]
        public Boolean EstadoRegistro { get; set; }

        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }

    }
}

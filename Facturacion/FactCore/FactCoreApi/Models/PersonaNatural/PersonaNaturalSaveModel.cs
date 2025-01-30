using FactCore.EntityLayer;
using System.Text.Json.Serialization;

namespace FactCoreApi
{
    public class PersonaNaturalSaveModel
    {
        public PersonaNaturalSaveModel(EntidadEntity Item)
        {
            this.PersonaNaturalId = Item.EntidadId;
            this.NumDocumento = Item.NumDocumento;
            this.Nombres = Item.Nombres;
            this.ApellidoPaterno = Item.ApellidoPaterno;
            this.ApellidoMaterno = Item.ApellidoMaterno;
            this.FechaNacimiento = Item.FechaNacimiento;
            this.Direccion = Item.Direccion;
            this.Telefono = Item.Telefono;
            this.Correo = Item.Correo;
            this.SexoId = Item.SexoId;
            this.EstadoCivilId = Item.EstadoCivilId;
            this.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
            this.UbigeoId = Item.UbigeoId;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
			this.EstadoRegistro =  Item.EstadoRegistro; 
		}
        public PersonaNaturalSaveModel()
        {
            this.PersonaNaturalId = 0;
            this.NumDocumento = String.Empty;
            this.Nombres = String.Empty;
            this.ApellidoPaterno = String.Empty;
            this.ApellidoMaterno = String.Empty;
            this.FechaNacimiento = DateTime.Now;
            this.Direccion = String.Empty;
            this.Telefono = String.Empty;
            this.Correo = String.Empty;
            this.SexoId = 0;
            this.EstadoCivilId = 0;
            this.TipoDocumentoIdentidadId = 0;
            this.UbigeoId = 0;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
			this.EstadoRegistro = false;
		}


        [JsonPropertyName("PersonaNaturalId")]
        public Int32 PersonaNaturalId { get; set; }

        [JsonPropertyName("TipoDocumentoIdentidadId")]
        public Int32 TipoDocumentoIdentidadId { get; set; }

        [JsonPropertyName("NumDocumento")]
        public String NumDocumento { get; set; }

        [JsonPropertyName("FechaRegistro")]
        public DateTime FechaRegistro { get; set; }

        [JsonPropertyName("CodUsuario")]
        public String CodUsuario { get; set; }

        [JsonPropertyName("UbigeoId")]
        public Int32 UbigeoId { get; set; }

        [JsonPropertyName("Nombres")]
        public String Nombres { get; set; }

        [JsonPropertyName("ApellidoPaterno")]
        public String ApellidoPaterno { get; set; }
        [JsonPropertyName("ApellidoMaterno")]
        public String ApellidoMaterno { get; set; }

        [JsonPropertyName("FechaNacimiento")]
        public DateTime FechaNacimiento { get; set; }

        [JsonPropertyName("Direccion")]
        public String Direccion { get; set; }

        [JsonPropertyName("Telefono")]
        public String Telefono { get; set; }

        [JsonPropertyName("Correo")]
        public String Correo { get; set; }

        [JsonPropertyName("SexoId")]
        public Int32 SexoId { get; set; }

        [JsonPropertyName("EstadoCivilId")]
        public Int32 EstadoCivilId { get; set; }

        [JsonPropertyName("Action")]
        public Int16 Action { get; set; }
		[JsonPropertyName("EstadoRegistro")]
		public Boolean EstadoRegistro { get; set; }

	}
}

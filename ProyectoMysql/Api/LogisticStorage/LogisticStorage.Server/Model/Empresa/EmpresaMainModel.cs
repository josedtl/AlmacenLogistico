using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class EmpresaMainModel
    {


        public EmpresaMainModel()
        {
            this.EmpresaId= 0;
            this.NomDocumento = String.Empty;
            this.NumDocumento = String.Empty;
            this.Nombres = String.Empty;
            this.NombreComercial = String.Empty;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
        }

        public EmpresaMainModel(EntidadEntity Item)
        {
            this.EmpresaId = Item.EntidadId;
            this.NomDocumento = Item.NomDocumento;
            this.NumDocumento = Item.NumDocumento;
            this.Nombres = Item.Nombres;
            this.NombreComercial = Item.NombreComercial;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
        }


        [JsonPropertyName("EmpresaId")]
        public Int32 EmpresaId { get; set; }

        [JsonPropertyName("NomDocumento")]
        public String NomDocumento { get; set; }

        [JsonPropertyName("NumDocumento")]
        public String NumDocumento { get; set; }

        [JsonPropertyName("Nombres")]
        public String Nombres { get; set; }

        [JsonPropertyName("NombreComercial")]
        public String NombreComercial { get; set; }

        [JsonPropertyName("FechaRegistro")]
        public DateTime FechaRegistro { get; set; }

        [JsonPropertyName("CodUsuario")]
        public String CodUsuario { get; set; }

     
    }
}

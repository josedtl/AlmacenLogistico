using FactCore.EntityLayer;
using System.Text.Json.Serialization;

namespace FactCoreApi
{
    public class PersonaNaturalMainModel
    {
        public PersonaNaturalMainModel()
        {
            this.PersonaNaturalId = 0;
            this.NomDocumento = String.Empty;
            this.NumDocumento = String.Empty;
            this.Nombres = String.Empty;
            this.ApellidoPaterno = String.Empty;
            this.ApellidoMaterno = String.Empty;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
        }

        public PersonaNaturalMainModel(EntidadEntity Item)
        {
            this.PersonaNaturalId = Item.EntidadId;
            this.NomDocumento = Item.NomDocumento;
            this.NumDocumento = Item.NumDocumento;
            this.Nombres = Item.Nombres;
            this.ApellidoPaterno = Item.ApellidoPaterno;
            this.ApellidoMaterno = Item.ApellidoMaterno;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
        }

        [JsonPropertyName("PersonaNaturalId")] public int PersonaNaturalId { get; set; }
        [JsonPropertyName("NomDocumento")] public String NomDocumento { get; set; }
        [JsonPropertyName("NumDocumento")] public String NumDocumento { get; set; }
        [JsonPropertyName("Nombres")] public String Nombres { get; set; }
        [JsonPropertyName("ApellidoPaterno")] public String ApellidoPaterno { get; set; }
        [JsonPropertyName("ApellidoMaterno")] public String ApellidoMaterno { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("CodUsuario")] public String CodUsuario { get; set; }
    }
}

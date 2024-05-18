using LogisticStorage.EntityLayer;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class MerListaSaveModel
    {
        public MerListaSaveModel()
        {
            this.ListaId = 0;
            this.CampoId = 0;
            this.Nombre = String.Empty;
            this.Codigo = String.Empty;
            this.Descripcion = String.Empty;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.EstadoRegistro = false;
            this.Action = 0; 
            this.CodigoTabla = String.Empty;
        }

        public MerListaSaveModel(MerListaEntity item)
        {
            this.ListaId = item.ListaId;
            this.CampoId = item.CampoId;
            this.Nombre = item.Nombre;
            this.Codigo = item.Codigo;
            this.Descripcion = item.Descripcion;
            this.FechaRegistro = item.FechaRegistro;
            this.CodUsuario = item.CodUsuario;
            this.EstadoRegistro = item.EstadoRegistro;
            this.CodigoTabla = item.CodigoTabla;
        }

        [JsonPropertyName("ListaId")] public Int32 ListaId { get; set; }
        [JsonPropertyName("CampoId")] public Int32 CampoId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("Descripcion")] public String Descripcion { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("CodUsuario")] public String CodUsuario { get; set; }
        [JsonPropertyName("EstadoRegistro")] public Boolean EstadoRegistro { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }
        [JsonPropertyName("CodigoTabla")] public String CodigoTabla { get; set; }
    }
}

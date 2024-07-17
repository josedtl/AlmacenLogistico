using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoMainModel
    {
        public DespachoMainModel(DespachoEntity ent)
        {
            OrdenPedidoId = ent.OrdenPedidoId;
            Codigo = ent.Codigo;
            Nombre = ent.Nombre;
            NombreCompleto = ent.NombreCompleto;
            Documento = ent.Documento;
            FechaRegistro = DateTime.Now;
        }

        public DespachoMainModel()
        {
            OrdenPedidoId = 0;
            Codigo = "";
            Nombre = "";
            NombreCompleto = "";
            Documento = "";
            FechaRegistro = DateTime.Now;
        }
        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }

        [JsonPropertyName("Codigo")]
        public string Codigo { get; set; }

        [JsonPropertyName("Nombre")]
        public string Nombre { get; set; }

        [JsonPropertyName("NombreCompleto")]
        public string NombreCompleto { get; set; }

        [JsonPropertyName("Documento")]
        public string Documento { get; set; }

        [JsonPropertyName("FechaRegistro")]
        public DateTime FechaRegistro { get; set; }
    }
}

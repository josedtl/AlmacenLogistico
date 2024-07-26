using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoCabeceraModel
    {
        public DespachoCabeceraModel() { 
            this.OrdenPedidoId = 0;
            this.ProcesoId = 0;
            this.NomProceso = "";
            this.EntidadId = 0;
            this.NomResponsable = "";
        }
        public DespachoCabeceraModel(DespachoEntity ent)
        {
            this.OrdenPedidoId = ent.OrdenPedidoId;
            this.ProcesoId = ent.ProcesoId;
            this.NomProceso = ent.NomProceso;
            this.EntidadId = ent.EntidadId;
            this.NomResponsable = ent.NomResponsable;
        }
        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }

        [JsonPropertyName("NomProceso")]
        public string NomProceso { get; set; }

        [JsonPropertyName("ProcesoId")]
        public Int32 ProcesoId { get; set; }

        [JsonPropertyName("EntidadId")]
        public Int32 EntidadId { get; set; }

        [JsonPropertyName("NomResponsable")]
        public String NomResponsable { get; set; }
    }
}

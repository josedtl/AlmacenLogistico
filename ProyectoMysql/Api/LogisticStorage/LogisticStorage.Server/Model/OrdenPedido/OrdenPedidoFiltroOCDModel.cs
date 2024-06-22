using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.OrdenPedido
{
    public class OrdenPedidoFiltroOCDModel
    {

        public OrdenPedidoFiltroOCDModel()
        {
            this.OrdenPedidoDetalleId = 0;
            this.OrdenPedidoId = 0;
            this.Codigo = "";
            this.ProcesoId = 0;
            this.NomProceso = "";
            this.MercaderiaId = 0;
            this.NomMercaderia = "";
            this.UnidadMedidaId = 0;
            this.NomUnidad = "";
            this.CantidadSolicitado = 0;

        }


        public OrdenPedidoFiltroOCDModel(OrdenPedidoDetalleEntity ent)
        {
            this.OrdenPedidoDetalleId = ent.OrdenPedidoDetalleId;
            this.OrdenPedidoId = ent.OrdenPedidoId;
            this.Codigo = ent.Codigo;
            this.ProcesoId = ent.ProcesoId;
            this.NomProceso = ent.NomProceso;
            this.MercaderiaId = ent.MercaderiaId;
            this.NomMercaderia = ent.NomMercaderia;
            this.UnidadMedidaId = ent.UnidadMedidaId;
            this.NomUnidad = ent.NomUnidad;
            this.CantidadSolicitado = ent.CantidadSolicitado;
        }

        [JsonPropertyName("OrdenPedidoDetalleId")]
        public Int32 OrdenPedidoDetalleId { get; set; }

        [JsonPropertyName("OrdenPedidoId")]
        public Int32 OrdenPedidoId { get; set; }

        [JsonPropertyName("Codigo")]
        public String Codigo { get; set; }
        
        [JsonPropertyName("ProcesoId")]
        public Int32 ProcesoId { get; set; }

        [JsonPropertyName("NomProceso")]
        public String NomProceso { get; set; }

        [JsonPropertyName("MercaderiaId")]
        public Int32 MercaderiaId { get; set; }

        [JsonPropertyName("NomMercaderia")]
        public String NomMercaderia { get; set; }

        [JsonPropertyName("UnidadMedidaId")]
        public Int32 UnidadMedidaId { get; set; }

        [JsonPropertyName("NomUnidad")]
        public String NomUnidad { get; set; }
        
        [JsonPropertyName("CantidadSolicitado")]
        public Decimal CantidadSolicitado { get; set; }

 
    }
}

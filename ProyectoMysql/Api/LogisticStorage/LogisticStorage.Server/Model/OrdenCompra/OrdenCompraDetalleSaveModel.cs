using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class OrdenCompraDetalleSaveModel
    {
        public OrdenCompraDetalleSaveModel()
        {
            this.OrdenCompraDetalleId = 0;
            this.OrdenCompraId = 0;
            this.MercaderiaId = 0;
            this.UnidadMedidaId = 0;
            this.CantidadSolicitado = 0;
            this.CantidadComprado = 0;
            this.CantidadFaltante = 0;
            this.PrecioUnitario = 0;
            this.NomProducto =String.Empty;
            this.CategoriaId = 0;
            this.CodigoUM = String.Empty;
            this.Stock = 0;
        }

        public OrdenCompraDetalleSaveModel(OrdenCompraDetalleEntity Item)
        {
            this.OrdenCompraDetalleId = Item.OrdenCompraDetalleId;
            this.OrdenCompraId = Item.OrdenCompraId;
            this.MercaderiaId = Item.MercaderiaId;
            this.UnidadMedidaId = Item.UnidadMedidaId;
            this.CantidadSolicitado = Item.CantidadSolicitado;
            this.CantidadComprado = Item.CantidadComprado;
            this.CantidadFaltante = Item.CantidadFaltante;
            this.PrecioUnitario = Item.PrecioUnitario;
            this.NomProducto = Item.NomProducto;
            this.CategoriaId = Item.CategoriaId;
            this.CodigoUM = Item.CodigoUM;
            this.Stock = Item.Stock;
        }


        [JsonPropertyName("OrdenCompraDetalleId")] public Int32 OrdenCompraDetalleId { get; set; }
        [JsonPropertyName("OrdenCompraId")] public Int32 OrdenCompraId { get; set; }
        [JsonPropertyName("MercaderiaId")] public Int32 MercaderiaId { get; set; }
        [JsonPropertyName("UnidadMedidaId")] public Int32 UnidadMedidaId { get; set; }
        [JsonPropertyName("CantidadSolicitado")] public Decimal CantidadSolicitado { get; set; }
        [JsonPropertyName("CantidadComprado")] public Decimal CantidadComprado { get; set; }
        [JsonPropertyName("CantidadFaltante")] public Decimal CantidadFaltante { get; set; }
        [JsonPropertyName("PrecioUnitario")] public Decimal PrecioUnitario { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }
        [JsonPropertyName("NomProducto")] public String NomProducto { get; set; }
        [JsonPropertyName("CategoriaId")] public Int32 CategoriaId { get; set; }
        [JsonPropertyName("CodigoUM")] public String CodigoUM { get; set; }
        [JsonPropertyName("Stock")] public Decimal Stock { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class OrdenCompraDetalleEntity : BaseEntityObject
    {
        public OrdenCompraDetalleEntity()
        {
            this.OrdenCompraDetalleId = 0;
            this.OrdenCompraId = 0;
            this.MercaderiaId = 0;
            this.UnidadMedidaId = 0;
            this.CantidadSolicitado = 0;
            this.CantidadComprado = 0;
            this.CantidadFaltante = 0;
            this.PrecioUnitario = 0;
            this.NomProducto = String.Empty;
            this.CategoriaId = 0;
            this.CodigoUM = String.Empty;
            this.Stock = 0;
        }
        public Int32 OrdenCompraDetalleId { get; set; }
        public Int32 OrdenCompraId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public Int32 UnidadMedidaId { get; set; }
        public Decimal CantidadSolicitado { get; set; }
        public Decimal CantidadComprado { get; set; }
        public Decimal CantidadFaltante { get; set; }
        public Decimal PrecioUnitario { get; set; }

    }
}

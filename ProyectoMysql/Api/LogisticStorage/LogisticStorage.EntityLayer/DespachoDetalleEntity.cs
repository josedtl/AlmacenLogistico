using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class DespachoDetalleEntity : BaseEntityObject
    {
        public DespachoDetalleEntity() { 
            this.OrdenPedidoId = 0; 
            this.OrdenPedidoDetalleId = 0;
            this.NomProducto = string.Empty;
            this.CodigoUM =String.Empty;
            this.CantidadSolicitado = 0;
            this.CantidadReservado = 0;
            this.CantidadAtendido = 0;
            this.DetalleReservaItem = new List<ReservaEntity>();


        }

        public Int32 DespachoDetalleId { get; set; }
        public Int32 DespachoId { get; set; }
        public Decimal Cantidad { get; set; }    
        public Int32 OrdenPedidoId { get; set; }
        public Int32 OrdenPedidoDetalleId { get; set; }
        public String NomProducto { get; set; }
        public String CodigoUM { get; set; }
        public double CantidadSolicitado { get; set; }
        public double CantidadReservado { get; set; }
        public double CantidadAtendido { get; set; }

        public List<ReservaEntity> DetalleReservaItem { get; set; }


    }
}

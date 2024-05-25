using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class OrdenPedidoDetalleEntity
    {
        public String NomProducto { get; set; }
        public Int32 CategoriaId { get; set; }
        public String CodigoUM { get; set; }
        public Decimal Stock { get; set; }
    }
}

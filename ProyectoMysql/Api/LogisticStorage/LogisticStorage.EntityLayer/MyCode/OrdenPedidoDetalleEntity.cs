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
        public String NomProceso { get; set; }
        public String NomUnidad { get; set; }
        public String Codigo { get; set; }
        public String NomMercaderia { get; set; }
        public Int32 ProcesoId { get; set; }

    }
}

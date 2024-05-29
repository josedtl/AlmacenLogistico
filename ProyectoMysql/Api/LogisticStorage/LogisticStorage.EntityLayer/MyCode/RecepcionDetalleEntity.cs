using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class RecepcionDetalleEntity
    {
        public String NomProducto { get; set; }
        public String CodigoUM { get; set; }

    }
}

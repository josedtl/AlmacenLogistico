using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class StockMercaderiaEntity
    {
        public String Codigo { get; set; }
        public String NomCategoria { get; set; }
        public String NomTipoProducto { get; set; }
        public String NomMarca { get; set; }
        public String NomModelo { get; set; }
        public String NomUnidadMedida { get; set; }
        public Decimal Stock { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class ReservaEntity
    {


        public String Codigo { get; set; }
        public String Nombre { get; set; }
        public String CodigoComercial { get; set; }

        public Decimal CantidaPedido { get; set; }
        public Decimal Stock { get; set; }
        public String CodigoPedido { get; set; }
        public String UnidadMedida { get; set; }
        public Decimal Reserva { get; set; }


    }
}

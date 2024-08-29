using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class TarifaEntity
    {
        public string NomProducto { get; set; }
        public string NomUnidad { get; set; }
        public string NomMoneda { get; set; }
        public string Valor { get; set; }

        public string NomImpuesto { get; set; }
        
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class RecepcionEntity
    {
        public Int16 ValorEstadoProceso { get; set; }
        public String NomEstadoProceso { get; set; }
        public String TipoRecepcion { get; set; }
        public String TipoComprobante { get; set; }
    }
}

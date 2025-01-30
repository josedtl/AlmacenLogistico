using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactCore.EntityLayer
{
    public partial class ComprobantePagoEntity
    {
        public string TipoOperacion { get; set; }
        public string TipoDocumento { get; set; }
        public string Prefijo { get; set; }
        public string TipoDocumentoIdentidad { get; set; }
        public string FormaPago { get; set; }
        public string TipoTributo { get; set; }
        public string Moneda { get; set; }
        public string TipoPrecioVentaUnitario { get; set; }

        //18012025 AAAV
         public string Serie { get; set; }
        public string CodigoTipoDocumento { get; set; }
        public string CodigoTipoOperacion { get; set; }
        public string CodigoLeyenda { get; set; }
        public string NumDodcumentoEmisor { get; set; }
        public string NombreEmisor { get; set; }
        public string CodTipoDocIdentidad { get; set; }

        public string CodigoTributo { get; set; }
        public string CodigoInternacionalTributo { get; set; }
        public string NombreTributo { get; set; }
        public string CodigoMoneda { get; set; }
        public string CodTipoPrecioVentaUnitario { get; set; }
        
    }
}

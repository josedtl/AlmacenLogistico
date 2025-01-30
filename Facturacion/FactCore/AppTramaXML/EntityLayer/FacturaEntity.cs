using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppTramaXML
{
    public class FacturaEntity
    {
        public String m_Serie { get; set; } = "FFF1";
        public String m_Correlativo { get; set; } = "1";
        public String m_CodigoFactura { get; set; } = "FFF1" + "-" + "1";

        //Datos de Emisor
        public String m_NumDocumentoEmpresaEmite { get; set; } = "10728110771";
        public String m_NomEmpresaEmite { get; set; } = "TIMO LUGO DAVID JOSE";

        //catalogo01 TipoDocumento
        public String m_CodigoTipoDocumento { get; set; } = "01";

        //catalogo01 TipoOperacion
        public String m_CodigoTipoOperacion { get; set; } = "0101";


        //No. 52 Catálogo    Códigos de leyendas
        public String m_CodigoLeyenda { get; set; } = "1000";
        public String m_LetraImporte { get; set; } = "SETECIENTOS OCHO CON 00/100 SOLES";


        //CLiente
        public String m_NumCliente { get; set; } = "20600695771";
        //catalogo06
        public String m_CodigoTipoDocumentoCliente { get; set; } = "6";
        public String m_NomCliente { get; set; } = "NUBEFACT SA";
        public String m_Direccion { get; set; } = "CALLE LIBERTAD 116 MIRAFLORES - LIMA - PERU";

        //Forma de Pago
        public String m_FormaPago { get; set; } = "Contado";


        //Codigo de Tributo catalogo05

        public String m_CodTributo { get; set; } = "1000";
        public String m_CodInternacionalTributo { get; set; } = "VAT";
        public String m_NomTributo { get; set; } = "IGV";


        //Codigo de Moneda 
        public String m_CodigoMoneda { get; set; } = "PEN";


        //Tipo de Precio catalogo16
        public String m_CodigoTipoPrecio { get; set; } = "01";
    }
}

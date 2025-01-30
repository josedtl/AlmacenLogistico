using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FactCore.EntityLayer;
using FactCore.Common;

namespace TramaXML
{
    public class FacturaXML
    {
        public string GenerarFacturaXML(ComprobantePagoEntity objComprobantePago)
        {
            String strRespuesta="";

            FacturaEntity Item_CP_Cabecera = new FacturaEntity();

            Item_CP_Cabecera.m_Serie = objComprobantePago.Serie;
            Item_CP_Cabecera.m_Correlativo = objComprobantePago.Correlativo;
            Item_CP_Cabecera.m_CodigoFactura = objComprobantePago.Serie + "-" + objComprobantePago.Correlativo;

            //Datos de Emisor
            Item_CP_Cabecera.m_NumDocumentoEmpresaEmite = objComprobantePago.NumDodcumentoEmisor;
            Item_CP_Cabecera.m_NomEmpresaEmite = objComprobantePago.NombreEmisor;

            //catalogo01 TipoDocumento
            Item_CP_Cabecera.m_CodigoTipoDocumento = objComprobantePago.CodigoTipoDocumento;

            //catalogo01 TipoOperacion 51
            Item_CP_Cabecera.m_CodigoTipoOperacion = objComprobantePago.CodigoTipoOperacion;

            //No. 52 Catálogo    Códigos de leyendas
            Item_CP_Cabecera.m_CodigoLeyenda = objComprobantePago.CodigoLeyenda;
            Item_CP_Cabecera.m_LetraImporte = ConvertirNumeroLetra.ConvertirALetras(Convert.ToString(objComprobantePago.ImporteNetoTotal), objComprobantePago.Moneda);

            //CLiente
            Item_CP_Cabecera.m_NumCliente = objComprobantePago.NumDocumento;
            //catalogo06
            Item_CP_Cabecera.m_CodigoTipoDocumentoCliente = objComprobantePago.CodTipoDocIdentidad;
            Item_CP_Cabecera.m_NomCliente = objComprobantePago.NombreCliente;
            Item_CP_Cabecera.m_Direccion = objComprobantePago.Direccion;

            //Forma de Pago
            Item_CP_Cabecera.m_FormaPago = objComprobantePago.FormaPago;

            //Codigo de Tributo catalogo05
            Item_CP_Cabecera.m_CodTributo = objComprobantePago.CodigoTributo;
            Item_CP_Cabecera.m_CodInternacionalTributo = objComprobantePago.CodigoLeyenda;
            Item_CP_Cabecera.m_NomTributo = objComprobantePago.NombreTributo;

            //Codigo de Moneda 
            Item_CP_Cabecera.m_CodigoMoneda = objComprobantePago.CodigoMoneda;

            //Tipo de Precio catalogo16
            Item_CP_Cabecera.m_CodigoTipoPrecio = objComprobantePago.CodTipoPrecioVentaUnitario;



            return strRespuesta;
        }
          

    }
}

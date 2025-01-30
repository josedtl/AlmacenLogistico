using FactCore.DataLayer;
using FactCore.EntityLayer;
using TramaXML;

namespace FactCore.BusinessLayer
{
    public class ComprobantePago
    {
        public static List<ComprobantePagoEntity> ObtenerItem(Int32 EmpresaId)
        {
            ComprobantePagoDB DB = new ComprobantePagoDB();
            return DB.ObtenerItem(EmpresaId);
        }

        public static string GuardarComprobante(ComprobantePagoEntity objComprobantePago)
        {
            List<ComprobantePagoEntity> lstComprobantePago = new List<ComprobantePagoEntity>();

            /*Prueba de datos*/
            objComprobantePago.TipoOperacionId = 1;
            objComprobantePago.TipoDocumentoId = 1;
            objComprobantePago.SecuenciaCorrelativo = 1;
            objComprobantePago.Correlativo = "FF001";
            objComprobantePago.CorrelativoId = 1;
            objComprobantePago.TipoDocumentoIdentidadId = 1;
            objComprobantePago.ClienteId = 1;
            objComprobantePago.NumDocumento = "20600695771";
            objComprobantePago.NombreCliente = "NUBEFACT SA";
            objComprobantePago.Direccion = "CALLE LIBERTAD 116 MIRAFLORES - LIMA - PERU";
            objComprobantePago.FormaPagoId = 1;
            objComprobantePago.TipoTributoId = 1;
            objComprobantePago.MonedaId = 1;
            objComprobantePago.TipoPrecioVentaUnitarioId = 1;
            objComprobantePago.ImpuestoTotal = 108;
            objComprobantePago.ImporteBrutoTotal = 600;
            objComprobantePago.ImporteNetoTotal = 708;

            ComprobantePagoDB DB = new ComprobantePagoDB();
            /*Aqui aplicar logica de guardado de datos*/


            /*Aqui aplicar logica de obtencion de datos de comprobante de pago guardado*/
            objComprobantePago.ComprobantePagoId = 1;
            DB.ObtenerComprobantePagoDatosXML(objComprobantePago.ComprobantePagoId);

            objComprobantePago.TipoDocumentoId = 6;
            /*Case Tipo Comprobante Factura. Validar otros casos*/

            if (objComprobantePago.TipoDocumentoId == 6)
            {
                //ENVIAR DATOS OBTENIDOS AL GENERADOR DE FACTURA
                TramaXML.FacturaXML objFacturaXML = new TramaXML.FacturaXML();
                objFacturaXML.GenerarFacturaXML(objComprobantePago);

            }


            return "Guardado exitoso";
        }
    }
}

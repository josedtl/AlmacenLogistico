using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TramaXML
{
    public class FacturaDetalleEntity
    {
        public String mD1_Numeracion { get; set; } = "1";
        public String mD1_PrecioUnitario { get; set; } = 500.ToString("N2");
        public String mD1_Cantidad { get; set; } = 1.ToString("N1");
        public String mD1_SumaCantidadPrecio { get; set; } = (500 * 1).ToString("N2");
        public String mD1_PrecioConImpuesto { get; set; } = 590.ToString("N2");
        public String mD1_ImpuestoSolo { get; set; } = 90.ToString("N2");
        //Afectacion del IGV catalogo07
        public String mD1_CodigoTipoAfectacionIGV { get; set; } = "10";
        public String mD1_Porcentaje { get; set; } = "18.00";
        //Codigo de Tributo catalogo05
        public String mD1_CodTributo { get; set; } = "1000";
        public String mD1_CodInternacionalTributo { get; set; } = "VAT";
        public String mD1_NomTributo { get; set; } = "IGV";
        public String mD1_PrecioUnitarioUnDecimal { get; set; } = 500.ToString("N1");
        public String mD1_CodUnidadMedida { get; set; } = "NIU";
        public String mD1_DetalleConcepto { get; set; } = "DETALLE DEL PRODUCTO";
        public String mD1_CodigoDetalleConcepto { get; set; } = "001";
    }
}

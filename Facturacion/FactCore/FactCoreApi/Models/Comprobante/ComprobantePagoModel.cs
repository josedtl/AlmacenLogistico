using FactCore.EntityLayer;

namespace FactCoreApi.Models.Comprobante
{
    public class ComprobantePagoModel
    {

        public ComprobantePagoModel(ComprobantePagoEntity Item) {

            this.ComprobantePagoId = Item.ComprobantePagoId;
            this.TipoOperacionId = Item.TipoOperacionId;
            this.TipoDocumentoId = Item.TipoDocumentoId;
            this.SecuenciaCorrelativo = Item.SecuenciaCorrelativo;
            this.Correlativo = Item.Correlativo;
            this.CorrelativoId =Item.CorrelativoId;
            this.TipoDocumentoIdentidadId = Item.TipoDocumentoIdentidadId;
            this.ClienteId = Item.ClienteId;
            this.NumDocumento = Item.NumDocumento;
            this.NombreCliente = Item.NombreCliente;
            this.Direccion = Item.Direccion;
            this.FormaPagoId = Item.FormaPagoId;
            this.TipoTributoId = Item.TipoTributoId;
            this.MonedaId = Item.MonedaId;
            this.TipoPrecioVentaUnitarioId = Item.TipoDocumentoIdentidadId;
            this.ImpuestoTotal = Item.ImpuestoTotal;
            this.ImporteBrutoTotal = Item.ImporteBrutoTotal;
            this.ImporteNetoTotal = Item.ImporteNetoTotal;

        }
        public ComprobantePagoModel()
        {

            this.ComprobantePagoId = 0;
            this.TipoOperacionId = 0;
            this.TipoDocumentoId = 0;
            this.SecuenciaCorrelativo = 0;
            this.Correlativo = String.Empty;
            this.CorrelativoId = 0;
            this.TipoDocumentoIdentidadId = 0;
            this.ClienteId = 0;
            this.NumDocumento = String.Empty;
            this.NombreCliente = String.Empty;
            this.Direccion = String.Empty;
            this.FormaPagoId = 0;
            this.TipoTributoId = 0;
            this.MonedaId = 0;
            this.TipoPrecioVentaUnitarioId = 0;
            this.ImpuestoTotal = 0;
            this.ImporteBrutoTotal = 0;
            this.ImporteNetoTotal = 0;

        }

        public int ComprobantePagoId { get; set; }
        public int TipoOperacionId { get; set; }
        public int TipoDocumentoId { get; set; }
        public int SecuenciaCorrelativo { get; set; }
        public string Correlativo { get; set; }
        public int CorrelativoId { get; set; }
        public int TipoDocumentoIdentidadId { get; set; }
        public int ClienteId { get; set; }
        public string NumDocumento { get; set; }
        public string NombreCliente { get; set; }
        public string Direccion { get; set; }
        public int FormaPagoId { get; set; }
        public int TipoTributoId { get; set; }
        public int MonedaId { get; set; }
        public int TipoPrecioVentaUnitarioId { get; set; }
        public decimal ImpuestoTotal { get; set; }
        public decimal ImporteBrutoTotal { get; set; }
        public decimal ImporteNetoTotal { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class OrdenCompraEntity : BaseEntityObject
    {
        public OrdenCompraEntity()
        {
            this.OrdenCompraId = 0;
            this.ProcesoId = 0;
            this.EstadoProcesoId = 0;
            this.TipoProcesoId = 0;
            this.Codigo = String.Empty;
            this.EntidadId = 0;
            this.NumDocumentoProveedor = String.Empty;
            this.NomProveedor = String.Empty;
            this.FechaEmision = DateTime.MinValue;
            this.FechaRegistro = DateTime.MinValue;
            this.CodUsuario = String.Empty;
            this.Detalles = new List<OrdenCompraDetalleEntity>();
            this.NomEstadoProceso = String.Empty;
            this.ValorEstadoProceso = 0;
        }
        public Int32 OrdenCompraId { get; set; }
        public Int32 ProcesoId { get; set; }
        public Int32 EstadoProcesoId { get; set; }
        public Int32 TipoProcesoId { get; set; }
        public String Codigo { get; set; }
        public Int32 EntidadId { get; set; }
        public String NumDocumentoProveedor { get; set; }
        public String NomProveedor { get; set; }
        public DateTime FechaEmision { get; set; }
        public DateTime FechaRegistro { get; set; }
        public String CodUsuario { get; set; }
        public List<OrdenCompraDetalleEntity> Detalles { get; set; }

    }
}

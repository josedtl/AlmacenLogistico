using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class OrdenPedidoEntity : BaseEntityObject
    {
        public OrdenPedidoEntity()
        {
            this.OrdenPedidoId = 0;
            this.ProcesoId = 0;
            this.TipoProcesoId = 0;
            this.EstadoProcesoId = 0;
            this.Codigo = String.Empty;
            this.EntidadId = 0;
            this.NumDocumentoResponsable = String.Empty;
            this.NomResponsable = String.Empty;
            this.FechaEmision = DateTime.Now;
            this.FechaRegistro = DateTime.Now;
            this.FechaModificacion = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.NomEstadoProceso = String.Empty;
            this.ValorEstadoProceso = 0;
            this.NomProceso = String.Empty;
            this.DetalleItem = new List<OrdenPedidoDetalleEntity>();
        }
        public Int32 OrdenPedidoId { get; set; }
        public Int32 ProcesoId { get; set; }
        public Int32 TipoProcesoId { get; set; }
        public Int32 EstadoProcesoId { get; set; }
        public String Codigo { get; set; }
        public Int32 EntidadId { get; set; }
        public String NumDocumentoResponsable { get; set; }
        public String NomResponsable { get; set; }
        public DateTime FechaEmision { get; set; }
        public DateTime FechaRegistro { get; set; }
        public DateTime FechaModificacion { get; set; }
        public String CodUsuario { get; set; }
        public List<OrdenPedidoDetalleEntity> DetalleItem { get; set; }
    }
}

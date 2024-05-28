using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class RecepcionEntity : BaseEntityObject
    {
        public RecepcionEntity()
        {
            this.RecepcionId = 0;
            this.ProcesoId = 0;
            this.EstadoProcesoId = 0;
            this.Codigo = String.Empty;
            this.EntidadId = 0;
            this.ObjetoId = 0;
            this.TipoComprobanteId = 0;
            this.SerieComprobante = String.Empty;
            this.CorrelativoComprobante = String.Empty;
            this.FechaRecepcion = DateTime.Now;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.Observacion = String.Empty;
            this.ValorEstadoProceso = 0;
            this.NomEstadoProceso = String.Empty;
            this.DetalleItem = new List<RecepcionDetalleEntity>();
        }

        public Int32 RecepcionId { get; set; }
        public Int32 ProcesoId { get; set; }
        public Int32 EstadoProcesoId { get; set; }
        public String Codigo { get; set; }
        public Int32 EntidadId { get; set; }
        public Int32 ObjetoId { get; set; }
        public Int32 TipoComprobanteId { get; set; }
        public String SerieComprobante { get; set; }
        public String CorrelativoComprobante { get; set; }
        public DateTime FechaRecepcion { get; set; }
        public DateTime FechaRegistro { get; set; }
        public String CodUsuario { get; set; }
        public String Observacion { get; set; }
        public List<RecepcionDetalleEntity> DetalleItem { get; set; }




    }
}

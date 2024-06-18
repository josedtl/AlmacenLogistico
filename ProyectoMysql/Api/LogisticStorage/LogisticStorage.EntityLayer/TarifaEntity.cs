using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class TarifaEntity
    {
        public TarifaEntity()
        {
            this.TarifaId = 0;
            this.UnidadMedidaId = 0;
            this.MonedaId = 0;
            this.PorcentajeImpuestoId = 0;
            this.PrecioSinInpuesto = 0;
            this.PrecioConInpuesto = 0;
            this.FechaCreacion = DateTime.Now;
            this.Vigente = false;
            this.ObjetoReferenciaId = 0;
        }

        public Int32 TarifaId { get; set; }
        public Int32 UnidadMedidaId { get; set; }
        public Int32 MonedaId { get; set; }
        public Int32 PorcentajeImpuestoId { get; set; }
        public Decimal PrecioSinInpuesto { get; set; }
        public Decimal PrecioConInpuesto { get; set; }
        public DateTime FechaCreacion { get; set; }
        public Boolean Vigente { get; set; }

        public Int32 ObjetoReferenciaId { get; }

    }
}

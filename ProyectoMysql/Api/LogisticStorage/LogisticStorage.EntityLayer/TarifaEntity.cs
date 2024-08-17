using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class TarifaEntity : BaseEntityObject
    {
        public TarifaEntity()
        {
            this.TarifaId = GetInt32Default();
            this.UnidadMedidaId = GetInt32Default();
            this.MonedaId = GetInt32Default();
            this.PorcentajeImpuestoId = GetInt32Default();
            this.PrecioSinInpuesto = GetInt32Default();
            this.PrecioConInpuesto = GetInt32Default();
            this.FechaCreacion = DateTime.Now;
            this.Vigente = GetBooleanDefault();
            this.ObjetoReferenciaId = GetInt32Default();
            this.MercaderiaId = GetInt32Default();
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
        public Int32 MercaderiaId { get; set; }


    }
}

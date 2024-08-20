using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public  class PorcentajeImpuestoEntity : BaseEntityObject
    {
        public PorcentajeImpuestoEntity() { 
            this.PorcentajeImpuestoId = 0;
            this.Nombre=String.Empty;
            this.Descripcion=String.Empty;
            this.Valor = 0;
            this.ValorOperacion = 0;
            this.EstadoRegistro = true;
        }
        public Int32 PorcentajeImpuestoId { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public decimal Valor { get; set; }
        public decimal ValorOperacion { get; set; }
        public Boolean EstadoRegistro { get; set; }
    }
}

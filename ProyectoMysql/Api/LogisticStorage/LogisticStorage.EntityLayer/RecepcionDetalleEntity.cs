using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class RecepcionDetalleEntity :BaseEntityObject
    {
        public RecepcionDetalleEntity()
        {

            this.RecepcionDetalleId = 0;
            this.RecepcionId = 0;
            this.MercaderiaId = 0;
            this.Cantidad = 0;
            this.Lote = String.Empty;
            this.FechaIngreso = DateTime.Now;
            this.FechaRegistro = DateTime.Now;
            this.FechaVencimiento = DateTime.Now;
            this.Observacion = String.Empty;
        }
        public Int32 RecepcionDetalleId { get; set; }
        public Int32 RecepcionId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public Decimal Cantidad { get; set; }
        public String Lote { get; set; }
        public DateTime FechaIngreso { get; set; }
        public DateTime FechaRegistro { get; set; }
        public DateTime FechaVencimiento { get; set; }
        public String Observacion { get; set; }

    }
}

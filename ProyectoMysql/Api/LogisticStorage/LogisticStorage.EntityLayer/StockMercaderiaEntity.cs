using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class StockMercaderiaEntity : BaseEntityObject
    {


        public StockMercaderiaEntity() {

            this.StockMercaderiaId = 0;
            this.MercaderiaId = 0;
            this.Cantidad = 0;
            this.Reserva = 0;
            this.FechaIngreso = DateTime.Now;
            this.RecepcionDetalleId = 0;
            this.Lote = String.Empty;
            this.FechaVencimiento = DateTime.Now;
            this.Observacion = String.Empty;
        }


        public Int32 StockMercaderiaId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public Decimal Cantidad { get; set; }
        public Decimal Reserva { get; set; }
        public DateTime FechaIngreso { get; set; }
        public Int32 RecepcionDetalleId { get; set; }
        public String Lote { get; set; }
        public DateTime FechaVencimiento { get; set; }
        public String Observacion { get; set; }






    }
}

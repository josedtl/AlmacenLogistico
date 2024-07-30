using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class DespachoEntity : BaseEntityObject
    {

        public DespachoEntity(){
            DespachoId = 0;
            EntidadEntregadoId = 0;
            OrdenPedidoId = 0;
            Codigo = "";
            FechaRegistro=DateTime.Now;
            FechaHoraEntrega=DateTime.Now;
        }

        public Int32 DespachoId { get; set; }
        public string Codigo{  get; set; }
        public DateTime FechaHoraEntrega { get; set; }
        public Int32 EntidadEntregadoId { get; set; }
        public Int32 OrdenPedidoId {  get; set; }
        public DateTime FechaRegistro {  get; set; }

        public List<DespachoDetalleEntity> DetalleItem { get; set; }
    }
}

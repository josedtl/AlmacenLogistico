using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class DespachoEntity : BaseEntityObject
    {

        public DespachoEntity(){
            OrdenPedidoId = 0;
            Codigo = "";
            Nombre = "";
            NombreCompleto = "";
            Documento = "";
            FechaRegistro=DateTime.Now;
        }

        public Int32 OrdenPedidoId {  get; set; }
        public string Codigo{  get; set; }
        public string Nombre {  get; set; }
        public string NombreCompleto{  get; set; }
        public string Documento {  get; set; }
        public DateTime FechaRegistro {  get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class DespachoEntity
    {
      

        // cabecera
        public Int32 ProcesoId { get; set; }
        public Int32 EntidadId { get; set; }
        public String NomResponsable { get; set; }
        public String NomProceso { get; set; }
        public string Nombre { get; set; }
        public string NombreCompleto { get; set; }
        public string Documento { get; set; }

    }
}

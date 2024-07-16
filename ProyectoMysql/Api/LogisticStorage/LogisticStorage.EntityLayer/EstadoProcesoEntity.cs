using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class EstadoProcesoEntity : BaseEntityObject
    {

        public EstadoProcesoEntity()
        {
            this.EstadoProcesoId=0;
            this.Valor = 0;
            this.Nombre = String.Empty;
            this.Descripcion = String.Empty;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.EstadoRegistro = false;
        }

        public Int32 EstadoProcesoId { get; set; }
        public Int16 Valor { get; set; }
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaRegistro { get; set; }
        public String CodUsuario { get; set; }
        public Boolean EstadoRegistro { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactCore.EntityLayer
{
    public class UsuarioEntity: BaseEntityObject
    {

        public UsuarioEntity()
        {
            this.UsuarioId = 0;
            this.CodUsuario = String.Empty;
            this.Contrasena = String.Empty;
            this.FechaVigencia = DateTime.Now;
            this.Estado = false;
        }

        public Int32 UsuarioId { get; set; }
        public String CodUsuario { get; set; }
        public String Contrasena { get; set; }
        public DateTime FechaVigencia { get; set; }
        public Boolean Estado { get; set; }
    }
}

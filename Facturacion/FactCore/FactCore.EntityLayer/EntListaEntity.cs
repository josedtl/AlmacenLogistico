using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactCore.EntityLayer
{
    public partial class EntListaEntity : BaseEntityObject
    {

        public EntListaEntity()
        {
            ListaId = 0;
            CampoId = 0;
            Nombre = String.Empty;
            Codigo = String.Empty;
            Descripcion = String.Empty;
            FechaRegistro = DateTime.MinValue;
            CodUsuario = String.Empty;
            EstadoRegistro = false;
            CodigoTabla = String.Empty;
        }
        public Int32 ListaId { get; set; }
        public Int32 CampoId { get; set; }
        public String Nombre { get; set; }
        public String Codigo { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaRegistro { get; set; }
        public String CodUsuario { get; set; }
        public Boolean EstadoRegistro { get; set; }

        public String CodigoTabla { get; set; }
    }
}

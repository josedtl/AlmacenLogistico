using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class TipoEntidadEntity : BaseEntityObject
    {
        public TipoEntidadEntity() { 
        this.TipoEntidadId =0;
            this.Codigo = String.Empty;
            this.Nombre = String.Empty;
        }

        public Int32 TipoEntidadId { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
}
}

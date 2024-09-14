using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class UnidadMedidaEntity: BaseEntityObject
    {
        public UnidadMedidaEntity (){

            this.UnidadMedidaId = 0;
            this.Codigo = String.Empty;
            this.CodigoComercial = String.Empty;
            this.Nombre = String.Empty;
        }


        public Int32 UnidadMedidaId { get; set; }
        public String Codigo { get; set; }
        public String CodigoComercial { get; set; }
        public String Nombre { get; set; }

    }
}
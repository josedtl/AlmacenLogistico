using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class UbigeoEntity: BaseEntityObject
    {
        public UbigeoEntity()
        {

            this.UbigeoId = 0;
            this.CodUbigeo = String.Empty;
            this.DesUbigeo = String.Empty;
            this.DepartamentoId = 0;
            this.ProvinciaId = 0;
            this.DistritoId = 0;


        }
        public Int32 UbigeoId { get; set; }
        public String CodUbigeo { get; set; }
        public String DesUbigeo { get; set; }
        public Int32 DepartamentoId { get; set; }
        public Int32 ProvinciaId { get; set; }
        public Int32 DistritoId { get; set; }
    }
}

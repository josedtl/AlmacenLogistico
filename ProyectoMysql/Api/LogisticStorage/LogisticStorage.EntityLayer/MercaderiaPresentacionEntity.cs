using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class MercaderiaPresentacionEntity
    {

        public MercaderiaPresentacionEntity () { 
        this.MercaderiaPresentacionId = 0;
            this.MercaderiaId
        }
        public Int32 MercaderiaPresentacionId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public Int32 UnidadMedidaId { get; set; }
        public Decimal Cantidad { get; set; }

    }
}

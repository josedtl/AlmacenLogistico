using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class MercaderiaPresentacionEntity : BaseEntityObject
    {

        public MercaderiaPresentacionEntity()
        {
            this.MercaderiaPresentacionId = 0;
            this.MercaderiaId = 0;
            this.UnidadMedidaId = 0;
            this.Cantidad = 0;
        }
        public Int32 MercaderiaPresentacionId { get; set; }
        public Int32 MercaderiaId { get; set; }
        public Int32 UnidadMedidaId { get; set; }
        public Decimal Cantidad { get; set; }

    }
}

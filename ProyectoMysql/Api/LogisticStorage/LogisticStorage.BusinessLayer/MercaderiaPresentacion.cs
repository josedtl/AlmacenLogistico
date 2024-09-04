using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class MercaderiaPresentacion
    {
        public static List<MercaderiaPresentacionEntity> ObtenerDetalle(Int32 MercaderiaPresentacionId)
        {
            MercaderiaPresentacionDB DB = new MercaderiaPresentacionDB();
            return DB.ObtenerDetalle(MercaderiaPresentacionId);
        }
    }
}

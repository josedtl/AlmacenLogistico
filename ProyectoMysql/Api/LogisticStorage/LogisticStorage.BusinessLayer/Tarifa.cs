using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public  class Tarifa
    {

        public static List<TarifaEntity> ObtenerMain()
        {
            TarifaDB DB = new TarifaDB();
            return DB.ObtenerMain();
        }
        public static Int32 Registrar(TarifaEntity Ent)
        {
            TarifaDB DB = new TarifaDB();
            DB.Registrar(Ent);
            return Ent.TarifaId;
        }

    }
}

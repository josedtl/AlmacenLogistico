using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public  class PorcentajeImpuesto
    {
        public static List<PorcentajeImpuestoEntity> ObtenerItems()
        {
            PorcentajeImpuestoDB DB = new PorcentajeImpuestoDB();
            return DB.ObtenerItems();
        }

        public static List<PorcentajeImpuestoEntity> ObtenerItem(Int32 PorcentajeImpuestoId)
        {
            PorcentajeImpuestoDB DB = new PorcentajeImpuestoDB();
            return DB.ObtenerItem(PorcentajeImpuestoId);
        }
    }
}

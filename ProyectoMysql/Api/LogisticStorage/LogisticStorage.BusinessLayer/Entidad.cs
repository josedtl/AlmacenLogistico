using Framework;
using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class Entidad
    {

        public static List<EntidadEntity> ObtenerMain()
        {
            EntidadDB DB = new EntidadDB();
            return DB.ObtenerMain();
        }
        public static List<EntidadEntity> ObtenerItem(Int32 PersonaNaturalId)
        {
            EntidadDB DB = new EntidadDB();
            return DB.ObtenerItem(PersonaNaturalId);
        }
        public static Int32 Registrar(EntidadEntity Ent)
        {
            EntidadDB DB = new EntidadDB();
            DB.Registrar(Ent);

            return Ent.EntidadId;
        }

      
    }
}

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
    public class PersonaNatural
    {

        public static List<PersonaNaturalEntity> ObtenerMain()
        {
            PersonaNaturalDB DB = new PersonaNaturalDB();
            return DB.ObtenerMain();
        }
        public static List<PersonaNaturalEntity> ObtenerItem(Int32 PersonaNaturalId)
        {
            PersonaNaturalDB DB = new PersonaNaturalDB();
            return DB.ObtenerItem(PersonaNaturalId);
        }
        public static Int32 Registrar(PersonaNaturalEntity Ent)
        {
            PersonaNaturalDB DB = new PersonaNaturalDB();
            DB.Registrar(Ent);

            return Ent.PersonaNaturalId;
        }

      
    }
}

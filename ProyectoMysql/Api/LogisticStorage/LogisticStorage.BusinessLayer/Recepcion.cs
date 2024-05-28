using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class Recepcion
    {


        public static List<RecepcionEntity> ObtenerMain()
        {
            RecepcionDB DB = new RecepcionDB();
            return DB.ObtenerMain();
        }
        public static List<RecepcionEntity> ObtenerItem(Int32 EmpresaId)
        {
            RecepcionDB DB = new RecepcionDB();
            return DB.ObtenerItem(EmpresaId);
        }
        public static Int32 Registrar(RecepcionEntity Ent)
        {
            RecepcionDB DB = new RecepcionDB();
            DB.Registrar(Ent);

            return Ent.RecepcionId;
        }
    }
}

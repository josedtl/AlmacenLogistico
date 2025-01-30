using Framework;
using FactCore.DataLayer;
using FactCore.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactCore.BusinessLayer
{
    public class Entidad
    {

        public static List<EntidadEntity> PersonaNaturalObtenerMain()
        {
            EntidadDB DB = new EntidadDB();
            return DB.PersonaNaturalObtenerMain();
        }
        public static List<EntidadEntity> PersonaNaturalObtenerItem(Int32 PersonaNaturalId)
        {
            EntidadDB DB = new EntidadDB();
            return DB.PersonaNaturalObtenerItem(PersonaNaturalId);
        }
        public static Int32 PersonaNaturalRegistrar(EntidadEntity Ent)
        {
            EntidadDB DB = new EntidadDB();
            DB.PersonaNaturalRegistrar(Ent);

            return Ent.EntidadId;
        }

        public static Int32 PersonaNaturalRegistrarEnlace(EntidadEntity Ent)
        {
            EntidadDB DB = new EntidadDB();
            DB.PersonaNaturalRegistrarEnlace(Ent);

            return Ent.EntidadId;
        }

        public static List<EntidadEntity> EmpresaObtenerMain()
        {
            EntidadDB DB = new EntidadDB();
            return DB.EmpresaObtenerMain();
        }
        public static List<EntidadEntity> EmpresaObtenerItem(Int32 EmpresaId)
        {
            EntidadDB DB = new EntidadDB();
            return DB.EmpresaObtenerItem(EmpresaId);
        }
        public static Int32 EmpresaRegistrar(EntidadEntity Ent)
        {
            EntidadDB DB = new EntidadDB();
            DB.EmpresaRegistrar(Ent);

            return Ent.EntidadId;
        }


        public static List<EntidadEntity> EntidadBuscarNombreCompletoItem(String Nombre)
        {
            EntidadDB DB = new EntidadDB();
            return DB.EntidadBuscarNombreCompletoItem(Nombre);
        }
        public static List<EntidadEntity> EntidadObtenerNombreCompletoItem(Int32 EntidadId)
        {
            EntidadDB DB = new EntidadDB();
            return DB.EntidadObtenerNombreCompletoItem(EntidadId);
        }

        public static Int32 EmpresaRegistrarEnlace(EntidadEntity Ent)
        {
            EntidadDB DB = new EntidadDB();
            DB.EmpresaRegistrarEnlace(Ent);

            return Ent.EntidadId;
        }
    }
}

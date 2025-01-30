using FactCore.DataLayer;
using FactCore.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactCore.BusinessLayer
{
    public class Usuario
    {


        public static List<UsuarioEntity> OObtenerAcceso(String Usuario, String Contrasena)
        {
            UsuarioDB DB = new UsuarioDB();
            return DB.ObtenerAcceso(Usuario, Contrasena);
        }
    }
}

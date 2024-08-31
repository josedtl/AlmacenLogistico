using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
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

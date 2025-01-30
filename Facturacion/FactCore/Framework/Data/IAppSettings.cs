using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Framework.Data
{

    public interface IAppSettings
    {
        TypeConection Conecction { get; set; }
        String Server { get; set; }
        Int32 Port { get; set; }
        String DataBase { get; set; }
        String Scheme { get; set; }
        Boolean IntegratedSecurity { get; set; }
        String UserName { get; set; }
        String Password { get; set; }
        LanguageEnum Language { get; set; }
        String ConnectionString { get; }
        bool LoadConfig(String ruta);
        bool SaveConfig(String ruta);
    }
}

using LogisticStorage.Common;
using static System.Net.Mime.MediaTypeNames;
using System.Globalization;
using System.Text.Json;

namespace LogisticStorage.Server
{
    public class Base
    {
        public void Configurar()
        {




            if (MyUtils.AppSetting == null)
            {

                string rutaArchivo = "appsettings.json";
                string json = File.ReadAllText(rutaArchivo);
                ConexionModel ItemConexion = JsonSerializer.Deserialize<ConexionModel>(json);

                string Server = ItemConexion.ConnectionStrings.Server;
                string Database = ItemConexion.ConnectionStrings.Database;
                string Puerto = ItemConexion.ConnectionStrings.Puerto;
                string User = ItemConexion.ConnectionStrings.User;
                string Pwd = ItemConexion.ConnectionStrings.Pwd;


                AppSettings app = new AppSettings();
                app.Conecction = Framework.TypeConection.MySql;
                app.Language = Framework.Data.LanguageEnum.Espanol;
                app.Server = Server ;
                app.DataBase = Database;
                app.UserName = User;
                app.Password = Pwd;
                app.Port = 3306;
                app.IntegratedSecurity = false;

                //app.LoadConfig(AppDomain.CurrentDomain.BaseDirectory + "ZEUS.config");
                MyUtils.AppSetting = app;
            }


        }

        public static void SaveLogError(String Error)
        {
            StreamWriter writer = new StreamWriter(AppDomain.CurrentDomain.BaseDirectory + "Error.txt", true);
            writer.WriteLine(String.Format("{0} {1} - {2}", DateTime.Now.ToShortDateString(), DateTime.Now.ToShortTimeString(), Error));
            writer.Close();
        }

        public System.Net.Http.HttpResponseMessage ErrorValidar(Exception Error)
        {
            var resp = new System.Net.Http.HttpResponseMessage(System.Net.HttpStatusCode.NotFound)
            {
                Content = new System.Net.Http.StringContent(string.Format("Error = {0}", Error.Message))
            };

            return resp;
        }

        public DateTime ConvertToDateTime(String Fecha, String Hora)
        {

            List<String> Lista = Fecha.Split('-').ToList();
            String Date = String.Empty;
            for (int i = 0; i < Lista.Count(); i++)
            {
                if (i == 0) Date += Lista[i].Length == 1 ? ("0" + Lista[i] + "/") : (Lista[i] + "/");
                else if (i == 1) Date += Lista[i].Length == 1 ? ("0" + Lista[i] + "/") : (Lista[i] + "/");
                else if (i == 2) Date += Lista[i] + " ";
            }
            return DateTime.ParseExact(Date + Hora, "dd/MM/yyyy HH:mm:ss", CultureInfo.InvariantCulture);

        }
    }
}

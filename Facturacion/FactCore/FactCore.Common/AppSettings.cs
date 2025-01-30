using Framework;
using Framework.Data;
using System.Text;
using System.Xml;

namespace FactCore.Common
{
    /// <summary>
    /// Clase con configuracion de conexion
    /// </summary>
    public class AppSettings : IAppSettings
    {
        private const String FileConfig = "SMF.config";
        private static String LocalPath = Environment.GetEnvironmentVariable("LocalAppData") + @"\PRVsystems\SM2\";
        private static String m_LocalPathConfig = LocalPath + FileConfig;

        /// <summary>
        /// Devuelve la ubicacion del archivo de configuracion
        /// </summary>
        public String LocalPathConfig
        {
            get { return AppSettings.m_LocalPathConfig; }
        }

        private TypeConection m_Conecction = TypeConection.MySql;
        private String m_Server = String.Empty;
        private Int32 m_Port = 3306;
        private String m_DataBase = String.Empty;
        private String m_Scheme = String.Empty;
        private String m_UserName = String.Empty;
        private String m_Password = String.Empty;
        private Boolean m_IntegratedSecurity = false;
        private LanguageEnum m_Language = LanguageEnum.Espanol;

        /// <summary>
        /// Establece o retorna el tipo de conexion que se usa.
        /// </summary>
        public TypeConection Conecction
        {
            get { return m_Conecction; }
            set { m_Conecction = value; }
        }

        /// <summary>
        /// Establece o retorna la direccion del servidor
        /// </summary>
        public String Server
        {
            get { return m_Server; }
            set { m_Server = value; }
        }

        /// <summary>
        /// Establece o retorna el puerto de comunicacion
        /// </summary>
        public Int32 Port
        {
            get { return m_Port; }
            set { m_Port = value; }
        }

        /// <summary>
        /// Establece o retorna el nombre de la instancia o el nombre de la base de datos
        /// </summary>
        public String DataBase
        {
            get { return m_DataBase; }
            set { m_DataBase = value; }
        }

        /// <summary>
        /// Establece o retorna el esquema de configuracion
        /// </summary>
        public String Scheme
        {
            get { return m_Scheme; }
            set { m_Scheme = value; }
        }

        /// <summary>
        /// Establece o retorna el tipo de autentificacion
        /// </summary>
        public bool IntegratedSecurity
        {
            get { return m_IntegratedSecurity; }
            set { m_IntegratedSecurity = value; }
        }

        /// <summary>
        /// Establece o retorna el usuario de conexion
        /// </summary>
        public String UserName
        {
            get { return m_UserName; }
            set { m_UserName = value; }
        }

        /// <summary>
        /// Establece o retorna la contraseña de conexion
        /// </summary>
        public string Password
        {
            get { return m_Password; }
            set { m_Password = value; }
        }

        /// <summary>
        /// Retorna el resumen de la configuracion
        /// </summary>
        /// <returns></returns>
        public String ToStringResumen()
        {
            String resumen = String.Empty;
            resumen += "Cadena de conexión: " + ConnectionString + "\r\n";
            resumen += "\r\n" + "-------------------------------------------" + "\r\n\r\n";
            resumen += "Servidor: " + Server + "\r\n";
            resumen += "Puerto: " + Port + "\r\n";
            resumen += "Seguridad Integrada: " + (IntegratedSecurity ? "True" : "False") + "\r\n";
            resumen += "Usuario: " + UserName + "\r\n";
            resumen += "Base de Datos: " + DataBase + "\r\n";
            resumen += "Esquema: " + Scheme + "\r\n";
            return resumen;
        }

        /// <summary>
        /// Retorna la cadena de conexion
        /// </summary>
        public string ConnectionString
        {
            get
            {
                switch (m_Conecction)
                {
                    case TypeConection.MsSQL:
                        if (m_IntegratedSecurity)
                            return String.Format("Data Source={0};Initial Catalog={1};Integrated Security=True;", m_Server, m_DataBase);
                        else return String.Format("Data Source={0};Initial Catalog={1};Persist Security Info=True;User ID={2};Password={3};", m_Server, m_DataBase, m_UserName, m_Password);
                    case TypeConection.MySql:
                        return String.Format("Server={0};Database={1};Uid={2};Pwd={3};", m_Server, m_DataBase, m_UserName, m_Password);
                    case TypeConection.Oracle: return String.Format(@"Data Source= ""(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(Host = {0}) (Port={1}))(CONNECT_DATA = (SID ={2})))"";User Id=""{3}"";Password=""{4}"";", m_Server, m_Port, m_DataBase, m_UserName, m_Password);
                }
                return String.Empty;
            }
        }

        /// <summary>
        /// Establece o retorna el idioma
        /// </summary>
        public LanguageEnum Language
        {
            get { return m_Language; }
            set { m_Language = value; }
        }

        /// <summary>
        /// Devuelve el idioma
        /// </summary>
        /// <returns></returns>
        public String GetLanguage()
        {
            switch (m_Language)
            {
                case LanguageEnum.Ingles: return "en";
                default: return "es";
            }
        }

        /// <summary>
        /// Cargar el archivo de configuracion desde una ruta
        /// </summary>
        /// <param name="ruta">Direccion del archivo de configuracion</param>
        /// <returns></returns>
        public bool LoadConfig(string ruta)
        {
            if (!File.Exists(ruta)) return false;
            FileStream fs = null;
            try
            {
                fs = new FileStream(ruta, FileMode.Open);
                XmlDocument doc = new XmlDocument();
                doc.Load(fs);

                XmlNodeList WMPconfig = doc.GetElementsByTagName("SM2config");
                if (WMPconfig == null || WMPconfig.Count == 0) throw new Exception("ConfigEmpty");
                foreach (XmlNode item in WMPconfig[0].ChildNodes)
                {
                    switch (item.Name)
                    {
                        case "TypeConection":
                            if (ValueFromNode(item) == "MsSQL") Conecction = TypeConection.MsSQL;
                            else if (ValueFromNode(item) == "Oracle") Conecction = TypeConection.Oracle;
                            else if (ValueFromNode(item) == "Mysql") Conecction = TypeConection.MySql;
                            else Conecction = TypeConection.WCFservice;
                            break;
                        case "Server":
                            Server = ValueFromNode(item);
                            break;
                        case "Port":
                            Int32 puerto = 0;
                            Int32.TryParse(ValueFromNode(item), out puerto);
                            Port = puerto;
                            break;
                        case "DataBase":
                            DataBase = ValueFromNode(item);
                            break;
                        case "Scheme":
                            Scheme = ValueFromNode(item);
                            break;
                        case "IntegratedSecurity":
                            Boolean val = false;
                            Boolean.TryParse(ValueFromNode(item), out val);
                            IntegratedSecurity = val;
                            break;
                        case "UserName":
                            UserName = ValueFromNode(item);
                            break;
                        case "Password":
                            Password = ValueFromNode(item);
                            break;
                        case "Language":
                            if (ValueFromNode(item) == "Espanol") Language = LanguageEnum.Espanol;
                            else Language = LanguageEnum.Ingles;

                            System.Threading.Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo(GetLanguage());
                            break;
                    }
                }
            }
            catch (Exception ex)
            {
                fs.Close();
                throw (ex);
            }
            finally
            {
                fs.Close();
            }
            return true;
        }

        private String ValueFromNode(XmlNode node)
        {
            String val = String.Empty;
            if (node == null) return val;
            if (!String.IsNullOrEmpty(node.Value)) return node.Value;
            if (node.FirstChild == null) return val;
            return ValueFromNode(node.FirstChild);
        }

        public void LoadConfig()
        {
            LoadConfig(LocalPathConfig);
        }

        public bool SaveConfig()
        {
            return SaveConfig(LocalPathConfig);
        }
        public bool SaveConfig(string ruta)
        {
            FileStream fs = new FileStream(ruta, FileMode.Create);
            UTF8Encoding encoding = new UTF8Encoding();
            XmlTextWriter write = new XmlTextWriter(fs, encoding);
            try
            {
                write.WriteStartDocument();
                write.WriteStartElement("WMPconfig");

                write.WriteStartElement("TypeConection");
                write.WriteString("" + Conecction.ToString());
                write.WriteEndElement();

                write.WriteStartElement("Server");
                write.WriteString("" + Server);
                write.WriteEndElement();

                write.WriteStartElement("Port");
                write.WriteString("" + Port);
                write.WriteEndElement();

                write.WriteStartElement("DataBase");
                write.WriteString("" + DataBase);
                write.WriteEndElement();

                write.WriteStartElement("Scheme");
                write.WriteString("" + Scheme);
                write.WriteEndElement();

                write.WriteStartElement("IntegratedSecurity");
                write.WriteString("" + IntegratedSecurity);
                write.WriteEndElement();

                write.WriteStartElement("UserName");
                write.WriteString("" + UserName);
                write.WriteEndElement();

                write.WriteStartElement("Password");
                write.WriteString("" + Password);
                write.WriteEndElement();

                write.WriteStartElement("Language");
                write.WriteString("" + Language.ToString());
                write.WriteEndElement();

                write.WriteEndElement();
                write.WriteEndDocument();
                write.Close();
            }
            catch (Exception ex)
            {
                write.Close();
                fs.Close();
                throw ex;
            }
            finally
            {
                write.Close();
                fs.Close();
            }
            return true;
        }
    }
}

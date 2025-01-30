using Framework;
using Framework.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Resources;
using System.ServiceModel;
using System.Text;
using System.Threading.Tasks;

namespace FactCore.Common
{
    public class MyUtils
    {
        public static String LocalPath = Environment.GetEnvironmentVariable("LocalAppData") + @"\PRVsystems\SMF\";
        public static String LocalPathConfig = LocalPath + "SMF.config";

        static MyUtils()
        {
            List<String> strings1 = new List<String>();
        }

        public static Boolean StringContainInt16(String Cadena, Int16? Value)
        {
            if (Value == null) return false;
            if (String.IsNullOrEmpty(Cadena)) return false;
            return Cadena.Contains(Convert.ToInt16(Value).ToString());
        }
        public static Boolean StringContainInt32(String Cadena, Int32? Value)
        {
            if (Value == null) return false;
            if (String.IsNullOrEmpty(Cadena)) return false;
            return Cadena.Contains(Convert.ToInt32(Value).ToString());
        }


        private static AppSettings m_AppSetting = null;
        public static AppSettings AppSetting
        {
            get
            {
                //if (m_AppSetting == null) m_AppSetting = new AppSettings();
                return MyUtils.m_AppSetting;
            }
            set { MyUtils.m_AppSetting = value; }
        }

        public static System.Data.ParameterDirection GetOutputDirection(bool output)
        {
            if (output) return System.Data.ParameterDirection.InputOutput;
            else return System.Data.ParameterDirection.Input;
        }

        //public static ObservableCollection<BaseItemList> GetSecuenciaOrdenamiento()
        //{
        //    ObservableCollection<BaseItemList> lista = new ObservableCollection<BaseItemList>();
        //    lista.Add(new BaseItemList(SecuenciaOrdenamientoEnum.Fila, GetCaptionName("Fila")));
        //    lista.Add(new BaseItemList(SecuenciaOrdenamientoEnum.Columna, GetCaptionName("Columna")));
        //    return lista;
        //}



        public static List<BaseItemList> GetDataBase()
        {
            List<BaseItemList> lista = new List<BaseItemList>();
            lista.Add(new BaseItemList(TypeConection.MsSQL, "MS SQL"));
            lista.Add(new BaseItemList(TypeConection.Oracle, "Oracle"));
            lista.Add(new BaseItemList(TypeConection.WCFservice, "WCFservice"));
            return lista;
        }
        public static List<BaseItemList> GetIdiomas()
        {
            List<BaseItemList> lista = new List<BaseItemList>();
            lista.Add(new BaseItemList(LanguageEnum.Espanol, "Español"));
            lista.Add(new BaseItemList(LanguageEnum.Ingles, "English"));
            return lista;
        }

        #region Language
        private static ResourceManager resourceManager = new ResourceManager("SMF.Common.Language", typeof(MyUtils).Assembly);

        public static void SetLanguage()
        {
            System.Threading.Thread.CurrentThread.CurrentUICulture = new System.Globalization.CultureInfo(AppSetting.GetLanguage());
            resourceManager = new ResourceManager("SMF.Common.Language", typeof(MyUtils).Assembly);
        }
        public static ResourceManager GetLanguage()
        {
            return resourceManager;
        }
        public static string GetStringLanguage(string Name)
        {
            ResourceManager rm = GetLanguage();
            if (rm == null) return Name;
            string value = rm.GetString(Name);
            if (String.IsNullOrEmpty(value)) return Name;
            return value;
        }
        public static string GetFormatName(string Name)
        {
            string value = GetStringLanguage("Format." + Name);
            if (String.IsNullOrEmpty(value)) return Name;
            return value;
        }
        public static string GetCaptionName(string Name)
        {
            string value = GetStringLanguage("Caption." + Name);
            if (String.IsNullOrEmpty(value)) return Name;
            return value;
        }
        public static string GetGroupName(string Name)
        {
            string value = GetStringLanguage("Group." + Name);
            if (String.IsNullOrEmpty(value)) return Name;
            return value;
        }
        public static string GetCaptionName(string Name, bool IsPrimary)
        {
            string value = Name;

            if (IsPrimary && Name.Contains("Id")) value = GetStringLanguage("Caption.Id");
            else value = GetStringLanguage("Caption." + Name);
            if (String.IsNullOrEmpty(value)) return Name;
            return value;
        }
        public static string GetTabName(string Name)
        {
            string value = Name;
            value = GetStringLanguage("Tab." + Name);
            return value;
        }
        public static string GetDescriptionName(string Name)
        {
            string value = GetStringLanguage("Description." + Name);
            if (value == null) return Name;
            return String.Empty;
        }
        #endregion

        #region Data Type Default
        public static DateTime GetDateDefault(string Name)
        {
            return new DateTime(2014, 05, 13);
        }
        public static DateTime GetDateDefault()
        {
            return new DateTime(2014, 05, 13);
        }
        public static Int32 GetIntDefault(string Name)
        {
            return 0;
        }
        public static Int32 GetIntDefault()
        {
            return 0;
        }
        public static Int32 GetInt32Default()
        {
            return 0;
        }
        public static Single GetSingleDefault()
        {
            return 0;
        }
        public static Single GetSingleDefault(string Name)
        {
            return 0;
        }
        public static Double GetDoubleDefault()
        {
            return 0d;
        }
        public static Double GetDoubleDefault(string Name)
        {
            return 0d;
        }
        public static Decimal GetDecimalDefault()
        {
            return 0;
        }
        public static Decimal GetDecimalDefault(string Name)
        {
            return 0;
        }
        public static float GetfloatDefault()
        {
            return 0;
        }
        public static float GetfloatDefault(string Name)
        {
            return 0;
        }
        public static Int32 GetInt32Default(string Name)
        {
            if (Name == "Inicio") return 1;
            if (Name == "Termino") return 99999;
            if (Name == "Incremento") return 1;
            if (Name == "Actual") return 1;
            if (Name == "InicioMensual") return 1;
            if (Name == "CierreMensual") return 2;
            if (Name == "Cantidad") return 1;
            if (Name == "EmpresaId") return -1;
            if (Name == "Cantidad") return 1;
            if (Name == "Prioridad") return 1;
            if (Name == "DiasCredito") return 15;
            return 0;
        }
        public static Boolean GetBooleanDefault()
        {
            return false;
        }
        public static Boolean GetBooleanDefault(string Name)
        {
            if (Name.ToLower() == "estado")
            {
                return true;
            }
            if (Name == "Habilitado")
            {
                return true;
            }
            return false;
        }
        public static Int16 GetInt16Default()
        {
            return 0;
        }
        public static Int16 GetInt16Default(string Name)
        {
            if (Name == "A") return 255;
            if (Name == "FilaInicio") return 1;
            if (Name == "FilaTermino") return 2;
            if (Name == "ColumnaInicio") return 1;
            if (Name == "ColumnaTermino") return 2;
            if (Name == "AlturaInicio") return 1;
            if (Name == "AlturaTermino") return 1;
            if (Name == "DiasCredito") return 15;
            return 0;
        }
        public static String GetStringDefault(string Name)
        {
            return string.Empty;
        }
        public static String GetStringDefault()
        {
            return string.Empty;
        }
        public static Guid GetGuidDefault(string Name)
        {
            return Guid.NewGuid();
        }
        public static Guid GetGuidDefault()
        {
            return Guid.NewGuid();
        }
        public static short GetShortDefault(string Name)
        {
            return (short)0;
        }
        public static short GetShortDefault()
        {
            return (short)0;
        }
        public static DateTime GetDateTimeDefault()
        {
            return DateTime.Now;
        }
        public static DateTime GetDateTimeDefault(string Name)
        {
            return DateTime.Now;
        }
        public static long GetLongDefault()
        {
            return 0;
        }
        public static long GetLongDefault(string Name)
        {
            return 0;
        }
        public static TimeSpan GetTimeSpanDefault()
        {
            return new TimeSpan();
        }
        public static TimeSpan GetTimeSpanDefault(string Name)
        {
            return new TimeSpan();
        }
        public static Int64 GetInt64Default()
        {
            return 0;
        }
        public static Int64 GetInt64Default(string Name)
        {
            return 0;
        }
        #endregion


        public static Int32 GetNumberMenor(params Int32[] numbers)
        {
            Int32 v = numbers[0];
            foreach (Int32 val in numbers) if (val < v) v = val;
            return v;
        }
        public static Int16 GetNumberMenor(params Int16[] numbers)
        {
            Int16 v = numbers[0];
            foreach (Int16 val in numbers) if (val < v) v = val;
            return v;
        }

        public static Int32 GetNumberMayor(params Int32[] numbers)
        {
            Int32 v = numbers[0];
            foreach (Int32 val in numbers) if (val > v) v = val;
            return v;
        }
        public static Int16 GetNumberMayor(params Int16[] numbers)
        {
            Int16 v = numbers[0];
            foreach (Int16 val in numbers) if (val > v) v = val;
            return v;
        }


        public static byte[] ConvertByte(String FileName)
        {
            byte[] byteArray = null;

            using (System.IO.FileStream fs = new System.IO.FileStream
                (FileName, System.IO.FileMode.Open, System.IO.FileAccess.Read, System.IO.FileShare.Read))
            {

                byteArray = new byte[fs.Length];

                int iBytesRead = fs.Read(byteArray, 0, (int)fs.Length);
            }
            return byteArray;
        }

        public static void ConvertByteToFile(String FileName, byte[] ByteArray)
        {
            try
            {
                System.IO.FileStream fs = new System.IO.FileStream(FileName, System.IO.FileMode.Create, System.IO.FileAccess.Write);
                fs.Write(ByteArray, 0, ByteArray.Length);
                fs.Close();
                fs.Dispose();
            }
            catch
            {
                return;
            }

        }

        public static String ConvertToPlano(char Separador, params String[] Propiedades)
        {
            try
            {
                String cadena = String.Empty;

                for (int o = 0; o < Propiedades.Length; o++)
                {
                    cadena += Convert.ToString(Propiedades[o]);
                    cadena += Separador;
                }
                //cadena = cadena.TrimEnd(Separador);


                return cadena;
            }
            catch
            {
                return "Error al concatenar";
            }

        }

        public static Int32 GetNullable(Nullable<Int32> value)
        {
            if (value.HasValue) return value.Value;
            return Int32.MinValue;
        }

        public static Nullable<Int32> SetNullable(Int32 value)
        {
            if (value == Int32.MinValue) return null;
            return value;
        }

        public static Int16 GetNullable(Nullable<Int16> value)
        {
            if (value.HasValue) return value.Value;
            return Int16.MinValue;
        }

        public static Nullable<Int16> SetNullable(Int16 value)
        {
            if (value == Int16.MinValue) return null;
            return value;
        }

        public static Int64 GetNullable(Nullable<DateTime> value)
        {
            if (value.HasValue) return value.Value.ToBinary();
            return Int64.MinValue;
        }

        public static Nullable<DateTime> SetNullable(Int64 value)
        {
            if (value == Int64.MinValue) return null;
            return DateTime.FromBinary(value);
        }

        public static Nullable<Int32> GetDbValue(object value, bool IsNullable, Int32 defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return (Int32)defaultValue;
            }
            return LocalConvert.ToInt32(value);
        }

        public static string GetDbValue(object value, bool IsNullable, string defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return defaultValue;
            }
            return (string)value;
        }

        public static Nullable<Int16> GetDbValue(object value, bool IsNullable, Int16 defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return defaultValue;
            }
            return LocalConvert.ToInt16(value);
        }

        public static Nullable<Byte> GetDbValue(object value, bool IsNullable, Byte defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return defaultValue;
            }
            return (Byte)value;
        }

        public static Nullable<Decimal> GetDbValue(object value, bool IsNullable, Decimal defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return defaultValue;
            }
            return (Decimal)value;
        }

        public static Nullable<double> GetDbValue(object value, bool IsNullable, double defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return defaultValue;
            }
            return LocalConvert.ToDouble(value);
        }

        public static object GetDbValue(object value, bool IsNullable, object defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return defaultValue;
            }
            return value;
        }

        public static Nullable<Boolean> GetDbValue(object value, bool IsNullable, Boolean defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return defaultValue;
            }

            return LocalConvert.ToBoolean(value);
        }

        public static Nullable<DateTime> GetDbValue(object value, bool IsNullable, DateTime defaultValue)
        {
            if (value.GetType() == typeof(System.DBNull))
            {
                if (IsNullable) return null;
                else return defaultValue;
            }

            return (DateTime)value;
        }

        public static Boolean GetNullable(Nullable<Boolean> value)
        {
            if (value.HasValue) return (Boolean)value;
            return false;
        }

        public static object GetNullValue(object value, object defaulValue)
        {
            if (value == null) return null;
            return defaulValue;
        }
        public static object GetNullSwapValue(object value, object defaulValue)
        {
            if (value == null) return defaulValue;
            return value;
        }

        public static Uri GetNewUriFromFileConfig(Uri uriServicio, String uriConfig)
        {
            Uri newuri = new Uri(uriConfig);
            String newDireccion = uriServicio.ToString();
            newDireccion = newDireccion.Replace(uriServicio.Host, newuri.Host);
            return new Uri(newDireccion);
        }

        //public static WSHttpBinding wsbinding;
        //public static WSHttpBinding getWsHttpBinding()
        //{
        //    if (wsbinding != null) return wsbinding;

        //    wsbinding = new WSHttpBinding();
        //    wsbinding.MaxReceivedMessageSize = int.MaxValue;
        //    wsbinding.Security.Mode = SecurityMode.None;
        //    wsbinding.Security.Transport.ClientCredentialType = HttpClientCredentialType.Windows;
        //    wsbinding.Security.Transport.ProxyCredentialType = HttpProxyCredentialType.None;
        //    wsbinding.Security.Message.ClientCredentialType = MessageCredentialType.Windows;
        //    wsbinding.Security.Message.NegotiateServiceCredential = true;
        //    return wsbinding;
        //}

        //public static BasicHttpBinding wsbasicbinding;
        //public static BasicHttpBinding getBasicHttpBinding()
        //{
        //    if (wsbasicbinding != null) return wsbasicbinding;

        //    wsbasicbinding = new BasicHttpBinding();
        //    wsbasicbinding.MaxReceivedMessageSize = int.MaxValue;
        //    wsbasicbinding.Security.Transport.ClientCredentialType = HttpClientCredentialType.Windows;
        //    wsbasicbinding.Security.Transport.ProxyCredentialType = HttpProxyCredentialType.None;
        //    return wsbasicbinding;
        //}

        //public static WSHttpBinding getWsHttpBindingLong()
        //{
        //    //if (wsbinding != null) return wsbinding;
        //    wsbinding = new WSHttpBinding();
        //    //wsbinding.TransferMode = TransferMode.Streamed;
        //    wsbinding.ReceiveTimeout = TimeSpan.MaxValue;
        //    wsbinding.MaxReceivedMessageSize = int.MaxValue;
        //    //wsbinding.MaxBufferSize = int.MaxValue;
        //    wsbinding.MaxBufferPoolSize = int.MaxValue;
        //    wsbinding.CloseTimeout = TimeSpan.MaxValue;
        //    wsbinding.OpenTimeout = TimeSpan.MaxValue;
        //    wsbinding.SendTimeout = TimeSpan.MaxValue;
        //    //wsbinding.MaxReceivedMessageSize = long.MaxValue;
        //    wsbinding.Security.Mode = SecurityMode.None;
        //    wsbinding.Security.Transport.ClientCredentialType = HttpClientCredentialType.Windows;
        //    wsbinding.Security.Transport.ProxyCredentialType = HttpProxyCredentialType.None;
        //    wsbinding.Security.Message.ClientCredentialType = MessageCredentialType.Windows;
        //    wsbinding.Security.Message.NegotiateServiceCredential = true;
        //    return wsbinding;
        //}

    }

    public class ConvertirNumeroLetra
    {
        public static string ConvertirALetras(string num, string Moneda)
        {
            string res, dec = "";
            Int64 entero;
            int decimales;
            double nro;

            try
            {
                nro = Convert.ToDouble(num);
            }
            catch
            {
                return "";
            }

            entero = Convert.ToInt64(Math.Truncate(nro));
            decimales = Convert.ToInt32(Math.Round((nro - entero) * 100, 2));
            String parteDecimal = "00" + decimales.ToString();

            dec = String.Format(" CON {0}/100 {1}", parteDecimal.Substring(parteDecimal.Length - 2, 2), Moneda);


            res = toText(Convert.ToDouble(entero)) + dec;
            return res;
        }

        private static string toText(double value)
        {
            string Num2Text = "";
            value = Math.Truncate(value);
            if (value == 0) Num2Text = "CERO";
            else if (value == 1) Num2Text = "UNO";
            else if (value == 2) Num2Text = "DOS";
            else if (value == 3) Num2Text = "TRES";
            else if (value == 4) Num2Text = "CUATRO";
            else if (value == 5) Num2Text = "CINCO";
            else if (value == 6) Num2Text = "SEIS";
            else if (value == 7) Num2Text = "SIETE";
            else if (value == 8) Num2Text = "OCHO";
            else if (value == 9) Num2Text = "NUEVE";
            else if (value == 10) Num2Text = "DIEZ";
            else if (value == 11) Num2Text = "ONCE";
            else if (value == 12) Num2Text = "DOCE";
            else if (value == 13) Num2Text = "TRECE";
            else if (value == 14) Num2Text = "CATORCE";
            else if (value == 15) Num2Text = "QUINCE";
            else if (value < 20) Num2Text = "DIECI" + toText(value - 10);
            else if (value == 20) Num2Text = "VEINTE";
            else if (value < 30) Num2Text = "VEINTI" + toText(value - 20);
            else if (value == 30) Num2Text = "TREINTA";
            else if (value == 40) Num2Text = "CUARENTA";
            else if (value == 50) Num2Text = "CINCUENTA";
            else if (value == 60) Num2Text = "SESENTA";
            else if (value == 70) Num2Text = "SETENTA";
            else if (value == 80) Num2Text = "OCHENTA";
            else if (value == 90) Num2Text = "NOVENTA";
            else if (value < 100) Num2Text = toText(Math.Truncate(value / 10) * 10) + " Y " + toText(value % 10);
            else if (value == 100) Num2Text = "CIEN";
            else if (value < 200) Num2Text = "CIENTO " + toText(value - 100);
            else if ((value == 200) || (value == 300) || (value == 400) || (value == 600) || (value == 800)) Num2Text = toText(Math.Truncate(value / 100)) + "CIENTOS";
            else if (value == 500) Num2Text = "QUINIENTOS";
            else if (value == 700) Num2Text = "SETECIENTOS";
            else if (value == 900) Num2Text = "NOVECIENTOS";
            else if (value < 1000) Num2Text = toText(Math.Truncate(value / 100) * 100) + " " + toText(value % 100);
            else if (value == 1000) Num2Text = "MIL";
            else if (value < 2000) Num2Text = "MIL " + toText(value % 1000);
            else if (value < 1000000)
            {
                Num2Text = toText(Math.Truncate(value / 1000)) + " MIL";
                if (Num2Text.Contains(" Y UNO MIL")) Num2Text = Num2Text.Replace(" Y UNO MIL", " Y UN MIL");
                if ((value % 1000) > 0) Num2Text = Num2Text + " " + toText(value % 1000);
            }

            else if (value == 1000000) Num2Text = "UN MILLON";
            else if (value < 2000000) Num2Text = "UN MILLON " + toText(value % 1000000);
            else if (value < 1000000000000)
            {
                Num2Text = toText(Math.Truncate(value / 1000000)) + " MILLONES ";
                if ((value - Math.Truncate(value / 1000000) * 1000000) > 0) Num2Text = Num2Text + " " + toText(value - Math.Truncate(value / 1000000) * 1000000);
            }

            else if (value == 1000000000000) Num2Text = "UN BILLON";
            else if (value < 2000000000000) Num2Text = "UN BILLON " + toText(value - Math.Truncate(value / 1000000000000) * 1000000000000);

            else
            {
                Num2Text = toText(Math.Truncate(value / 1000000000000)) + " BILLONES";
                if ((value - Math.Truncate(value / 1000000000000) * 1000000000000) > 0) Num2Text = Num2Text + " " + toText(value - Math.Truncate(value / 1000000000000) * 1000000000000);
            }
            return Num2Text;

        }

    }
}

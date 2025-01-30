using System.Resources;

namespace Framework
{
    public class Utils
    {
        private static ResourceManager rm = new ResourceManager("Framework.Language", typeof(Utils).Assembly);

        public static ResourceManager GetLanguage()
        {
            return rm;
        }

        public static string GetStringLanguage(string Name)
        {
            ResourceManager rm = GetLanguage();
            if (rm == null) return Name;

            return rm.GetString(Name);
        }


        public static string GetValue(object value, string result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
                return value.ToString();
        }

        public static int GetValue(object value, int result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
                return (int)value;
        }

        public static DateTime GetValue(object value, DateTime result)
        {
            try
            {
                if (value == null || value.GetType() == System.DBNull.Value.GetType())
                    return result;
                else
                    return (DateTime)value;
            }
            catch
            {
                return result;
            }
        }

        public static DateTime GetValue(byte[] value, DateTime result)
        {
            try
            {
                if (value == null)
                    return result;
                else
                    return DateTime.MaxValue;
            }
            catch
            {
                return result;
            }
        }

        public static double GetValue(object value, double result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
                return (double)value;
        }

        public static long GetValue(object value, long result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
                return (long)value;
        }

        public static TimeSpan GetValue(object value, TimeSpan result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
            {
                return (TimeSpan)value;
            }
        }

        public static bool GetValue(object value, bool result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
                return (bool)value;
        }

        public static short GetValue(object value, short result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
                return (short)value;
        }


        public static Guid GetValue(object value, Guid result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
                return (Guid)value;
        }

        public static decimal GetValue(object value, decimal result)
        {
            if (value == null || value.GetType() == System.DBNull.Value.GetType())
                return result;
            else
                return (decimal)value;
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FactCore.Common
{
    public static class LocalConvert
    {
        public static System.Globalization.CultureInfo cultura = new System.Globalization.CultureInfo("es-PE");

        public static Double ToDouble(Object value)
        {
            if (value == null) return 0;
            return Convert.ToDouble(value, cultura);
        }
        public static Int16 ToInt16(Object value)
        {
            if (value == null) return 0;
            return Convert.ToInt16(value, cultura);
        }
        public static Int32 ToInt32(Object value)
        {
            if (value == null) return 0;
            return Convert.ToInt32(value, cultura);
        }
        public static Int64 ToInt64(Object value)
        {
            if (value == null) return 0;
            return Convert.ToInt64(value, cultura);
        }
        public static Decimal ToDecimal(Object value)
        {
            if (value == null) return 0;
            return Convert.ToDecimal(value, cultura);
        }

        internal static Boolean ToBoolean(Object value)
        {
            if (value == null) return false;
            return Convert.ToBoolean(value, cultura);
        }



    }
}

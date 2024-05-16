using System.Data;

namespace Framework
{
    public class BaseDB
    {
        protected Dictionary<string, string> m_Columns = new Dictionary<string, string>();
        public virtual bool FillFrom<Entity>(IDataReader row, Entity entity)
        {
            System.Reflection.MemberInfo[] propiedades = entity.GetType().GetProperties();
            foreach (System.Reflection.MemberInfo info in propiedades)
            {
                try
                {
                    if (info.MemberType != System.Reflection.MemberTypes.Property) continue;
                    System.Reflection.PropertyInfo prop = info as System.Reflection.PropertyInfo;
                    if (!m_Columns.ContainsKey(prop.Name.ToUpper())) continue;

                    Object value = row[prop.Name.ToUpper()];
                    //prop.SetValue(entity, Convert.ChangeType(value, prop.PropertyType), null);

                    if (prop.PropertyType == typeof(Int16)) prop.SetValue(entity, Convert.ToInt16(value), null);
                    else if (prop.PropertyType == typeof(Int16?)) prop.SetValue(entity, value as Int16?, null);
                    else if (prop.PropertyType == typeof(Int32)) prop.SetValue(entity, Convert.ToInt32(value), null);
                    else if (prop.PropertyType == typeof(Int32?)) prop.SetValue(entity, value as Int32?, null);
                    else if (prop.PropertyType == typeof(Int64)) prop.SetValue(entity, Convert.ToInt64(value), null);
                    else if (prop.PropertyType == typeof(Int64?)) prop.SetValue(entity, value as Int64?, null);
                    else if (prop.PropertyType == typeof(String)) prop.SetValue(entity, Convert.ToString(value), null);
                    else if (prop.PropertyType == typeof(Boolean)) prop.SetValue(entity, Convert.ToBoolean(value), null);
                    else if (prop.PropertyType == typeof(Boolean?)) prop.SetValue(entity, value as Boolean?, null);
                    else if (prop.PropertyType == typeof(Decimal)) prop.SetValue(entity, Convert.ToDecimal(value), null);
                    else if (prop.PropertyType == typeof(Decimal?)) prop.SetValue(entity, value as Decimal?, null);
                    else if (prop.PropertyType == typeof(Double)) prop.SetValue(entity, Convert.ToDouble(value), null);
                    else if (prop.PropertyType == typeof(Double?)) prop.SetValue(entity, value as Double?, null);
                    else if (prop.PropertyType == typeof(Single)) prop.SetValue(entity, Convert.ToSingle(value), null);
                    else if (prop.PropertyType == typeof(Single?)) prop.SetValue(entity, value as Single?, null);
                    else if (prop.PropertyType == typeof(DateTime)) prop.SetValue(entity, Convert.ToDateTime(value), null);
                    else if (prop.PropertyType == typeof(DateTime?)) prop.SetValue(entity, value as DateTime?, null);
                    else if (prop.PropertyType == typeof(byte[])) prop.SetValue(entity, value as Byte[], null);
                    //else
                    //{
                    //    if (IsEnum(prop.PropertyType)) prop.SetValue(entity, System.Enum.Parse(prop.PropertyType, value.ToString()), null);
                    //    else if (IsNullableEnum(prop.PropertyType))
                    //    {
                    //        prop.SetValue(entity, System.Enum.Parse(prop.PropertyType, value.ToString()), null);
                    //    }
                    //}
                    else
                    {
                        if (IsEnum(prop.PropertyType)) prop.SetValue(entity, System.Enum.Parse(prop.PropertyType, value.ToString()), null);
                        else if (IsNullableEnum(prop.PropertyType))
                        {
                            Type enumType = Nullable.GetUnderlyingType(prop.PropertyType);
                            object enumValue = Enum.ToObject(enumType, value);
                            prop.SetValue(entity, enumValue, null);
                        }

                    }
                }
                catch
                {
                    continue;
                }
            }
            AditionalFillFrom(row);
            return true;
        }

          public virtual bool FillFromAt<Entity>(DataRow row, Entity entity)
        {
            System.Reflection.MemberInfo[] propiedades = entity.GetType().GetProperties();
            foreach (System.Reflection.MemberInfo info in propiedades)
            {
                try
                {
                    if (info.MemberType != System.Reflection.MemberTypes.Property) continue;
                    System.Reflection.PropertyInfo prop = info as System.Reflection.PropertyInfo;
                    if (!m_Columns.ContainsKey(prop.Name.ToUpper())) continue;

                    Object value = row[prop.Name.ToUpper()];
                    //prop.SetValue(entity, Convert.ChangeType(value, prop.PropertyType), null);

                    if (prop.PropertyType == typeof(Int16)) prop.SetValue(entity, Convert.ToInt16(value), null);
                    else if (prop.PropertyType == typeof(Int16?)) prop.SetValue(entity, value as Int16?, null);
                    else if (prop.PropertyType == typeof(Int32)) prop.SetValue(entity, Convert.ToInt32(value), null);
                    else if (prop.PropertyType == typeof(Int32?)) prop.SetValue(entity, value as Int32?, null);
                    else if (prop.PropertyType == typeof(Int64)) prop.SetValue(entity, Convert.ToInt64(value), null);
                    else if (prop.PropertyType == typeof(Int64?)) prop.SetValue(entity, value as Int64?, null);
                    else if (prop.PropertyType == typeof(String)) prop.SetValue(entity, Convert.ToString(value), null);
                    else if (prop.PropertyType == typeof(Boolean)) prop.SetValue(entity, Convert.ToBoolean(value), null);
                    else if (prop.PropertyType == typeof(Boolean?)) prop.SetValue(entity, value as Boolean?, null);
                    else if (prop.PropertyType == typeof(Decimal)) prop.SetValue(entity, Convert.ToDecimal(value), null);
                    else if (prop.PropertyType == typeof(Decimal?)) prop.SetValue(entity, value as Decimal?, null);
                    else if (prop.PropertyType == typeof(Double)) prop.SetValue(entity, Convert.ToDouble(value), null);
                    else if (prop.PropertyType == typeof(Double?)) prop.SetValue(entity, value as Double?, null);
                    else if (prop.PropertyType == typeof(Single)) prop.SetValue(entity, Convert.ToSingle(value), null);
                    else if (prop.PropertyType == typeof(Single?)) prop.SetValue(entity, value as Single?, null);
                    else if (prop.PropertyType == typeof(DateTime)) prop.SetValue(entity, Convert.ToDateTime(value), null);
                    else if (prop.PropertyType == typeof(DateTime?)) prop.SetValue(entity, value as DateTime?, null);
                    else if (prop.PropertyType == typeof(byte[])) prop.SetValue(entity, value as Byte[], null);
                    //else
                    //{
                    //    if (IsEnum(prop.PropertyType)) prop.SetValue(entity, System.Enum.Parse(prop.PropertyType, value.ToString()), null);
                    //    else if (IsNullableEnum(prop.PropertyType))
                    //    {
                    //        prop.SetValue(entity, System.Enum.Parse(prop.PropertyType, value.ToString()), null);
                    //    }
                    //}
                    else
                    {
                        if (IsEnum(prop.PropertyType)) prop.SetValue(entity, System.Enum.Parse(prop.PropertyType, value.ToString()), null);
                        else if (IsNullableEnum(prop.PropertyType))
                        {
                            Type enumType = Nullable.GetUnderlyingType(prop.PropertyType);
                            object enumValue = Enum.ToObject(enumType, value);
                            prop.SetValue(entity, enumValue, null);
                        }

                    }
                }
                catch
                {
                    continue;
                }
            }
            AditionalFillFromAt(row);
            return true;
        }
        public static bool IsEnum(Type t)
        {
            return typeof(Enum).IsAssignableFrom(t);
        }
        public static bool IsNullableEnum(Type t)
        {
            Type u = Nullable.GetUnderlyingType(t);
            return (u != null) && u.IsEnum;
        }
        public virtual bool AditionalFillFrom(IDataReader row)
        {

            return true;
        }
        public virtual bool AditionalFillFromAt(DataRow row)
        {

            return true;
        }
        protected DataTable m_SchemaTable = null;
        protected void FillSchemeTable(IDataReader dr)
        {
            try
            {
                m_SchemaTable = dr.GetSchemaTable();
                m_Columns.Clear();
                if (m_SchemaTable == null) return;

                foreach (DataRow myField in m_SchemaTable.Rows)
                    if (!m_Columns.ContainsKey(myField["ColumnName"].ToString().ToUpper()))
                        m_Columns.Add(myField["ColumnName"].ToString().ToUpper(), myField["DataType"].ToString());

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);
            }
        }

        protected void FillSchemeTableAt(DataTable m_SchemaTable)
        {
            try
            {
                m_Columns.Clear();
                if (m_SchemaTable == null) return;

                foreach (DataRow myField in m_SchemaTable.Rows)
                {

                    var i = myField["ColumnName"].ToString();
                    if (!m_Columns.ContainsKey(myField["ColumnName"].ToString().ToUpper()))
                        m_Columns.Add(myField["ColumnName"].ToString().ToUpper(), myField["DataType"].ToString());
                }

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);
            }
        }
    }
}

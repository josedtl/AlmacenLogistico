using Framework.DataLayer;
using Framework.Data;
using Framework.EntityLayer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FactCore.EntityLayer;
using FactCore.Common;

namespace FactCore.DataLayer
{
    public class BaseDataEntity : IBaseDataEntity
    {
        #region Base Data

        protected DataHelper m_Helper = null;
        protected Dictionary<string, string> m_Columns = new Dictionary<string, string>();
        protected DataTable m_SchemaTable = null;

        public IHelper Helper
        {
            get { return m_Helper; }
        }

        public IDatabase DbDatabase
        {
            get { return m_Helper.Database; }
        }

        public IDbConnection DbConnection
        {
            get { return m_Helper.DbConnection; }
        }

        public IDbTransaction DbTransaction
        {
            get { return m_Helper.DbTransaction; }
        }

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


        public virtual bool SetHelper(IHelper helper)
        {
            m_Helper = (DataHelper)helper;
            Helper.SetHelper(helper);
            return true;
        }

        public virtual bool FillFrom(DataRow row, IBaseEntityObject entity)
        {
            BaseEntityObject baseEntity = (BaseEntityObject)entity;

            return true;
        }

        public virtual bool FillFrom<Entity>(IDataReader row, Entity entity) where Entity : IBaseEntityObject
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
                catch //(Exception ex)
                {
                    continue;
                }
            }
            AditionalFillFrom(row, entity);
            return true;
        }


        public bool IsEnum(Type t)
        {
            return typeof(Enum).IsAssignableFrom(t);
        }
        public bool IsNullableEnum(Type t)
        {
            Type u = Nullable.GetUnderlyingType(t);
            return (u != null) && u.IsEnum;
        }



        public virtual bool AditionalFillFrom(IDataReader row, IBaseEntityObject entity)
        {

            return true;
        }

        public virtual bool AditionalFillFrom(DataRow row, IBaseEntityObject entity)
        {
            return true;
        }


        #endregion
        public BaseDataEntity()
        {
        }

        public void InicializeHelper()
        {
            StartHelper(AppSetting, false);
            SetHelper(Helper);
        }

        public virtual IAppSettings AppSetting
        {
            get
            {
                if (MyUtils.AppSetting == null)
                {
                    AppSettings app = new AppSettings();
                    app.LoadConfig();
                    MyUtils.AppSetting = app;
                    return app;
                }

                return MyUtils.AppSetting;
            }
        }
        public virtual bool StartHelper(bool IsTransactional)
        {
            try
            {
                if (m_Helper == null || (IsTransactional && !m_Helper.IsTransactional))
                {
                    m_Helper = new DataHelper(AppSetting, IsTransactional);
                }
                return Helper.Connect();
            }
            catch (Exception ex)
            {
                throw new Exception("No se pudo conectar [" + ex.Message + "]");
            }
        }

        public virtual bool StartHelper(IAppSettings setting, bool IsTransactional)
        {
            try
            {
                m_Helper = new DataHelper(setting, IsTransactional);

                return m_Helper.Connect();
            }
            catch (Exception ex)
            {
                throw new Exception("No se pudo conectar [" + ex.Message + "]");
            }
        }
    }
}

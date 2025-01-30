using Framework;
using Framework.EntityLayer;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Formats.Asn1;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace FactCore.EntityLayer
{
    [DataContract, Serializable]
    public class BaseEntityObject : IBaseEntityObject, IDisposable, INotifyPropertyChanged
    {
        protected bool m_Changed = false;
        protected Guid m_InternalGuid = Guid.NewGuid();
        protected LogicalState m_LogicalState = LogicalState.Added;

        private bool m_Selected;

        public BaseEntityObject()
        {
            m_InternalGuid = Guid.NewGuid();
        }

        public virtual void OnChanged()
        {
            if (m_LogicalState == LogicalState.Added) return;
            if (m_LogicalState == LogicalState.Deleted) return;

            m_Changed = true;
            m_LogicalState = LogicalState.Updated;
        }

        public virtual void OnLogicalDelete()
        {
            m_Changed = false;
            m_LogicalState = LogicalState.Deleted;
            OnPropertyChanged("LogicalState");
        }
        public virtual void OnLogicalUpdate()
        {
            m_Changed = false;
            m_LogicalState = LogicalState.Updated;
        }
        public virtual void OnLogicalAdded()
        {
            m_Changed = false;
            m_LogicalState = LogicalState.Added;
        }
        public virtual void OnLogicalLoaded()
        {
            m_Changed = false;
            m_LogicalState = LogicalState.Loaded;
        }

        public Boolean IsReadOnly
        {
            get { return m_LogicalState == Framework.LogicalState.Loaded; }
        }

        public Boolean IsEnabled
        {
            get { return !IsReadOnly; }
        }

        public virtual object Clone(bool AllProperties)
        {
            return null;
        }

        public virtual object CloneData()
        {
            return Clone(false);
        }
        [DataMember]
        public bool IsChanged
        {
            get { return m_Changed; }
            set { m_Changed = value; }
        }

        [DataMember]
        public bool IsSelected
        {
            get { return m_Selected; }
            set { m_Selected = value; }
        }

        [DataMember]
        public Guid InternalGuid
        {
            get { return m_InternalGuid; }
            set { m_InternalGuid = value; }
        }

        [DataMember]
        public bool Selected
        {
            get { return m_Selected; }
            set { m_Selected = value; }
        }
        [DataMember]
        public LogicalState LogicalState
        {
            get { return m_LogicalState; }
            set { m_LogicalState = value; }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                // Clean up all managed resources
            }
        }

        ~BaseEntityObject()
        {
            Dispose(false);
        }

        [field: NonSerialized]
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;


        protected void OnPropertyChanged(String Name)
        {
            OnChanged();
            if (PropertyChanged != null) PropertyChanged.Invoke(this, new System.ComponentModel.PropertyChangedEventArgs(Name));
        }

        public String ToJson()
        {
            return ToJson(this);
        }

        private String ToJson(BaseEntityObject ValueObject)
        {
            StringBuilder sb = new StringBuilder();
            JsonWriter jw = new JsonTextWriter(new System.IO.StringWriter(sb));
            jw.Formatting =Newtonsoft.Json.Formatting.Indented;
            jw.WriteStartObject();
            WriteJson(ref jw, ValueObject);
            jw.WriteEndObject();
            return sb.ToString();
        }

        private void WriteJson(ref JsonWriter jw, BaseEntityObject ValueObject)
        {
            System.Reflection.MemberInfo[] propiedades = ValueObject.GetType().GetProperties();
            foreach (System.Reflection.MemberInfo info in propiedades)
            {
                try
                {
                    if (info.MemberType != System.Reflection.MemberTypes.Property) continue;
                    System.Reflection.PropertyInfo prop = info as System.Reflection.PropertyInfo;

                    jw.WritePropertyName(prop.Name);
                    bool isEnum = typeof(Enum).IsAssignableFrom(prop.PropertyType);
                    bool isArray = typeof(Array).IsAssignableFrom(prop.PropertyType);
                    bool isList = typeof(IList).IsAssignableFrom(prop.PropertyType);
                    bool isObject = typeof(BaseEntityObject).IsAssignableFrom(prop.PropertyType);

                    if (!isArray && !isList)
                    {

                        if (!isEnum && !isObject) jw.WriteValue(prop.GetValue(ValueObject));
                        else if (isObject)
                        {
                            BaseEntityObject item = (BaseEntityObject)prop.GetValue(ValueObject);
                            jw.WriteStartObject();
                            WriteJson(ref jw, item);
                            jw.WriteEndObject();
                        }
                        else
                        {
                            Int16 val = Convert.ToInt16(prop.GetValue(ValueObject));
                            jw.WriteValue(val);
                        }
                    }
                    else
                    {
                        jw.WriteStartArray();

                        if (isArray)
                        {

                            Array lista = (Array)prop.GetValue(ValueObject);
                            foreach (BaseEntityObject item in lista)
                            {
                                jw.WriteStartObject();
                                WriteJson(ref jw, item);
                                jw.WriteEndObject();
                            }
                        }
                        if (isList)
                        {

                            IList lista = (IList)prop.GetValue(ValueObject);
                            foreach (BaseEntityObject item in lista)
                            {
                                jw.WriteStartObject();
                                WriteJson(ref jw, item);
                                jw.WriteEndObject();
                            }
                        }
                        jw.WriteEndArray();
                    }
                }
                catch
                {
                    continue;
                }
            }
        }

        public void LoadFromJson(String FileName)
        {
            try
            {
                StreamReader reader = new StreamReader(FileName);
                JObject obj = JObject.Parse(reader.ReadToEnd());
                ReadJson(obj, this);
                reader.Close();
                reader.Dispose();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void LoadFromJsonString(String json)
        {
            try
            {
                JObject obj = JObject.Parse(json);
                ReadJson(obj, this);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private void ReadJson(JObject obj, BaseEntityObject ValueObject)
        {
            System.Reflection.MemberInfo[] propiedades = ValueObject.GetType().GetProperties();
            foreach (System.Reflection.MemberInfo info in propiedades)
            {
                try
                {
                    if (info.MemberType != System.Reflection.MemberTypes.Property) continue;
                    System.Reflection.PropertyInfo prop = info as System.Reflection.PropertyInfo;

                    bool isEnum = typeof(Enum).IsAssignableFrom(prop.PropertyType);
                    bool isArray = typeof(Array).IsAssignableFrom(prop.PropertyType);
                    bool isList = typeof(IList).IsAssignableFrom(prop.PropertyType);
                    bool isObject = typeof(BaseEntityObject).IsAssignableFrom(prop.PropertyType);

                    Object value = obj[prop.Name];

                    if (!isList && !isArray)
                    {
                        if (!isEnum && !isObject)
                        {
                            if (prop.PropertyType == typeof(Int16)) prop.SetValue(ValueObject, Convert.ToInt16(value), null);
                            else if (prop.PropertyType == typeof(Int16?))
                            {
                                if (value != null) prop.SetValue(ValueObject, Convert.ToInt16(value), null);
                            }
                            else if (prop.PropertyType == typeof(Int32)) prop.SetValue(ValueObject, Convert.ToInt32(value), null);
                            else if (prop.PropertyType == typeof(Int32?))
                            {
                                if (value != null) prop.SetValue(ValueObject, Convert.ToInt32(value), null);
                            }
                            else if (prop.PropertyType == typeof(Int64)) prop.SetValue(ValueObject, Convert.ToInt64(value), null);
                            else if (prop.PropertyType == typeof(Int64?))
                            {
                                if (value != null) prop.SetValue(ValueObject, Convert.ToInt64(value), null);
                            }
                            else if (prop.PropertyType == typeof(String)) prop.SetValue(ValueObject, Convert.ToString(value), null);
                            else if (prop.PropertyType == typeof(Boolean)) prop.SetValue(ValueObject, Convert.ToBoolean(value), null);
                            else if (prop.PropertyType == typeof(Boolean?))
                            {
                                if (value != null) prop.SetValue(ValueObject, Convert.ToBoolean(value), null);
                            }
                            else if (prop.PropertyType == typeof(Decimal)) prop.SetValue(ValueObject, Convert.ToDecimal(value), null);
                            else if (prop.PropertyType == typeof(Decimal?))
                            {
                                if (value != null) prop.SetValue(ValueObject, Convert.ToDecimal(value), null);
                            }
                            else if (prop.PropertyType == typeof(Double)) prop.SetValue(ValueObject, Convert.ToDouble(value), null);
                            else if (prop.PropertyType == typeof(Double?))
                            {
                                if (value != null) prop.SetValue(ValueObject, Convert.ToDouble(value), null);
                            }
                            else if (prop.PropertyType == typeof(Single)) prop.SetValue(ValueObject, Convert.ToSingle(value), null);
                            else if (prop.PropertyType == typeof(Single?))
                            {
                                if (value != null) prop.SetValue(ValueObject, Convert.ToSingle(value), null);
                            }
                            else if (prop.PropertyType == typeof(DateTime)) prop.SetValue(ValueObject, Convert.ToDateTime(value), null);
                            else if (prop.PropertyType == typeof(DateTime?))
                            {
                                if (value != null) prop.SetValue(ValueObject, Convert.ToDateTime(value), null);
                            }
                            else if (prop.PropertyType == typeof(byte[])) prop.SetValue(ValueObject, value as Byte[], null);
                        }
                        else if (isObject)
                        {
                            JObject obj1 = JObject.Parse(value.ToString());
                            BaseEntityObject item = Activator.CreateInstance(prop.PropertyType) as BaseEntityObject;
                            ReadJson(obj1, item);
                            prop.SetValue(ValueObject, item, null);
                        }
                        else
                        {
                            if (IsEnum(prop.PropertyType)) prop.SetValue(ValueObject, System.Enum.Parse(prop.PropertyType, value.ToString()), null);
                            else if (IsNullableEnum(prop.PropertyType))
                            {
                                Type enumType = Nullable.GetUnderlyingType(prop.PropertyType);
                                object enumValue = Enum.ToObject(enumType, value);
                                prop.SetValue(ValueObject, enumValue, null);
                            }
                        }
                    }
                    else
                    {
                        if (isList)
                        {
                            bool isCollection = prop.PropertyType.GetGenericTypeDefinition() == typeof(ObservableCollection<>);
                            if (!isCollection)//Lista Generica
                            {
                                var listType = typeof(List<>);
                                var genericArgs = prop.PropertyType.GetGenericArguments();
                                Type tipoLista = listType.MakeGenericType(genericArgs);

                                IList ListaDetalle = (IList)Activator.CreateInstance(tipoLista);
                                String json = String.Format(@"{{""{0}"": {1} }}", prop.Name, value.ToString());
                                JObject obj2 = JObject.Parse(json);
                                foreach (JObject o in obj2[prop.Name].Children<JObject>())
                                {
                                    BaseEntityObject item = Activator.CreateInstance(genericArgs[0]) as BaseEntityObject;
                                    ReadJson(o, item);
                                    ListaDetalle.Add(item);
                                }
                                prop.SetValue(ValueObject, ListaDetalle, null);
                            }
                            else//Observable Collection
                            {
                                var listType = typeof(ObservableCollection<>);
                                var genericArgs = prop.PropertyType.GetGenericArguments();
                                Type tipoLista = listType.MakeGenericType(genericArgs);

                                IList ListaDetalle = (IList)Activator.CreateInstance(tipoLista);
                                String json = String.Format(@"{{""{0}"": {1} }}", prop.Name, value.ToString());
                                JObject obj2 = JObject.Parse(json);
                                foreach (JObject o in obj2[prop.Name].Children<JObject>())
                                {
                                    BaseEntityObject item = Activator.CreateInstance(genericArgs[0]) as BaseEntityObject;
                                    ReadJson(o, item);
                                    ListaDetalle.Add(item);
                                }
                                prop.SetValue(ValueObject, ListaDetalle, null);
                            }
                        }
                        else //isArray
                        {

                        }
                    }
                }
                catch
                {
                    continue;
                }
            }
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

        public String ToSplitString()
        {
            return ToSplitString("|");
        }

        public String ToSplitString(Char Separador)
        {
            String cadena = String.Empty;
            System.Reflection.MemberInfo[] propiedades = this.GetType().GetMembers();
            for (int i = 0; i < propiedades.Length; i++)
            {
                System.Reflection.MemberInfo info = propiedades[i];
                if (info.MemberType != System.Reflection.MemberTypes.Property) continue;
                System.Reflection.PropertyInfo prop = info as System.Reflection.PropertyInfo;
                if (prop == null) continue;
                if (prop.Name == "IsChanged") continue;
                if (prop.Name == "LogicalState") continue;
                if (prop.Name == "InternalGuid") continue;
                if (prop.Name == "Selected") continue;
                if (prop.Name == "IsSelected") continue;
                if (prop.Name.StartsWith("x")) continue;

                Object value = prop.GetValue(this, null);
                if (!prop.PropertyType.IsGenericType) cadena += Convert.ToString(prop.GetValue(this, null));
                if (i != (propiedades.Length - 1)) cadena += Separador.ToString();
            }

            return cadena;
        }

        public String ToSplitString(String Separador)
        {
            String cadena = String.Empty;
            System.Reflection.MemberInfo[] propiedades = this.GetType().GetMembers();
            for (int i = 0; i < propiedades.Length; i++)
            {
                System.Reflection.MemberInfo info = propiedades[i];
                if (info.MemberType != System.Reflection.MemberTypes.Property) continue;
                System.Reflection.PropertyInfo prop = info as System.Reflection.PropertyInfo;
                if (prop == null) continue;
                if (prop.Name == "IsChanged") continue;
                if (prop.Name == "LogicalState") continue;
                if (prop.Name == "InternalGuid") continue;
                if (prop.Name == "Selected") continue;
                if (prop.Name == "IsSelected") continue;
                if (prop.Name.StartsWith("x")) continue;

                Object value = prop.GetValue(this, null);
                if (!prop.PropertyType.IsGenericType) cadena += Convert.ToString(prop.GetValue(this, null));
                if (i != (propiedades.Length - 1)) cadena += Separador;
            }

            return cadena;
        }

        //Func<TDespachoRecepcionSeccionEntity, string> keySelector

        public String ToSplitString<Entity>(Entity Entidad, params Func<Entity, string>[] keySelector) where Entity : IBaseEntityObject
        {
            return ToSplitString<Entity>(Entidad, "|", keySelector);
        }
        public String ToSplitString<Entity>(Entity Entidad, String Separador, params Func<Entity, string>[] keySelector) where Entity : IBaseEntityObject
        {
            String cadena = String.Empty;

            System.Reflection.MemberInfo[] propiedades = this.GetType().GetMembers();
            for (int o = 0; o < keySelector.Length; o++)
            {
                for (int i = 0; i < propiedades.Length; i++)
                {
                    System.Reflection.MemberInfo info = propiedades[i];
                    if (info.MemberType != System.Reflection.MemberTypes.Property) continue;
                    System.Reflection.PropertyInfo prop = info as System.Reflection.PropertyInfo;
                    if (prop == null) continue;
                    if (keySelector[o](Entidad) != prop.Name) continue;

                    Object value = prop.GetValue(this, null);
                    if (!prop.PropertyType.IsGenericType) cadena += Convert.ToString(prop.GetValue(this, null));
                }
                if (o != (propiedades.Length - 1)) cadena += Separador;
            }

            return cadena;
        }

        public String ToSplitString<Entity>(Entity Entidad, String Separador, params String[] Propiedades) where Entity : IBaseEntityObject
        {
            String cadena = String.Empty;

            System.Reflection.MemberInfo[] propiedades = this.GetType().GetMembers();
            for (int o = 0; o < Propiedades.Length; o++)
            {
                for (int i = 0; i < propiedades.Length; i++)
                {
                    System.Reflection.MemberInfo info = propiedades[i];
                    if (info.MemberType != System.Reflection.MemberTypes.Property) continue;
                    System.Reflection.PropertyInfo prop = info as System.Reflection.PropertyInfo;
                    if (prop == null) continue;
                    if (Propiedades[o] != prop.Name) continue;

                    Object value = prop.GetValue(this, null);
                    if (!prop.PropertyType.IsGenericType) cadena += Convert.ToString(prop.GetValue(this, null));
                }
                if (o != (propiedades.Length - 1)) cadena += Separador;
            }

            return cadena;
        }
        public Int32 GetInt32Default()
        {
            return 0;
        }

        public Int16 GetInt16Default()
        {
            return (Int16)0;
        }

        public Decimal GetDecimalDefault()
        {
            return 0;
        }
        public Boolean GetBooleanDefault()
        {
            return false;
        }

        public String GetStringDefault()
        {
            return String.Empty;
        }

        public DateTime GetDateTimeDefault()
        {
            return new DateTime();
        }


    }
}

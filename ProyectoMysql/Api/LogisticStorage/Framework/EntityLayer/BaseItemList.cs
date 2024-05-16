using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Framework
{
    public class BaseItemList
    {
        public BaseItemList()
        {
            m_Value = null;
            m_Description = String.Empty;
        }

        public BaseItemList(Object pValue, String pDescription)
        {
            m_Value = pValue;
            m_Description = pDescription;
        }

        private Object m_Value;
        public Object Value
        {
            get { return m_Value; }
            set { m_Value = value; }
        }

        private String m_Description;

        public String Description
        {
            get { return m_Description; }
            set { m_Description = value; }
        }
    }
}

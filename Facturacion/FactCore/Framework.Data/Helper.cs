using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Framework.Data
{
    public abstract class Helper : IHelper
    {
        protected IDatabase m_Database;
        protected DbConnection m_Connection;
        protected DbTransaction m_Transaction;
        protected bool m_OwnerTransaction = true;
        protected bool m_IsTransactional = false;
        protected string m_Connectionstring = "";
        protected int m_TransactionLevel = 0;
        protected TypeConection m_TypeConection;

        public IDatabase Database { get { return m_Database; } }
        public DbConnection DbConnection { get { return m_Connection; } }
        public DbTransaction DbTransaction { get { return m_Transaction; } }
        public TypeConection TypeConection
        {
            get { return m_TypeConection; }
            set { m_TypeConection = value; }
        }
        public string Connectionstring { get { return m_Connectionstring; } }
        public bool OwnerTransaction { get { return m_TransactionLevel == 1; } }
        public bool IsTransactional { get { return m_IsTransactional; } }

        public virtual bool Connect()
        {
            return false;
        }

        public virtual bool Close()
        {
            return false;
        }

        public virtual bool Close(IDataReader dr)
        {
            if (dr != null && !dr.IsClosed) dr.Close();
            return Close();
        }

        public virtual bool CancelTransaction()
        {
            return true;
        }

        public virtual void SetHelper(IHelper helper)
        {
            m_Database = helper.Database;
            m_Connection = helper.DbConnection;
            m_Transaction = helper.DbTransaction;
            m_Connectionstring = helper.Connectionstring;
            m_TypeConection = helper.TypeConection;
            //if (helper.IsTransactional) m_TransactionLevel++;
        }
    }
}

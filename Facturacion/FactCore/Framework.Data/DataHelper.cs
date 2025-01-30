using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Framework.Data.Sql;
using Framework.Data.Mysql;

namespace Framework.Data
{
    public class DataHelper : Helper
    {
        private String m_SchemaName = String.Empty;
        public DataHelper(IAppSettings setting, bool IsTransactional)
        {
            m_SchemaName = setting.Scheme;
            TypeConection = setting.Conecction;
            m_Connectionstring = setting.ConnectionString;
            m_IsTransactional = IsTransactional;
            if (m_IsTransactional) m_TransactionLevel = 1;
        }

        public override bool Connect()
        {
            if (Database == null)
            {
                if (TypeConection == Framework.TypeConection.MsSQL) m_Database = new SqlDatabase(Connectionstring, m_SchemaName);
               else if (TypeConection == Framework.TypeConection.MySql) m_Database = new MySqlDatabase(Connectionstring);
                //else m_Database = new OracleDatabase(Connectionstring, m_SchemaName);
            }
            if (DbConnection == null && IsTransactional)
            {
                m_Connection = m_Database.CreateConnection();
            }
            if (IsTransactional && m_Connection.State != System.Data.ConnectionState.Open)
            {
                m_Connection.Open();
            }
            if (DbTransaction == null && IsTransactional)
            {
                m_Transaction = m_Connection.BeginTransaction();
                m_TransactionLevel = 1;
            }
            else
            {
                if (IsTransactional)
                {
                    m_TransactionLevel++;
                }
            }
            return true;
        }

        public override bool Close(IDataReader rd)
        {
            if (rd != null && !rd.IsClosed) rd.Close();
            if (m_Database != null) m_Database.ClearParameter();
            return Close();
        }
        public override bool Close()
        {
            if (IsTransactional) m_TransactionLevel--;
            if (IsTransactional)
            {
                if (m_TransactionLevel == 0 && IsTransactional)
                {
                    if (m_Transaction != null && m_Transaction.Connection != null) m_Transaction.Commit();
                    if (m_Connection != null) m_Connection.Close();
                    m_Database = null;
                    m_Connection = null;
                    m_Transaction = null;

                    GC.Collect();
                }
            }
            else
            {
                if (m_Database != null) m_Database.Close();
                m_Database = null;
                m_Connection = null;
            }

            return true;
        }

        public override bool CancelTransaction()
        {
            if (IsTransactional && m_TransactionLevel > 0)
            {
                m_TransactionLevel = 0;
                m_Transaction.Rollback();
                m_Connection.Close();
                m_Database = null;
                m_Connection = null;
            }
            return true;
        }
    }
}

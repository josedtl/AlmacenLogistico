using System.Data.Common;
using System.Data;

namespace Framework.Data
{

    public class Database : IDatabase
    {

        public void AddParameter(ParameterDirection direction, string name, DbType dbType, object value)
        {
            throw new NotImplementedException();
        }

        public void AddParameter(ParameterDirection direction, string name, DbType dbType, int size, bool nullable, object value)
        {
            throw new NotImplementedException();
        }

        public void AddParameter(ParameterDirection direction, string name, DbType dbType, int size, bool nullable, byte precision, byte scale, object value)
        {
            throw new NotImplementedException();
        }

        public int ExecuteNonQuery()
        {
            return -1;
        }

        public int ExecuteNonQuery(CommandType commandType, string commandText)
        {
            return -1;
        }

        public int ExecuteNonQuery(DbTransaction transaction)
        {
            return -1;
        }

        public int ExecuteNonQuery(string storedProcedureName, params object[] parameterValues)
        {
            return -1;
        }

        public int ExecuteNonQuery(DbTransaction transaction, CommandType commandType, string commandText)
        {
            return -1;
        }

        public int ExecuteNonQuery(DbTransaction transaction, string storedProcedureName, params object[] parameterValues)
        {
            return -1;
        }

        public IDataReader ExecuteReader(CommandType commandType, string commandText)
        {
            return null;
        }

        public IDataReader ExecuteReader(DbTransaction transaction)
        {
            return null;
        }

        public IDataReader ExecuteReader(string storedProcedureName, params object[] parameterValues)
        {
            return null;
        }

        public IDataReader ExecuteReader(DbTransaction transaction, CommandType commandType, string commandText)
        {
            return null;
        }

        public IDataReader ExecuteReader(DbTransaction transaction, string storedProcedureName, params object[] parameterValues)
        {
            return null;
        }

        public object ExecuteScalar()
        {
            return null;
        }

        public object ExecuteScalar(CommandType commandType, string commandText)
        {
            return null;
        }

        public object ExecuteScalar(DbTransaction transaction)
        {
            return null;
        }

        public object ExecuteScalar(string storedProcedureName, params object[] parameterValues)
        {
            return null;
        }

        public object ExecuteScalar(DbTransaction transaction, CommandType commandType, string commandText)
        {
            return null;
        }

        public object ExecuteScalar(DbTransaction transaction, string storedProcedureName, params object[] parameterValues)
        {
            return null;
        }

        public DbCommand GetStoredProcCommand(string storedProcedureName)
        {
            return null;
        }

        public object GetParameterValue(string name)
        {
            return null;
        }

        public DbConnection CreateConnection()
        {
            return null;
        }

        public void Close()
        {
            return;
        }

        public void Open()
        {
            return;
        }


        public void SetTransaction(DbTransaction transaction)
        {
            return;
        }

        public string ConnectionString
        {
            get { throw new NotImplementedException(); }
        }

        public List<BaseItemList> GetDataBase()
        {
            throw new NotImplementedException();
        }

        public string SchemaName
        {
            get
            {
                throw new NotImplementedException();
            }
            set
            {
                throw new NotImplementedException();
            }
        }


        public void ClearParameter()
        {

        }
    }
}

using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Framework.Data
{
    public interface IDatabase
    {
        String SchemaName { get; set; }
        System.Collections.Generic.List<BaseItemList> GetDataBase();

        String ConnectionString { get; }
        void AddParameter(ParameterDirection direction, string name, DbType dbType, object value);
        void AddParameter(ParameterDirection direction, string name, DbType dbType, int size, bool nullable, object value);
        void AddParameter(ParameterDirection direction, string name, DbType dbType, int size, bool nullable, byte precision, byte scale, object value);

        int ExecuteNonQuery();

        int ExecuteNonQuery(CommandType commandType, string commandText);

        int ExecuteNonQuery(DbTransaction transaction);

        int ExecuteNonQuery(string storedProcedureName, params object[] parameterValues);

        int ExecuteNonQuery(DbTransaction transaction, CommandType commandType, string commandText);

        int ExecuteNonQuery(DbTransaction transaction, string storedProcedureName, params object[] parameterValues);

        IDataReader ExecuteReader(CommandType commandType, string commandText);

        IDataReader ExecuteReader(string storedProcedureName, params object[] parameterValues);

        IDataReader ExecuteReader(DbTransaction transaction, CommandType commandType, string commandText);

        IDataReader ExecuteReader(DbTransaction transaction, string storedProcedureName, params object[] parameterValues);

        object ExecuteScalar();

        object ExecuteScalar(CommandType commandType, string commandText);

        object ExecuteScalar(DbTransaction transaction);

        object ExecuteScalar(string storedProcedureName, params object[] parameterValues);

        object ExecuteScalar(DbTransaction transaction, CommandType commandType, string commandText);

        object ExecuteScalar(DbTransaction transaction, string storedProcedureName, params object[] parameterValues);

        DbCommand GetStoredProcCommand(string storedProcedureName);

        object GetParameterValue(string name);

        DbConnection CreateConnection();

        void SetTransaction(DbTransaction transaction);

        void Close();

        void Open();

        void ClearParameter();
    }
}

using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using MySql.Data.MySqlClient;

namespace Framework.Data.Mysql
{
    public class MySqlDatabase : IDatabase
    {
        private MySqlConnection oConnection;
        private MySqlCommand oCommand;

        public string ConnectionString
        {
            get { return oConnection.ConnectionString; }
        }

        public MySqlDatabase(string connectionString)
        {
            oConnection = new MySqlConnection(connectionString);
            oCommand = new MySqlCommand();
            oCommand.Connection = oConnection;
        }

        public DbConnection CreateConnection()
        {
            return oConnection;
        }

        public DbCommand GetStoredProcCommand(string storedProcedureName)
        {
            try
            {
                oCommand = new MySqlCommand();
                oCommand.CommandType = CommandType.StoredProcedure;
                oCommand.CommandText = storedProcedureName;
                return oCommand;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void AddParameter(ParameterDirection direction, string name, DbType dbType, object value)
        {
            MySqlParameter param = new MySqlParameter();
            param.Direction = direction;
            param.ParameterName = name;
            param.DbType = dbType;
            param.Value = value;
            oCommand.Parameters.Add(param);
        }

        public void AddParameter(ParameterDirection direction, string name, DbType dbType, int size, bool nullable, object value)
        {
            MySqlParameter param = new MySqlParameter();
            param.Direction = direction;
            param.ParameterName = name;
            param.DbType = dbType;
            param.Value = value;
            param.Size = size;
            param.IsNullable = nullable;
            oCommand.Parameters.Add(param);
        }

        public void AddParameter(ParameterDirection direction, string name, DbType dbType, int size, bool nullable, byte precision, byte scale, object value)
        {
            MySqlParameter param = new MySqlParameter();
            param.Direction = direction;
            param.ParameterName = name;
            param.DbType = dbType;
            param.Value = value;
            param.Size = size;
            param.IsNullable = nullable;
            param.Precision = precision;
            param.Scale = scale;
            oCommand.Parameters.Add(param);
        }

        // Implementa los métodos restantes de manera similar
        // ...

        public void Close()
        {
            try
            {
                oConnection.Close();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Open()
        {
            try
            {
                if (oConnection.State != ConnectionState.Open) oConnection.Open();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void SetTransaction(DbTransaction transaction)
        {
            oCommand.Transaction = (MySqlTransaction)transaction;
        }

        public List<BaseItemList> GetDataBase()
        {
            try
            {
                string query = "SHOW DATABASES;";
                MySqlDataReader dr = (MySqlDataReader)ExecuteReader(CommandType.Text, query);
                List<BaseItemList> lista = new List<BaseItemList>();
                while (dr.Read())
                {
                    String name = dr["Database"].ToString();
                    lista.Add(new BaseItemList(name, name));
                }

                return lista;
            }
            catch (Exception ex)
            {
                throw ex;
            }
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

        public object GetParameterValue(string name)
        {
            try
            {
                return oCommand.Parameters[name].Value;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message, ex);
            }
        }

        public void ClearParameter()
        {
            oCommand.Parameters.Clear();
        }

        public int ExecuteNonQuery()
        {
            try
            {
                Open();
                oCommand.Connection = oConnection;
                Int32 val = oCommand.ExecuteNonQuery();
                return val;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int ExecuteNonQuery(CommandType commandType, string commandText)
        {
            try
            {
                Open();
                oCommand.Connection = oConnection;
                oCommand.CommandType = commandType;
                oCommand.CommandText = commandText;
                Int32 val = oCommand.ExecuteNonQuery();
                return val;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int ExecuteNonQuery(DbTransaction transaction)
        {
            try
            {
                MySqlTransaction oTran = transaction as MySqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConnection;
                oCommand.Transaction = oTran;
                Int32 val = oCommand.ExecuteNonQuery();
                return val;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private void CreateParameterCommand(String Procedure, params object[] parameterValues)
        {
            try
            {
                MySqlDataReader read = (MySqlDataReader)ExecuteReader(CommandType.Text, "SELECT PARAMETER_NAME FROM INFORMATION_SCHEMA.PARAMETERS WHERE SPECIFIC_NAME = '" + Procedure + "'");
                List<String> parametros = new List<string>();
                while (read.Read()) parametros.Add(read.GetString(0));

                oCommand.Parameters.Clear();
                Int32 index = 0;
                foreach (var item in parameterValues)
                {
                    oCommand.Parameters.AddWithValue(parametros[index], item);
                    index++;
                }
                read.Close();
                read.Dispose();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int ExecuteNonQuery(string storedProcedureName, params object[] parameterValues)
        {
            try
            {
                CreateParameterCommand(storedProcedureName, parameterValues);
                Open();
                oCommand.Connection = oConnection;
                Int32 val = oCommand.ExecuteNonQuery();
                return val;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int ExecuteNonQuery(DbTransaction transaction, CommandType commandType, string commandText)
        {
            try
            {
                MySqlTransaction oTran = transaction as MySqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConnection;
                oCommand.Transaction = oTran;
                oCommand.CommandType = commandType;
                oCommand.CommandText = commandText;
                Int32 val = oCommand.ExecuteNonQuery();
                return val;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int ExecuteNonQuery(DbTransaction transaction, string storedProcedureName, params object[] parameterValues)
        {
            try
            {
                CreateParameterCommand(storedProcedureName, parameterValues);
                MySqlTransaction oTran = transaction as MySqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConnection;
                oCommand.Transaction = oTran;
                oCommand.CommandType = CommandType.StoredProcedure;
                oCommand.CommandText = storedProcedureName;
                Int32 val = oCommand.ExecuteNonQuery();
                return val;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IDataReader ExecuteReader(CommandType commandType, string commandText)
        {
            try
            {
                Open();
                oCommand.CommandType = commandType;
                oCommand.CommandText = commandText;
                return oCommand.ExecuteReader();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IDataReader ExecuteReader(string storedProcedureName, params object[] parameterValues)
        {
            try
            {
                CreateParameterCommand(storedProcedureName, parameterValues);

                Open();
                oCommand.Connection = oConnection;
                oCommand.CommandText = storedProcedureName;
                oCommand.CommandType = CommandType.StoredProcedure;
                return oCommand.ExecuteReader();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IDataReader ExecuteReader(DbTransaction transaction, CommandType commandType, string commandText)
        {
            try
            {
                MySqlTransaction oTran = transaction as MySqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConnection;
                oCommand.CommandText = commandText;
                oCommand.CommandType = commandType;
                return oCommand.ExecuteReader();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IDataReader ExecuteReader(DbTransaction transaction, string storedProcedureName, params object[] parameterValues)
        {
            try
            {
                CreateParameterCommand(storedProcedureName, parameterValues);
                MySqlTransaction oTran = transaction as MySqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConnection;
                oCommand.Transaction = oTran;
                oCommand.CommandType = CommandType.StoredProcedure;
                oCommand.CommandText = storedProcedureName;
                return oCommand.ExecuteReader();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public object ExecuteScalar()
        {
            try
            {
                Open();
                oCommand.Connection = oConnection;
                return oCommand.ExecuteScalar();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public object ExecuteScalar(CommandType commandType, string commandText)
        {
            try
            {
                Open();
                oCommand.CommandType = commandType;
                oCommand.CommandText = commandText;
                return oCommand.ExecuteScalar();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public object ExecuteScalar(DbTransaction transaction)
        {
            try
            {
                MySqlTransaction oTran = transaction as MySqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConnection;
                oCommand.Transaction = oTran;
                return oCommand.ExecuteScalar();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public object ExecuteScalar(string storedProcedureName, params object[] parameterValues)
        {
            try
            {
                CreateParameterCommand(storedProcedureName, parameterValues);

                Open();
                oCommand.Connection = oConnection;
                oCommand.CommandText = storedProcedureName;
                oCommand.CommandType = CommandType.StoredProcedure;
                return oCommand.ExecuteScalar();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public object ExecuteScalar(DbTransaction transaction, CommandType commandType, string commandText)
        {
            try
            {
                MySqlTransaction oTran = transaction as MySqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConnection;
                oCommand.CommandText = commandText;
                oCommand.CommandType = commandType;
                return oCommand.ExecuteScalar();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public object ExecuteScalar(DbTransaction transaction, string storedProcedureName, params object[] parameterValues)
        {
            try
            {
                CreateParameterCommand(storedProcedureName, parameterValues);
                MySqlTransaction oTran = transaction as MySqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConnection;
                oCommand.Transaction = oTran;
                oCommand.CommandType = CommandType.StoredProcedure;
                oCommand.CommandText = storedProcedureName;
                return oCommand.ExecuteScalar();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

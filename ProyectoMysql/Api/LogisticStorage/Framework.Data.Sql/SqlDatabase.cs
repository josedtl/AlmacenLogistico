using System.Data.Common;
using System.Data;
using System.Data.SqlClient;

namespace Framework.Data.Sql
{
    public class SqlDatabase : IDatabase
    {
        private SqlConnection oConection;
        private SqlCommand oCommand;

        public string ConnectionString
        {
            get { return oConection.ConnectionString; }
        }

        public SqlDatabase(string connectionString, String schemaName)
        {
            oConection = new SqlConnection(connectionString);
            oCommand = new SqlCommand();
            oCommand.Connection = oConection;
        }

        public DbConnection CreateConnection()
        {
            return oConection;
        }

        public DbCommand GetStoredProcCommand(string storedProcedureName)
        {
            try
            {
                oCommand = new SqlCommand();
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
            SqlParameter param = new SqlParameter();
            param.Direction = direction;
            param.ParameterName = name;
            param.DbType = dbType;
            param.Value = value;
            oCommand.Parameters.Add(param);
        }
        public void AddParameter(ParameterDirection direction, string name, DbType dbType, int size, bool nullable, object value)
        {
            SqlParameter param = new SqlParameter();
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
            SqlParameter param = new SqlParameter();
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

        public int ExecuteNonQuery()
        {
            try
            {
                Open();
                oCommand.Connection = oConection;
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
                oCommand.Connection = oConection;
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
                SqlTransaction oTran = transaction as SqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConection;
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
                SqlDataReader read = (SqlDataReader)ExecuteReader(CommandType.Text, "SELECT P.NAME AS PARAMETER FROM SYS.PROCEDURES SP JOIN SYS.PARAMETERS P ON SP.OBJECT_ID = P.OBJECT_ID WHERE SP.NAME = '" + Procedure + "'");
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
                oCommand.Connection = oConection;
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
                SqlTransaction oTran = transaction as SqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConection;
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
                SqlTransaction oTran = transaction as SqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConection;
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
                oCommand.Connection = oConection;
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
                SqlTransaction oTran = transaction as SqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConection;
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
                SqlTransaction oTran = transaction as SqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConection;
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
                oCommand.Connection = oConection;
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
                SqlTransaction oTran = transaction as SqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConection;
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
                oCommand.Connection = oConection;
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
                SqlTransaction oTran = transaction as SqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConection;
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
                SqlTransaction oTran = transaction as SqlTransaction;
                if (oTran == null) throw new Exception("DbTransactionNull");

                Open();
                oCommand.Connection = oConection;
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



        public void Close()
        {
            try
            {
                oConection.Close();
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
                if (oConection.State != ConnectionState.Open) oConection.Open();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void SetTransaction(DbTransaction transaction)
        {
            oCommand.Transaction = (SqlTransaction)transaction;
        }


        public List<BaseItemList> GetDataBase()
        {
            try
            {
                string query = "SELECT NAME FROM sysdatabases WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb', 'ReportServer', 'ReportServerTempDB') ORDER BY 1;";
                SqlDataReader dr = (SqlDataReader)ExecuteReader(CommandType.Text, query);
                List<BaseItemList> lista = new List<BaseItemList>();
                while (dr.Read())
                {
                    String name = dr["NAME"].ToString();
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


        public void ClearParameter()
        {
            oCommand.Parameters.Clear();
        }
    }
}

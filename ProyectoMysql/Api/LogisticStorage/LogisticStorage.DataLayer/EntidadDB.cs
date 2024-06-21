using Framework;
using Framework.Data;
using LogisticStorage.Common;
using LogisticStorage.EntityLayer;
using System.Data;
using System.Data.SqlClient;

namespace LogisticStorage.DataLayer
{
	public class EntidadDB : BaseDataEntity
	{

		public virtual List<EntidadEntity> PersonaNaturalObtenerItem(Int32 PersonaNaturaId)
		{
			try
			{
				StartHelper(false);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_PersonaNaturalId", DbType.Int32, 4, false, 0, 0, PersonaNaturaId);
				IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_PersonaNaturalCabeceraItem");
				FillSchemeTable(dr);
				List<EntidadEntity> EntityList = new List<EntidadEntity>();
				while (dr.Read())
				{
					EntidadEntity entity = new EntidadEntity();
					if (FillFrom(dr, entity)) EntityList.Add(entity);
					entity.OnLogicalLoaded();
				}

				Helper.Close(dr);
				return EntityList;
			}
			catch (Exception ex)
			{
				throw ex;
			}
		}
		public virtual bool PersonaNaturalRegistrar(EntidadEntity Ent)
		{
			StartHelper(true);
			try
			{
                PersonaNaturalRegistrarDB(Ent);
			}
			catch (Exception ex)
			{
				Helper.CancelTransaction();
				throw ex;
			}

			Helper.Close();
			return true;
		}
		private bool PersonaNaturalRegistrarDB(EntidadEntity Ent)
		{
			if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
			{
				String storedName = "sp_PersonaNatural_Actualizar";
				if (Ent.LogicalState == LogicalState.Added) storedName = "sp_PersonaNatural_Registrar";
				DbDatabase.GetStoredProcCommand(storedName);
				DbDatabase.SetTransaction(Helper.DbTransaction);



				DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_EntidadId", DbType.Int32, 4, false, 0, 0, Ent.EntidadId);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TipoDocumentoIdentidadId", DbType.Int32, 4, false, 0, 0, Ent.TipoDocumentoIdentidadId);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NumDocumento", DbType.String, 100, false, 0, 0, Ent.NumDocumento);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombres", DbType.String, 100, false, 0, 0, Ent.Nombres);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ApellidoPaterno", DbType.String, 100, false, 0, 0, Ent.ApellidoPaterno);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ApellidoMaterno", DbType.String, 100, false, 0, 0, Ent.ApellidoMaterno);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaNacimiento", DbType.DateTime, 12, false, 0, 0, Ent.FechaNacimiento);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Direccion", DbType.String, 20, false, 0, 0, Ent.Direccion);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Telefono", DbType.String, 20, false, 0, 0, Ent.Telefono);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Correo", DbType.String, 20, false, 0, 0, Ent.Correo);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_SexoId", DbType.Int32, 4, false, 0, 0, Ent.SexoId);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EstadoCivilId", DbType.Int32, 4, false, 0, 0, Ent.EstadoCivilId);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UbigeoId", DbType.Int32, 4, false, 0, 0, Ent.UbigeoId);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EstadoRegistro", DbType.Boolean, 2, false, 0, 0, Ent.EstadoRegistro);
				int returnValue = DbDatabase.ExecuteNonQuery();
				if (Ent.LogicalState == LogicalState.Added)
				{
					if (Ent.EntidadId <= 0) Ent.EntidadId = (Int32)DbDatabase.GetParameterValue("v_EntidadId");
					Ent.OnLogicalAdded();
				}
				else
				{
					if (returnValue <= 0) throw new Exception("ErrorDB.UpdateEntity");
					Ent.OnLogicalUpdate();
				}
			}


			return true;
		}
		public virtual List<EntidadEntity> PersonaNaturalObtenerMain()
		{
			try
			{
				StartHelper(false);
				IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_Persona_Main");
				FillSchemeTable(dr);
				List<EntidadEntity> EntityList = new List<EntidadEntity>();

				while (dr.Read())
				{
					EntidadEntity entity = new EntidadEntity();
					if (FillFrom<EntidadEntity>(dr, entity)) EntityList.Add(entity);
					entity.OnLogicalLoaded();
				}

				Helper.Close(dr);
				return EntityList;
			}
			catch (Exception ex)
			{
				throw ex;
			}
		}
        public virtual List<EntidadEntity> EmpresaObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_EmpresaMainItems");
                FillSchemeTable(dr);
                List<EntidadEntity> EntityList = new List<EntidadEntity>();

                while (dr.Read())
                {
                    EntidadEntity entity = new EntidadEntity();
                    if (FillFrom<EntidadEntity>(dr, entity)) EntityList.Add(entity);
                    entity.OnLogicalLoaded();
                }

                Helper.Close(dr);
                return EntityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public virtual List<EntidadEntity> EmpresaObtenerItem(Int32 PersonaNaturaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EntidadId", DbType.Int32, 4, false, 0, 0, PersonaNaturaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_EmpresaCabeceraItem");
                FillSchemeTable(dr);
                List<EntidadEntity> EntityList = new List<EntidadEntity>();
                while (dr.Read())
                {
                    EntidadEntity entity = new EntidadEntity();
                    if (FillFrom(dr, entity)) EntityList.Add(entity);
                    entity.OnLogicalLoaded();
                }

                Helper.Close(dr);
                return EntityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public virtual bool EmpresaRegistrar(EntidadEntity Ent)
        {
            StartHelper(true);
            try
            {
                EmpresaRegistrarDB(Ent);
            }
            catch (Exception ex)
            {
                Helper.CancelTransaction();
                throw ex;
            }

            Helper.Close();
            return true;
        }

        private bool EmpresaRegistrarDB(EntidadEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_Empresa_Actualizar";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_Empresa_Registrar";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_EntidadId", DbType.Int32, 4, false, 0, 0, Ent.EntidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TipoDocumentoIdentidadId", DbType.Int32, 4, false, 0, 0, Ent.TipoDocumentoIdentidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NumDocumento", DbType.String, 30, false, 0, 0, Ent.NumDocumento);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombres", DbType.String, 100, false, 0, 0, Ent.Nombres);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NombreComercial", DbType.String, 100, false, 0, 0, Ent.NombreComercial);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UbigeoId", DbType.Int32, 4, false, 0, 0, Ent.UbigeoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Direccion", DbType.String, 100, false, 0, 0, Ent.Direccion);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Telefono", DbType.String, 20, false, 0, 0, Ent.Telefono);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Correo", DbType.String, 50, false, 0, 0, Ent.Correo);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EstadoRegistro", DbType.Boolean, 2, false, 0, 0, Ent.EstadoRegistro);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.EntidadId <= 0) Ent.EntidadId = (Int32)DbDatabase.GetParameterValue("v_EntidadId");
                    Ent.OnLogicalAdded();
                }
                else
                {
                    if (returnValue <= 0) throw new Exception("ErrorDB.UpdateEntity");
                    Ent.OnLogicalUpdate();
                }
            }


            return true;
        }
        public virtual List<EntidadEntity> EntidadBuscarNombreCompletoItem(String Nombre)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombre", DbType.String, 50, false, 0, 0, Nombre);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_EntidadBuscarNomCompletoItem");
                FillSchemeTable(dr);
                List<EntidadEntity> EntityList = new List<EntidadEntity>();
                while (dr.Read())
                {
                    EntidadEntity entity = new EntidadEntity();
                    if (FillFrom(dr, entity)) EntityList.Add(entity);
                    entity.OnLogicalLoaded();
                }

                Helper.Close(dr);
                return EntityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public virtual List<EntidadEntity> EntidadObtenerNombreCompletoItem(Int32 Id)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EntidadId", DbType.Int32,10, false, 0, 0, Id);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_EntidadObtenerNomCompletoItem");
                FillSchemeTable(dr);
                List<EntidadEntity> EntityList = new List<EntidadEntity>();
                while (dr.Read())
                {
                    EntidadEntity entity = new EntidadEntity();
                    if (FillFrom(dr, entity)) EntityList.Add(entity);
                    entity.OnLogicalLoaded();
                }

                Helper.Close(dr);
                return EntityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public virtual bool PersonaNaturalRegistrarEnlace(EntidadEntity Ent)
        {
            StartHelper(true);
            try
            {
                PersonaNaturalRegistrarEnlaceDB(Ent);
            }
            catch (Exception ex)
            {
                Helper.CancelTransaction();
                throw ex;
            }

            Helper.Close();
            return true;
        }
        private bool PersonaNaturalRegistrarEnlaceDB(EntidadEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_PersonaRegistarEnlace";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);

                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_EntidadId", DbType.Int32, 4, false, 0, 0, Ent.EntidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TipoDocumentoIdentidadId", DbType.Int32, 4, false, 0, 0, Ent.TipoDocumentoIdentidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NumDocumento", DbType.String, 100, false, 0, 0, Ent.NumDocumento);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombres", DbType.String, 100, false, 0, 0, Ent.Nombres);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ApellidoPaterno", DbType.String, 100, false, 0, 0, Ent.ApellidoPaterno);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ApellidoMaterno", DbType.String, 100, false, 0, 0, Ent.ApellidoMaterno);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.EntidadId <= 0) Ent.EntidadId = (Int32)DbDatabase.GetParameterValue("v_EntidadId");
                    Ent.OnLogicalAdded();
                }
            }


            return true;
        }
        public virtual bool EmpresaRegistrarEnlace(EntidadEntity Ent)
        {
            StartHelper(true);
            try
            {
                EmpresaRegistrarEnlaceDB(Ent);
            }
            catch (Exception ex)
            {
                Helper.CancelTransaction();
                throw ex;
            }

            Helper.Close();
            return true;
        }
        private bool EmpresaRegistrarEnlaceDB(EntidadEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_Empresa_RegistrarEnlace";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_EntidadId", DbType.Int32, 4, false, 0, 0, Ent.EntidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TipoDocumentoIdentidadId", DbType.Int32, 4, false, 0, 0, Ent.TipoDocumentoIdentidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NumDocumento", DbType.String, 30, false, 0, 0, Ent.NumDocumento);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NombreComercial", DbType.String, 100, false, 0, 0, Ent.NombreComercial);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.EntidadId <= 0) Ent.EntidadId = (Int32)DbDatabase.GetParameterValue("v_EntidadId");
                    Ent.OnLogicalAdded();
                }
            }


            return true;
        }


    }
}

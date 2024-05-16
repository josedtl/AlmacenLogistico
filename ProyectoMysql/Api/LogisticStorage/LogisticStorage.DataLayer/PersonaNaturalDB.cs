using Framework;
using Framework.Data;
using LogisticStorage.Common;
using LogisticStorage.EntityLayer;
using System.Data;
using System.Data.SqlClient;

namespace LogisticStorage.DataLayer
{
	public class PersonaNaturalDB : BaseDataEntity
	{

		public virtual List<PersonaNaturalEntity> ObtenerItem(Int32 PersonaNaturaId)
		{
			try
			{
				StartHelper(false);
				DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_PersonaNaturalId", DbType.Int32, 4, false, 0, 0, PersonaNaturaId);
				IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_PersonaNaturalCabeceraItem");
				FillSchemeTable(dr);
				List<PersonaNaturalEntity> EntityList = new List<PersonaNaturalEntity>();
				while (dr.Read())
				{
					PersonaNaturalEntity entity = new PersonaNaturalEntity();
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
		public virtual bool Registrar(PersonaNaturalEntity Ent)
		{
			StartHelper(true);
			try
			{
				RegistrarDB(Ent);
			}
			catch (Exception ex)
			{
				Helper.CancelTransaction();
				throw ex;
			}

			Helper.Close();
			return true;
		}

		public virtual List<PersonaNaturalEntity> Registrar(List<PersonaNaturalEntity> Items)
		{
			StartHelper(true);
			try
			{
				for (int o = 0; o < Items.Count; o++) Registrar(Items[o]);
			}
			catch (Exception ex)
			{
				Helper.CancelTransaction();
				throw ex;
			}

			Helper.Close();
			return Items;
		}


		private bool RegistrarDB(PersonaNaturalEntity Ent)
		{
			if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
			{
				String storedName = "sp_PersonaNatural_Actualizar";
				if (Ent.LogicalState == LogicalState.Added) storedName = "sp_PersonaNatural_Registrar";
				DbDatabase.GetStoredProcCommand(storedName);
				DbDatabase.SetTransaction(Helper.DbTransaction);



				DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_PersonaNaturalId", DbType.Int32, 4, false, 0, 0, Ent.PersonaNaturalId);
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
					if (Ent.PersonaNaturalId <= 0) Ent.PersonaNaturalId = (Int32)DbDatabase.GetParameterValue("v_PersonaNaturalId");
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



		public virtual List<PersonaNaturalEntity> ObtenerMain()
		{
			try
			{
				StartHelper(false);
				IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_Persona_Main");
				FillSchemeTable(dr);
				List<PersonaNaturalEntity> EntityList = new List<PersonaNaturalEntity>();

				while (dr.Read())
				{
					PersonaNaturalEntity entity = new PersonaNaturalEntity();
					if (FillFrom<PersonaNaturalEntity>(dr, entity)) EntityList.Add(entity);
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
	}
}

using Framework;
using Framework.Data;
using LogisticStorage.Common;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.DataLayer
{
    public class MerListaDB : BaseDataEntity
    {
        public virtual List<MerListaEntity> ObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_MerListaObtenerMain");
                FillSchemeTable(dr);
                List<MerListaEntity> EntityList = new List<MerListaEntity>();

                while (dr.Read())
                {
                    MerListaEntity entity = new MerListaEntity();
                    if (FillFrom<MerListaEntity>(dr, entity)) EntityList.Add(entity);
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

        public virtual bool Registrar(MerListaEntity Ent)
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

        private bool RegistrarDB(MerListaEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_MerLista_Actualizar";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_MerLista_Registrar";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);

                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_ListaId", DbType.Int32, 4, false, 0, 0, Ent.ListaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CampoId", DbType.Int32, 4, false, 0, 0, Ent.CampoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 100, false, 0, 0, Ent.Codigo);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombre", DbType.String, 100, false, 0, 0, Ent.Nombre);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Descripcion", DbType.String, 100, false, 0, 0, Ent.Descripcion);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EstadoRegistro", DbType.Boolean, 2, false, 0, 0, Ent.EstadoRegistro);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodigoTabla", DbType.String, 100, false, 0, 0, Ent.CodigoTabla);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.ListaId <= 0) Ent.ListaId = (Int32)DbDatabase.GetParameterValue("v_ListaId");
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

        public virtual List<MerListaEntity> ObtenerTitulo(String Codigo)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 50, false, 0, 0, Codigo);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MerListaObtenertitulo");
                FillSchemeTable(dr);
                List<MerListaEntity> EntityList = new List<MerListaEntity>();
                while (dr.Read())
                {
                    MerListaEntity entity = new MerListaEntity();
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

        public virtual List<MerListaEntity> BuscarItem(String Codigo, String Nombre)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 50, false, 0, 0, Codigo);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombre", DbType.String, 50, false, 0, 0, Nombre);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MerListaBuscarItem");
                FillSchemeTable(dr);
                List<MerListaEntity> EntityList = new List<MerListaEntity>();
                while (dr.Read())
                {
                    MerListaEntity entity = new MerListaEntity();
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

        public virtual List<MerListaEntity> ObtenerItem(Int32 MercaderiaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ListaId", DbType.Int32, 4, false, 0, 0, MercaderiaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MerListaObtenerItem");
                FillSchemeTable(dr);
                List<MerListaEntity> EntityList = new List<MerListaEntity>();
                while (dr.Read())
                {
                    MerListaEntity entity = new MerListaEntity();
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
    }
}

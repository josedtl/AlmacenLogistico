﻿using Framework;
using LogisticStorage.Common;
using LogisticStorage.EntityLayer;
using System.Data;

namespace LogisticStorage.DataLayer
{
    public class MercaderiaDB : BaseDataEntity
    {
        public virtual List<MercaderiaEntity> ObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_MercaderiaObtenerMain");
                FillSchemeTable(dr);
                List<MercaderiaEntity> EntityList = new List<MercaderiaEntity>();

                while (dr.Read())
                {
                    MercaderiaEntity entity = new MercaderiaEntity();
                    if (FillFrom<MercaderiaEntity>(dr, entity)) EntityList.Add(entity);
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

        public virtual bool Registrar(MercaderiaEntity Ent)
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

        public virtual List<MercaderiaEntity> Registrar(List<MercaderiaEntity> Items)
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

        private bool RegistrarDB(MercaderiaEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_Mercaderia_Actualizar";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_Mercaderia_Registrar";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);

                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 100, false, 0, 0, Ent.Codigo);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CategoriaId", DbType.Int32, 4, false, 0, 0, Ent.CategoriaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TipoProductoId", DbType.Int32, 4, false, 0, 0, Ent.TipoProductoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MarcaId", DbType.Int32, 4, false, 0, 0, Ent.MarcaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ModeloId", DbType.Int32, 4, false, 0, 0, Ent.ModeloId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombre", DbType.String, 100, false, 0, 0, Ent.Nombre);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Descripcion", DbType.String, 100, false, 0, 0, Ent.Descripcion);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UnidadMedidaId", DbType.Int32, 4, false, 0, 0, Ent.UnidadMedidaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Reserva", DbType.Decimal, 12, false, 0, 0, Ent.Reserva);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Stock", DbType.Decimal, 12, false, 0, 0, Ent.Stock);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EstadoRegistro", DbType.Boolean, 2, false, 0, 0, Ent.EstadoRegistro);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.MercaderiaId <= 0) Ent.MercaderiaId = (Int32)DbDatabase.GetParameterValue("v_MercaderiaId");
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

        public virtual List<MercaderiaEntity> ObtenerItem(Int32 MercaderiaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, MercaderiaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MercaderiaObtenerItem");
                FillSchemeTable(dr);
                List<MercaderiaEntity> EntityList = new List<MercaderiaEntity>();
                while (dr.Read())
                {
                    MercaderiaEntity entity = new MercaderiaEntity();
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
        public virtual List<MercaderiaEntity> ObtenerItemOP(Int32 MercaderiaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, MercaderiaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MercaderiaObtenerItemOP");
                FillSchemeTable(dr);
                List<MercaderiaEntity> EntityList = new List<MercaderiaEntity>();
                while (dr.Read())
                {
                    MercaderiaEntity entity = new MercaderiaEntity();
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

        public virtual List<MercaderiaEntity> BuscarCategoriaItem(String Nombre, Int32 CategoriaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombre", DbType.String, 50, false, 0, 0, Nombre);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CategoriaId", DbType.Int32, 4, false, 0, 0, CategoriaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_MercaderiaBuscarCategoriaItem");
                FillSchemeTable(dr);
                List<MercaderiaEntity> EntityList = new List<MercaderiaEntity>();
                while (dr.Read())
                {
                    MercaderiaEntity entity = new MercaderiaEntity();
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

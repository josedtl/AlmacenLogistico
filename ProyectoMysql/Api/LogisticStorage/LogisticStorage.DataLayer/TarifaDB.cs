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
    public class TarifaDB : BaseDataEntity
    {
      
        public virtual List<TarifaEntity> ObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_Tarifa_ObtenerMain");
                FillSchemeTable(dr);
                List<TarifaEntity> EntityList = new List<TarifaEntity>();

                while (dr.Read())
                {
                    TarifaEntity entity = new TarifaEntity();
                    if (FillFrom<TarifaEntity>(dr, entity)) EntityList.Add(entity);
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

        public virtual List<TarifaEntity> ObtenerItem(Int32 TarifaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TarifaId", DbType.Int32, 4, false, 0, 0, TarifaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_Tarifa_ObtenerItem");
                FillSchemeTable(dr);
                List<TarifaEntity> EntityList = new List<TarifaEntity>();
                while (dr.Read())
                {
                    TarifaEntity entity = new TarifaEntity();
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

        public virtual bool Registrar(TarifaEntity Ent)
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
        public virtual List<TarifaEntity> Registrar(List<TarifaEntity> Items)
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

        private bool RegistrarDB(TarifaEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_Tarifa_Update";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_Tarifa_Save";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);

                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_TarifaId", DbType.Int32, 4, false, 0, 0, Ent.TarifaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UnidadMedidaId", DbType.String, 100, false, 0, 0, Ent.UnidadMedidaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MonedaId", DbType.Int32, 4, false, 0, 0, Ent.MonedaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_PorcentajeImpuestoId", DbType.Int32, 4, false, 0, 0, Ent.PorcentajeImpuestoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_PrecioSinImpuesto", DbType.Int32, 4, false, 0, 0, Ent.PrecioSinImpuesto);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_PrecioConImpuesto", DbType.Int32, 4, false, 0, 0, Ent.PrecioConImpuesto);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_MercaderiaId", DbType.Int32, 4, false, 0, 0, Ent.MercaderiaId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaCreacion", DbType.DateTime, 12, false, 0, 0, Ent.FechaCreacion);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Vigente", DbType.Boolean, 2, false, 0, 0, Ent.Vigente);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.TarifaId <= 0) Ent.TarifaId = (Int32)DbDatabase.GetParameterValue("v_TarifaId");
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


    }
}

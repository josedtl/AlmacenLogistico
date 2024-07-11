using Framework;
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
    public class RecepcionDB : BaseDataEntity
    {
        public virtual List<RecepcionEntity> ObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_Recepcion_Main");
                FillSchemeTable(dr);
                List<RecepcionEntity> EntityList = new List<RecepcionEntity>();

                while (dr.Read())
                {
                    RecepcionEntity entity = new RecepcionEntity();
                    if (FillFrom<RecepcionEntity>(dr, entity)) EntityList.Add(entity);
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

        public virtual List<RecepcionEntity> ObtenerItem(Int32 RecepcionId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_RecepcionId", DbType.Int32, 4, false, 0, 0, RecepcionId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_RecepcionObtenerItem");
                FillSchemeTable(dr);
                List<RecepcionEntity> EntityList = new List<RecepcionEntity>();
                while (dr.Read())
                {
                    RecepcionEntity entity = new RecepcionEntity();
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

        public virtual bool Registrar(RecepcionEntity Ent)
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

        private bool RegistrarDB(RecepcionEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_OrdenPedido_Update";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_RecepcionRegistrar";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_RecepcionId", DbType.Int32, 4, false, 0, 0, Ent.RecepcionId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ProcesoId", DbType.Int32, 4, false, 0, 0, Ent.ProcesoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EstadoProcesoId", DbType.Int32, 4, false, 0, 0, Ent.EstadoProcesoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 100, false, 0, 0, Ent.Codigo);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EntidadId", DbType.Int32, 4, false, 0, 0, Ent.EntidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ObjetoId", DbType.Int32, 4, false, 0, 0, Ent.ObjetoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TipoComprobanteId", DbType.Int32, 4, false, 0, 0, Ent.TipoComprobanteId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_SerieComprobante", DbType.String, 50, false, 0, 0, Ent.SerieComprobante);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CorrelativoComprobante", DbType.String, 50, false, 0, 0, Ent.CorrelativoComprobante);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRecepcion", DbType.DateTime, 12, false, 0, 0, Ent.FechaRecepcion);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Observacion", DbType.String, 100, false, 0, 0, Ent.Observacion);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.RecepcionId <= 0) Ent.RecepcionId = (Int32)DbDatabase.GetParameterValue("v_RecepcionId");
                    Ent.OnLogicalAdded();
                }
                else
                {
                    if (returnValue <= 0) throw new Exception("ErrorDB.UpdateEntity");
                    Ent.OnLogicalUpdate();
                }
            }

            if (Ent.DetalleItem != null && Ent.DetalleItem.Count > 0)
            {
                RecepcionDetalleDB RecepcionDetalleDB = new RecepcionDetalleDB();
                RecepcionDetalleDB.SetHelper(Helper);

                foreach (RecepcionDetalleEntity detalle in Ent.DetalleItem)
                {
                    if (Ent.LogicalState == LogicalState.Added)
                    {
                        if (detalle.LogicalState != LogicalState.Deleted) detalle.LogicalState = LogicalState.Added;
                    }
                    detalle.RecepcionId = Ent.RecepcionId;
                    RecepcionDetalleDB.Registrar(detalle);
                }

            }


            return true;
        }
    }
}

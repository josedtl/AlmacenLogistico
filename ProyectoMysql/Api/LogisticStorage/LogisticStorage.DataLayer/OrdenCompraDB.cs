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
    public class OrdenCompraDB : BaseDataEntity
    {
        public virtual List<OrdenCompraEntity> ObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_OrdenCompraMain");
                FillSchemeTable(dr);
                List<OrdenCompraEntity> EntityList = new List<OrdenCompraEntity>();

                while (dr.Read())
                {
                    OrdenCompraEntity entity = new OrdenCompraEntity();
                    if (FillFrom<OrdenCompraEntity>(dr, entity)) EntityList.Add(entity);
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

        public virtual List<OrdenCompraEntity> ObtenerItem(Int32 OrdenCompraId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_OrdenCompraId", DbType.Int32, 4, false, 0, 0, OrdenCompraId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_OrdenCompraAllItem");
                FillSchemeTable(dr);
                List<OrdenCompraEntity> EntityList = new List<OrdenCompraEntity>();
                while (dr.Read())
                {
                    OrdenCompraEntity entity = new OrdenCompraEntity();
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

        public virtual bool Registrar(OrdenCompraEntity Ent)
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

        private bool RegistrarDB(OrdenCompraEntity Ent)
        {
            if (Ent.LogicalState == LogicalState.Added || Ent.LogicalState == LogicalState.Updated)
            {
                String storedName = "sp_OrdenCompra_Actualizar";
                if (Ent.LogicalState == LogicalState.Added) storedName = "sp_OrdenCompra_Registrar";
                DbDatabase.GetStoredProcCommand(storedName);
                DbDatabase.SetTransaction(Helper.DbTransaction);



                DbDatabase.AddParameter(MyUtils.GetOutputDirection(true), "v_OrdenCompraId", DbType.Int32, 4, false, 0, 0, Ent.OrdenCompraId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_TipoProcesoId", DbType.Int32, 4, false, 0, 0, Ent.TipoProcesoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ProcesoId", DbType.Int32, 4, false, 0, 0, Ent.ProcesoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EstadoProcesoId", DbType.Int32, 4, false, 0, 0, Ent.EstadoProcesoId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 100, false, 0, 0, Ent.Codigo);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_EntidadId", DbType.Int32, 4, false, 0, 0, Ent.EntidadId);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NumDocumentoProveedor", DbType.String, 100, false, 0, 0, Ent.NumDocumentoProveedor);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_NomProveedor", DbType.String, 20, false, 0, 0, Ent.NomProveedor);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaEmision", DbType.DateTime, 12, false, 0, 0, Ent.FechaEmision);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_FechaRegistro", DbType.DateTime, 12, false, 0, 0, Ent.FechaRegistro);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String, 20, false, 0, 0, Ent.CodUsuario);
                int returnValue = DbDatabase.ExecuteNonQuery();
                if (Ent.LogicalState == LogicalState.Added)
                {
                    if (Ent.OrdenCompraId <= 0) Ent.OrdenCompraId = (Int32)DbDatabase.GetParameterValue("v_OrdenCompraId");
                    Ent.OnLogicalAdded();
                }
                else
                {
                    if (returnValue <= 0) throw new Exception("ErrorDB.UpdateEntity");
                    Ent.OnLogicalUpdate();
                }
            }

            if (Ent.Detalles != null && Ent.Detalles.Count > 0)
            {
                OrdenCompraDetalleDB OrdenCompraDetalleDB = new OrdenCompraDetalleDB();
                OrdenCompraDetalleDB.SetHelper(Helper);

                foreach (OrdenCompraDetalleEntity detalle in Ent.Detalles)
                {
                    if (Ent.LogicalState == LogicalState.Added)
                    {
                        if (detalle.LogicalState != LogicalState.Deleted) detalle.LogicalState = LogicalState.Added;
                    }
                    detalle.OrdenCompraId = Ent.OrdenCompraId;
                    OrdenCompraDetalleDB.Registrar(detalle);
                }

            }


            return true;
        }
    }
}

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
    public class UnidadMedidaDB : BaseDataEntity
    {

        public virtual List<UnidadMedidaEntity> ObtenerItems()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_UnidadMedidaAllItems");
                FillSchemeTable(dr);
                List<UnidadMedidaEntity> EntityList = new List<UnidadMedidaEntity>();
                while (dr.Read())
                {
                    UnidadMedidaEntity entity = new UnidadMedidaEntity();
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
        public virtual List<UnidadMedidaEntity> ObtenerItem(Int32 UnidadMedidaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UnidadMedidaId", DbType.Int32, 4, false, 0, 0, UnidadMedidaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_UnidadMedidaAllItem");
                FillSchemeTable(dr);
                List<UnidadMedidaEntity> EntityList = new List<UnidadMedidaEntity>();
                while (dr.Read())
                {
                    UnidadMedidaEntity entity = new UnidadMedidaEntity();
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

        public virtual List<UnidadMedidaEntity> ObtenerDato()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_UnidadMedidaObtenerDato");
                FillSchemeTable(dr);
                List<UnidadMedidaEntity> EntityList = new List<UnidadMedidaEntity>();
                while (dr.Read())
                {
                    UnidadMedidaEntity entity = new UnidadMedidaEntity();
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

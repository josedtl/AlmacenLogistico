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
    public class RecepListaDB : BaseDataEntity
    {

        public virtual List<RecepListaEntity> ObtenerItem(Int32 ListaId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ListaId", DbType.Int32, 4, false, 0, 0, ListaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_RecepListaObtenerItem");
                FillSchemeTable(dr);
                List<RecepListaEntity> EntityList = new List<RecepListaEntity>();
                while (dr.Read())
                {
                    RecepListaEntity entity = new RecepListaEntity();
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

        public virtual List<RecepListaEntity> ObtenerItems(String Codigo)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 50, false, 0, 0, Codigo);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_RecepListaObtenerLista");
                FillSchemeTable(dr);
                List<RecepListaEntity> EntityList = new List<RecepListaEntity>();
                while (dr.Read())
                {
                    RecepListaEntity entity = new RecepListaEntity();
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

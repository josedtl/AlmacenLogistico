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
    public class ProcesoDB : BaseDataEntity
    {
        public virtual List<ProcesoEntity> ObtenerTipo(String Codigo)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Codigo", DbType.String, 10, false, 0, 0, Codigo);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_ProcesoObtenerTipo");
                FillSchemeTable(dr);
                List<ProcesoEntity> EntityList = new List<ProcesoEntity>();

                while (dr.Read())
                {
                    ProcesoEntity entity = new ProcesoEntity();
                    if (FillFrom<ProcesoEntity>(dr, entity)) EntityList.Add(entity);
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

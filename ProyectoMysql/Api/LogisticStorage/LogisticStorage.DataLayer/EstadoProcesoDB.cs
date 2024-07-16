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
    public class EstadoProcesoDB : BaseDataEntity
    {

        public virtual List<EstadoProcesoEntity> ObtenerItems()
        {
            try
            {
                StartHelper(false);
                //DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UnidadMedidaId", DbType.Int32, 4, false, 0, 0, UnidadMedidaId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_EstadoProcesoObtenerItems");
                FillSchemeTable(dr);
                List<EstadoProcesoEntity> EntityList = new List<EstadoProcesoEntity>();
                while (dr.Read())
                {
                    EstadoProcesoEntity entity = new EstadoProcesoEntity();
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

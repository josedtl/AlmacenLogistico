using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.DataLayer
{
    public class TipoEntidadDB : BaseDataEntity
    {
        public virtual List<TipoEntidadEntity> ObtenerItems()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_TipoEntidadObtenerItems");
                FillSchemeTable(dr);
                List<TipoEntidadEntity> EntityList = new List<TipoEntidadEntity>();

                while (dr.Read())
                {
                    TipoEntidadEntity entity = new TipoEntidadEntity();
                    if (FillFrom<TipoEntidadEntity>(dr, entity)) EntityList.Add(entity);
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

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
    public class DespachoDB : BaseDataEntity
    {
        public virtual List<DespachoEntity> DespachoObtenerMain()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(System.Data.CommandType.StoredProcedure, "sp_Reserva_Main");
                FillSchemeTable(dr);
                List<DespachoEntity> EntityList = new List<DespachoEntity>();

                while (dr.Read())
                {
                    DespachoEntity entity = new DespachoEntity();
                    if (FillFrom<DespachoEntity>(dr, entity)) EntityList.Add(entity);
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

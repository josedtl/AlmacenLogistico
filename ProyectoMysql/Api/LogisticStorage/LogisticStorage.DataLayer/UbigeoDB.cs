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
    public class UbigeoDB : BaseDataEntity
    {
        public virtual List<UbigeoEntity> BuscarItem(String Nombre)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Nombre", DbType.String, 50, false, 0, 0, Nombre);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_UbigeoItemLike");
                FillSchemeTable(dr);
                List<UbigeoEntity> EntityList = new List<UbigeoEntity>();
                while (dr.Read())
                {
                    UbigeoEntity entity = new UbigeoEntity();
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

        public virtual List<UbigeoEntity> ObtenerItem(Int32 UbigeoId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_UbigeoId", DbType.Int32, 4, false, 0, 0, UbigeoId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_UbigeoAllItem");
                FillSchemeTable(dr);
                List<UbigeoEntity> EntityList = new List<UbigeoEntity>();
                while (dr.Read())
                {
                    UbigeoEntity entity = new UbigeoEntity();
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

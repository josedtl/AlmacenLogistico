using Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.DataLayer
{
    public class SpaceData : BaseDataEntity
    {

        public virtual List<BaseItemList> GetDataBase()
        {
            try
            {
                StartHelper(false);
                List<BaseItemList> lista = DbDatabase.GetDataBase();

                Helper.Close();
                return lista;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}

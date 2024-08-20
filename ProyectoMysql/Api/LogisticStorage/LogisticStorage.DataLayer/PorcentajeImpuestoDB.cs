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
    public class PorcentajeImpuestoDB : BaseDataEntity
    {
        public virtual List<PorcentajeImpuestoEntity> ObtenerItems()
        {
            try
            {
                StartHelper(false);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_PorcentajeImpuestoAllItems");
                FillSchemeTable(dr);
                List<PorcentajeImpuestoEntity> EntityList = new List<PorcentajeImpuestoEntity>();
                while (dr.Read())
                {
                    PorcentajeImpuestoEntity entity = new PorcentajeImpuestoEntity();
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

        public virtual List<PorcentajeImpuestoEntity> ObtenerItem(Int32 PorcentajeImpuestoId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_PorcentajeImpuestoId", DbType.Int32, 4, false, 0, 0, PorcentajeImpuestoId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_PorcentajeImpuestoAllItem");
                FillSchemeTable(dr);
                List<PorcentajeImpuestoEntity> EntityList = new List<PorcentajeImpuestoEntity>();
                while (dr.Read())
                {
                    PorcentajeImpuestoEntity entity = new PorcentajeImpuestoEntity();
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

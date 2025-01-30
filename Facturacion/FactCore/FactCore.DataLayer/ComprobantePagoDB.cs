using FactCore.Common;
using FactCore.EntityLayer;
using System.Data;

namespace FactCore.DataLayer
{
    public class ComprobantePagoDB : BaseDataEntity
    {
        public virtual List<ComprobantePagoEntity> ObtenerItem(Int32 OrdenPedidoId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ComprobantePagoId", DbType.Int32, 4, false, 0, 0, OrdenPedidoId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_ComprobantePagoObtenerId");
                FillSchemeTable(dr);
                List<ComprobantePagoEntity> EntityList = new List<ComprobantePagoEntity>();
                while (dr.Read())
                {
                    ComprobantePagoEntity entity = new ComprobantePagoEntity();
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


        /*Obtener Comprobante por ID para la generación del archivo XML*/
        public virtual List<ComprobantePagoEntity> ObtenerComprobantePagoDatosXML(Int32 ComprobantePagoId)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_ComprobantePagoId", DbType.Int32, 4, false, 0, 0, ComprobantePagoId);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_ComprobantePagoDatosXML");
                FillSchemeTable(dr);
                List<ComprobantePagoEntity> EntityList = new List<ComprobantePagoEntity>();
                while (dr.Read())
                {
                    ComprobantePagoEntity entity = new ComprobantePagoEntity();
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

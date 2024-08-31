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
    public class UsuarioDB : BaseDataEntity
    {

      
        public virtual List<UsuarioEntity> ObtenerAcceso(String Usuario,String Contrasena)
        {
            try
            {
                StartHelper(false);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_CodUsuario", DbType.String,50, false, 0, 0, Usuario);
                DbDatabase.AddParameter(MyUtils.GetOutputDirection(false), "v_Contrasena", DbType.String, 50, false, 0, 0, Contrasena);
                IDataReader dr = (IDataReader)DbDatabase.ExecuteReader(CommandType.StoredProcedure, "sp_UsuarioObtenerAcceso");
                FillSchemeTable(dr);
                List<UsuarioEntity> EntityList = new List<UsuarioEntity>();
                while (dr.Read())
                {
                    UsuarioEntity entity = new UsuarioEntity();
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

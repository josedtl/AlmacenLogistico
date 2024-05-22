using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;

namespace LogisticStorage.BusinessLayer
{
    public class Proceso
    {
        public static List<ProcesoEntity> ObtenerTipo(String Codigo)
        {
            ProcesoDB DB = new ProcesoDB();
            return DB.ObtenerTipo(Codigo);
        }
    }
}

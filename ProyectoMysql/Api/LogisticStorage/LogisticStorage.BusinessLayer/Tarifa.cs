using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class Tarifa
    {

        public static List<TarifaEntity> ObtenerMain()
        {
            TarifaDB DB = new TarifaDB();
            return DB.ObtenerMain();
        }
        public static List<TarifaEntity> ObtenerItem(Int32 TarifaId)
        {
            TarifaDB DB = new TarifaDB();
            return DB.ObtenerItem(TarifaId);
        }

        public static Int32 Registrar(TarifaEntity Ent)
        {
            TarifaDB DB = new TarifaDB();
            DB.Registrar(Ent);
            return Ent.TarifaId;
        }

        public static List<TarifaEntity> ObtenerMoneda(Int32 MercaderiaId)
        {
            TarifaDB DB = new TarifaDB();
            return DB.ObtenerMoneda(MercaderiaId);
        }

        public static List<TarifaEntity> ObtenerUnidadMedidaPrecio(Int32 MercaderiaId, Int32 MonedaId)
        {
            TarifaDB DB = new TarifaDB();
            return DB.ObtenerUnidadMedidaPrecio(MercaderiaId, MonedaId);
        }
    }
}

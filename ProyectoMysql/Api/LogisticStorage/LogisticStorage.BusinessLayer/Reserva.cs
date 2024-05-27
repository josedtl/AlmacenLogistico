using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class Reserva
    {
        public static List<ReservaEntity> GetMercaderiaMainItems()
        {
            ReservaDB DB = new ReservaDB();
            return DB.GetMercaderiaMainItems();
        }
        public static Int32 ReservarMercaderia(ReservaEntity Ent)
        {
            ReservaDB DB = new ReservaDB();
            DB.ReservarMercaderia(Ent);

            return Ent.MercaderiaId;
        }
        public static List<ReservaEntity> ReservaPedido(Int32 MercaderiaId)
        {
            ReservaDB DB = new ReservaDB();
            return DB.ReservaPedido(MercaderiaId);
        }
        public static List<ReservaEntity> ReservaResumen(Int32 MercaderiaId)
        {
            ReservaDB DB = new ReservaDB();
            return DB.ReservaResumen(MercaderiaId);
        }
    }
}

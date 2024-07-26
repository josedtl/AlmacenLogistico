using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class Despacho
    {
        public static List<DespachoEntity> DespachoObtenerMain()
        {
            DespachoDB DB = new DespachoDB();
            return DB.DespachoObtenerMain();
        }
        public static List<DespachoEntity> ObtenerCabecera(Int32 OrdenPedidoId)
        {
            DespachoDB DB = new DespachoDB();

            return DB.ObtenerCabecera(OrdenPedidoId);
        }
    }
}

using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class OrdenPedido
    {

        public static List<OrdenPedidoEntity> ObtenerMain()
        {
            OrdenPedidoDB DB = new OrdenPedidoDB();
            return DB.ObtenerMain();
        }
        public static List<OrdenPedidoEntity> ObtenerItem(Int32 EmpresaId)
        {
            OrdenPedidoDB DB = new OrdenPedidoDB();
            return DB.ObtenerItem(EmpresaId);
        }
        public static Int32 Registrar(OrdenPedidoEntity Ent)
        {
            OrdenPedidoDB DB = new OrdenPedidoDB();
            DB.Registrar(Ent);

            return Ent.OrdenPedidoId;
        }
    }
}

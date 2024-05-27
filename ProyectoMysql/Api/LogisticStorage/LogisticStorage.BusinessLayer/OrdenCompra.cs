using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class OrdenCompra
    {
        public static List<OrdenCompraEntity> ObtenerMain()
        {
            OrdenCompraDB DB = new OrdenCompraDB();
            return DB.ObtenerMain();
        }
        public static List<OrdenCompraEntity> ObtenerItem(Int32 EmpresaId)
        {
            OrdenCompraDB DB = new OrdenCompraDB();
            return DB.ObtenerItem(EmpresaId);
        }
        public static Int32 Registrar(OrdenCompraEntity Ent)
        {
            OrdenCompraDB DB = new OrdenCompraDB();
            DB.Registrar(Ent);

            return Ent.OrdenCompraId;
        }
    }
}

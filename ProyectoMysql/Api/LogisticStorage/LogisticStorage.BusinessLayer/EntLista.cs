using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class EntLista
    {
  
        public static Int32 Registrar(EntListaEntity Ent)
        {
            EntListaDB DB = new EntListaDB();
            DB.Registrar(Ent);
            return Ent.ListaId;
        }
    
        public static List<EntListaEntity> BuscarItem(String Codigo, String Nombre)
        {
            EntListaDB DB = new EntListaDB();
            return DB.BuscarItem(Codigo, Nombre);
        }
    
        public static List<EntListaEntity> ObtenerItem(Int32 ListaId)
        {
            EntListaDB DB = new EntListaDB();
            return DB.ObtenerItem(ListaId);
        }

        public static List<EntListaEntity> ObtenerItems(String Codigo)
        {
            EntListaDB DB = new EntListaDB();
            return DB.ObtenerItems(Codigo);
        }
    }
}

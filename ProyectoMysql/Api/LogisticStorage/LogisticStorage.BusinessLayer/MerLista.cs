using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class MerLista
    {
        public static List<MerListaEntity> ObtenerMain()
        {
            MerListaDB DB = new MerListaDB();
            return DB.ObtenerMain();
        }
        public static Int32 Registrar(MerListaEntity Ent)
        {
            MerListaDB DB = new MerListaDB();
            DB.Registrar(Ent);
            return Ent.ListaId;
        }
        public static List<MerListaEntity> ObtenerTitulo(String Codigo)
        {
            MerListaDB DB = new MerListaDB();
            return DB.ObtenerTitulo(Codigo);
        }

        public static List<MerListaEntity> BuscarItem(String Codigo, String Nombre)
        {
            MerListaDB DB = new MerListaDB();
            return DB.BuscarItem(Codigo, Nombre);
        }
        public static List<MerListaEntity> ObtenerItem(Int32 MercaderiaId)
        {
            MerListaDB DB = new MerListaDB();
            return DB.ObtenerItem(MercaderiaId);
        }
    }
}

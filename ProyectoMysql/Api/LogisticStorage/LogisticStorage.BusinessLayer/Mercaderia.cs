﻿using Framework;
using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class Mercaderia
    {

        public static List<MercaderiaEntity> ObtenerMain()
        {
            MercaderiaDB DB = new MercaderiaDB();
            return DB.ObtenerMain();
        }
        public static Int32 Registrar(MercaderiaEntity Ent)
        {
            MercaderiaDB DB = new MercaderiaDB();
            DB.Registrar(Ent);
            return Ent.MercaderiaId;
        }
        public static List<MercaderiaEntity> ObtenerItem(Int32 MercaderiaId)
        {
            MercaderiaDB DB = new MercaderiaDB();
            return DB.ObtenerItem(MercaderiaId);
        }

        public static List<MercaderiaEntity> ObtenerItemOP(Int32 MercaderiaId)
        {
            MercaderiaDB DB = new MercaderiaDB();
            return DB.ObtenerItemOP(MercaderiaId);
        }
        public static List<MercaderiaEntity> BuscarCategoriaItem(String Nombre, Int32 CategoriaId)
        {
            MercaderiaDB DB = new MercaderiaDB();
            return DB.BuscarCategoriaItem(Nombre, CategoriaId);
        }
    }
}
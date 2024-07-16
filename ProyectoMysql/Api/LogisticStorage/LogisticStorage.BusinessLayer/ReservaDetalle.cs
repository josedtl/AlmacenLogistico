using LogisticStorage.DataLayer;
using LogisticStorage.EntityLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.BusinessLayer
{
    public class ReservaDetalle
    {

        public static List<ReservaDetalleEntity> ReservaLista(List<ReservaDetalleEntity> LineaNaviera)
        {
            try
            {
                ReservaDetalleDB row = new ReservaDetalleDB();
                return row.ReservaLista(LineaNaviera);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

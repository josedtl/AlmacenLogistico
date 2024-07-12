using DemoPrueba.Entidades;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoPrueba
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Redondeo();

        }




        public static void Redondeo()
        {

            double Monto = 100;
            double Igv = 1.18;
            double Total = Monto / Igv;

            // Redondear a dos decimales
            double roundedToTwoDecimals = Math.Round(Total, 2);
            Console.WriteLine("Redondeado a dos decimales: " + roundedToTwoDecimals);

            // Redondear al número entero más cercano
            int roundedToNearestInteger = (int)Math.Round(Total);
            Console.WriteLine("Redondeado al número entero más cercano: " + roundedToNearestInteger);
        }
    }
}

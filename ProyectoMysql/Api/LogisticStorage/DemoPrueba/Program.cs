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
  

            AulaEntity m_3B = new AulaEntity();
            m_3B.AulaId =Guid.NewGuid();
            m_3B.Grado = "3"; 
            m_3B.Seccion= "B";


            AlumnoEntity Alu_01 = new AlumnoEntity();
            Alu_01.AlumnoId = Guid.NewGuid();
            Alu_01.Nombres = "Ruth";
            Alu_01.Apellidos = "Timo tasayco";
            Alu_01.Edad = 17;


            m_3B.Detalle_Alumnos.Add(Alu_01);


            AlumnoEntity Alu_02 = new AlumnoEntity();
            Alu_02.AlumnoId = Guid.NewGuid();
            Alu_02.Nombres = "David";
            Alu_02.Apellidos = "Timo Lugo";
            Alu_02.Edad = 19;


            m_3B.Detalle_Alumnos.Add(Alu_02);


            AlumnoEntity Alu_03 = new AlumnoEntity();
            Alu_03.AlumnoId = Guid.NewGuid();
            Alu_03.Nombres = "jose";
            Alu_03.Apellidos = "carrasco lopez";
            Alu_03.Edad = 25;


            m_3B.Detalle_Alumnos.Add(Alu_03);

            string jsonString = JsonConvert.SerializeObject(m_3B);







            var data = JsonConvert.DeserializeObject<AulaEntity>(jsonString);

            //ASIGNAR ID

            foreach (AlumnoEntity item in data.Detalle_Alumnos)
            {
                item.AulaId = data.AulaId;
            }


        }




        public void Redondeo()
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

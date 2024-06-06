using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoPrueba.Entidades
{
    public class AlumnoEntity
    {
        public AlumnoEntity()
        {
            Nombres = "";
            Apellidos = "";
            Edad = 0;
        }
        public Guid AlumnoId { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public int Edad { get; set; }
        public Guid AulaId { get; set; }
    }
}

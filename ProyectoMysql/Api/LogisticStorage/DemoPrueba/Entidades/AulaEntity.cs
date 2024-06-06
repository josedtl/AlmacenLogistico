using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoPrueba.Entidades
{
    public class AulaEntity
    {
        public AulaEntity()
        {
            Grado = "";
            Seccion = "";
            Detalle_Alumnos = new List<AlumnoEntity>();
        }

        public Guid AulaId { get; set; }
        public string Grado { get; set; }
        public string Seccion { get; set; }
        public List<AlumnoEntity> Detalle_Alumnos { get; set; }

    }
}

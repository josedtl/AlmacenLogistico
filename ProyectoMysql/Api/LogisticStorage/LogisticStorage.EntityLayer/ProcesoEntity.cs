using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class ProcesoEntity: BaseEntityObject
    {

        public ProcesoEntity()
        {
            this.ProcesoId = 0;
            this.ModuloSistemaId = 0;
            this.TipoProcesoId = 0;
            this.Nombre = String.Empty;
            this.Descripcion = String.Empty;
            this.EsPordefecto = false;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.EstadoRegistro = false;
        }


        public Int32 ProcesoId { get; set; }
        public Int32 ModuloSistemaId { get; set; }
        public Int32 TipoProcesoId { get; set; }
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public Boolean EsPordefecto { get; set; }
        public DateTime FechaRegistro { get; set; }
        public String CodUsuario { get; set; }
        public Boolean EstadoRegistro { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public class EmtidadEntity : BaseEntityObject
    {
        public EmtidadEntity()
        {
            this.TipoDocumentoIdentidadId = 0;
            this.NumDocumento = String.Empty;
            this.Nombre = String.Empty;
            this.ApellidoPaterno = String.Empty;
            this.ApellidoMaterno = String.Empty;
            this.FechaNacimiento = DateTime.MinValue;
            this.SexoId = 0;
            this.EstadoCivilId = 0;
            this.Telefono = String.Empty;
            this.Correo = String.Empty;
            this.FechaRegistro = DateTime.MinValue;
            this.CodUsuario = String.Empty;
            this.EstadoRegistro = false;
            this.UbigeoId = 0;
            this.Direccion = String.Empty;
            this.NombreCompleto = String.Empty;
            this.NombreComercial = String.Empty;
        }

        public Int32 TipoDocumentoIdentidadId { get; set; }
        public String NumDocumento { get; set; }
        public String Nombre { get; set; }
        public String ApellidoPaterno { get; set; }
        public String ApellidoMaterno { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public Int32 SexoId { get; set; }
        public Int32 EstadoCivilId { get; set; }
        public String Telefono { get; set; }
        public String Correo { get; set; }
        public DateTime FechaRegistro { get; set; }
        public String CodUsuario { get; set; }
        public Boolean EstadoRegistro { get; set; }
        public Int32 UbigeoId { get; set; }
        public String Direccion { get; set; }
        public String NombreCompleto { get; set; }
        public String NombreComercial { get; set; }

    }
}

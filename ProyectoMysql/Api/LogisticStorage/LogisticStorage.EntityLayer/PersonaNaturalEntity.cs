using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class PersonaNaturalEntity : BaseEntityObject
    {

        public PersonaNaturalEntity()
        {
            PersonaNaturalId = GetInt32Default();
            Nombres = GetStringDefault();
            ApellidoPaterno = GetStringDefault();
            ApellidoMaterno = GetStringDefault();
            FechaNacimiento = DateTime.Now;
            Direccion = GetStringDefault();
            Telefono = GetStringDefault();
            Correo = GetStringDefault();
            SexoId = GetInt32Default();
            EstadoCivilId = GetInt32Default();
            TipoDocumentoIdentidadId = GetInt32Default();
            NumDocumento = GetStringDefault();
            UbigeoId = GetInt32Default();
            FechaRegistro = DateTime.Now;
            CodUsuario = GetStringDefault();
			EstadoRegistro =GetBooleanDefault();

		}

        public Int32 PersonaNaturalId { get; set; }
        public Int32 TipoDocumentoIdentidadId { get; set; }
        public String NumDocumento { get; set; }
        public String Nombres { get; set; }
        public String ApellidoPaterno { get; set; }
        public String ApellidoMaterno { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public Int32 UbigeoId { get; set; }
        public String Direccion { get; set; }
        public String Telefono { get; set; }
        public String Correo { get; set; }
        public Int32 SexoId { get; set; }
        public Int32 EstadoCivilId { get; set; }
        public String CodUsuario { get; set; }
        public DateTime FechaRegistro { get; set; }
		public Boolean EstadoRegistro { get; set; }

	}
}

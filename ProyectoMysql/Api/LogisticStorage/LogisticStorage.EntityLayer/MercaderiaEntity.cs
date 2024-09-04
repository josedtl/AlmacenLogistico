using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LogisticStorage.EntityLayer
{
    public partial class MercaderiaEntity : BaseEntityObject
    {

        public MercaderiaEntity()
        {
            MercaderiaId = GetInt32Default();
            Codigo = GetStringDefault();
            CategoriaId = GetInt32Default();
            TipoProductoId = GetInt32Default();
            MarcaId = GetInt32Default();
            ModeloId = GetInt32Default();
            Nombre = GetStringDefault();
            Descripcion = GetStringDefault();
            UnidadMedidaId = GetInt32Default();
            Reserva = GetDecimalDefault();
            Stock = GetDecimalDefault();
            FechaRegistro = DateTime.Now;
            CodUsuario = GetStringDefault();
			EstadoRegistro =GetBooleanDefault();
            DetalleItem = new List<MercaderiaPresentacionEntity>();

        }
        public Int32 MercaderiaId { get; set; }
        public String Codigo { get; set; }
        public Int32 CategoriaId { get; set; }
        public Int32 TipoProductoId { get; set; }
        public Int32 MarcaId { get; set; }
        public Int32 ModeloId { get; set; }
        public String Nombre { get; set; }
        public String Descripcion { get; set; }
        public Int32 UnidadMedidaId { get; set; }
        public Decimal Reserva { get; set; }
        public Decimal Stock { get; set; }
        public DateTime FechaRegistro { get; set; }
        public String CodUsuario { get; set; }
        public Boolean EstadoRegistro { get; set; }
        public List<MercaderiaPresentacionEntity> DetalleItem { get; set; }
    }
}

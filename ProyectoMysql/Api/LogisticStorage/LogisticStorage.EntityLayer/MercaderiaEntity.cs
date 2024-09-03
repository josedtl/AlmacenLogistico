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
            this.MercaderiaId = GetInt32Default();
            this.Codigo = GetStringDefault();
            this.CategoriaId = GetInt32Default();
            this.TipoProductoId = GetInt32Default();
            this.MarcaId = GetInt32Default();
            this.ModeloId = GetInt32Default();
            this.Nombre = GetStringDefault();
            this.Descripcion = GetStringDefault();
            this.UnidadMedidaId = GetInt32Default();
            this.Reserva = GetDecimalDefault();
            this.Stock = GetDecimalDefault();
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = GetStringDefault();
            this.EstadoRegistro = GetBooleanDefault();
            this.DetalleItems = new List<MercaderiaPresentacionEntity>();

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
        public List<MercaderiaPresentacionEntity> DetalleItems { get; set; }


    }
}

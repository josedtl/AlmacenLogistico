using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class MercaderiaSaveModel
    {
        public MercaderiaSaveModel()
        {
            this.MercaderiaId = 0;
            this.Codigo = String.Empty;
            this.CategoriaId = 0;
            this.TipoProductoId = 0;
            this.MarcaId = 0;
            this.ModeloId = 0;
            this.Nombre = String.Empty;
            this.Descripcion = String.Empty;
            this.UnidadMedidaId = 0;
            this.Reserva = 0;
            this.Stock = 0;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.EstadoRegistro = false;
            this.Action = 0;
            this.DetalleItems = new List<MercaderiaPresentacionModel>();
        }

        public MercaderiaSaveModel(MercaderiaEntity Item)
        {
            this.MercaderiaId = Item.MercaderiaId;
            this.Codigo = Item.Codigo;
            this.CategoriaId = Item.CategoriaId;
            this.TipoProductoId = Item.TipoProductoId;
            this.MarcaId = Item.MarcaId;
            this.ModeloId = Item.ModeloId;
            this.Nombre = Item.Nombre;
            this.Descripcion = Item.Descripcion;
            this.UnidadMedidaId = Item.UnidadMedidaId;
            this.Reserva = Item.Reserva;
            this.Stock = Item.Stock;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.EstadoRegistro = Item.EstadoRegistro;
        }
        [JsonPropertyName("MercaderiaId")] public int MercaderiaId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("CategoriaId")] public int CategoriaId { get; set; }
        [JsonPropertyName("TipoProductoId")] public int TipoProductoId { get; set; }
        [JsonPropertyName("MarcaId")] public int MarcaId { get; set; }
        [JsonPropertyName("ModeloId")] public int ModeloId { get; set; }
        [JsonPropertyName("Nombre")] public String Nombre { get; set; }
        [JsonPropertyName("Descripcion")] public String Descripcion { get; set; }
        [JsonPropertyName("UnidadMedidaId")] public int UnidadMedidaId { get; set; }
        [JsonPropertyName("Reserva")] public Decimal Reserva { get; set; }
        [JsonPropertyName("Stock")] public Decimal Stock { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("CodUsuario")] public String CodUsuario { get; set; }
        [JsonPropertyName("EstadoRegistro")] public bool EstadoRegistro { get; set; }
        [JsonPropertyName("Action")] public Int16 Action { get; set; }

        [JsonPropertyName("DetalleItems")] public List<MercaderiaPresentacionModel> DetalleItems { get; set; }
    }
}

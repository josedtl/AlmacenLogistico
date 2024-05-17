using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server
{
    public class MercaderiaMainModel
    {
        public MercaderiaMainModel()
        {
            this.MercaderiaId = 0;
            this.Codigo = String.Empty;
            this.NomCategoria = String.Empty;
            this.NomTipoProducto = String.Empty;
            this.NomMarca = String.Empty;
            this.NomModelo = String.Empty;
            this.Descripcion = String.Empty;
            this.NomUnidadMedida = String.Empty;
            this.FechaRegistro = DateTime.Now;
            this.CodUsuario = String.Empty;
            this.EstadoRegistro = false;
        }

        public MercaderiaMainModel(MercaderiaEntity Item)
        {
            this.MercaderiaId = Item.MercaderiaId;
            this.Codigo = Item.Codigo;
            this.NomCategoria = Item.NomCategoria;
            this.NomTipoProducto = Item.NomTipoProducto;
            this.NomMarca = Item.NomMarca;
            this.NomModelo = Item.NomModelo;
            this.Descripcion = Item.Descripcion;
            this.NomUnidadMedida = Item.NomUnidadMedida;
            this.FechaRegistro = Item.FechaRegistro;
            this.CodUsuario = Item.CodUsuario;
            this.EstadoRegistro = Item.EstadoRegistro;
        }

        [JsonPropertyName("MercaderiaId")] public int MercaderiaId { get; set; }
        [JsonPropertyName("Codigo")] public String Codigo { get; set; }
        [JsonPropertyName("NomCategoria")] public String NomCategoria { get; set; }
        [JsonPropertyName("NomTipoProducto")] public String NomTipoProducto { get; set; }
        [JsonPropertyName("NomMarca")] public String NomMarca { get; set; }
        [JsonPropertyName("NomModelo")] public String NomModelo { get; set; }
        [JsonPropertyName("Descripcion")] public String Descripcion { get; set; }
        [JsonPropertyName("NomUnidadMedida")] public String NomUnidadMedida { get; set; }
        [JsonPropertyName("FechaRegistro")] public DateTime FechaRegistro { get; set; }
        [JsonPropertyName("CodUsuario")] public String CodUsuario { get; set; }
        [JsonPropertyName("EstadoRegistro")] public Boolean EstadoRegistro { get; set; }
    }
}

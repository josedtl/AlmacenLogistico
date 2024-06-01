using LogisticStorage.EntityLayer;
using System.Text.Json.Serialization;

namespace LogisticStorage.Server.Model.General
{
    public class TipoEntidadModel
    {
        public TipoEntidadModel()
        {
            this.TipoEntidadId = 0;
            this.Codigo = String.Empty;
            this.Nombre = String.Empty;
        }
        public TipoEntidadModel( TipoEntidadEntity Ent)
        {
            this.TipoEntidadId = Ent.TipoEntidadId;
            this.Codigo = Ent.Codigo;
            this.Nombre = Ent.Nombre;
        }

        [JsonPropertyName("TipoEntidadId")]
        public Int32 TipoEntidadId { get; set; }
        [JsonPropertyName("Codigo")]
        public string Codigo { get; set; }
        [JsonPropertyName("Nombre")]
        public string Nombre { get; set; }
    }
}

using LogisticStorage.EntityLayer;

namespace LogisticStorage.Server.Model.Despacho
{
    public class DespachoMainModel
    {
        public DespachoMainModel(DespachoEntity ent)
        {
            OrdenPedidoId = ent.OrdenPedidoId;
            Codigo = ent.Codigo;
            Nombre = ent.Nombre;
            NombreCompleto = ent.NombreCompleto;
            Documento = ent.Documento;
            FechaRegistro = DateTime.Now;
        }

        public DespachoMainModel()
        {
            OrdenPedidoId = 0;
            Codigo = "";
            Nombre = "";
            NombreCompleto = "";
            Documento = "";
            FechaRegistro = DateTime.Now;
        }
        public Int32 OrdenPedidoId { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public string NombreCompleto { get; set; }
        public string Documento { get; set; }
        public DateTime FechaRegistro { get; set; }
    }
}

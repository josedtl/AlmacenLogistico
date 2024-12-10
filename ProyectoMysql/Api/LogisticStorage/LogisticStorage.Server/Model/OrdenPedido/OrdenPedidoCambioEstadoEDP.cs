namespace LogisticStorage.Server
{
    public class OrdenPedidoCambioEstadoEDP
    {
        public OrdenPedidoCambioEstadoEDP()
        {
            this.OrdenPedidoId = 0;
            this.EstadoProcesoId = 0;
        }

        public Int32 OrdenPedidoId { get; set; }
        public Int32 EstadoProcesoId { get; set; }

    }
}

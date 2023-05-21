
class OrdenPedidoDetalleEntity:
    OrdenPedidoDetalleId: int
    OrdenPedidoId: int
    ProductoId: int
    TipoRequerimientoId: int
    CantidadRequerida: float
    CantidadFaltante: float
    CantidadAtentida: float
    FlaAtendido: bool

    def Cargar(_DB: any):
        c = OrdenPedidoDetalleEntity()
        c.OrdenPedidoDetalleId = _DB["OrdenPedidoDetalleId"]
        c.OrdenPedidoId = _DB["OrdenPedidoId"]
        c.ProductoId = _DB['ProductoId']
        c.TipoRequerimientoId = _DB['TipoRequerimientoId']
        c.CantidadRequerida = _DB['CantidadRequerida']
        c.CantidadFaltante = _DB['CantidadFaltante']
        c.CantidadAtentida =  _DB['CantidadAtentida']
        c.FlaAtendido = bool(_DB['FlaAtendido'])
        return c

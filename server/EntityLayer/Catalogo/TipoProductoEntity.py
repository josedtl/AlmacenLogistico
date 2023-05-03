from datetime import datetime

class TipoProductoEntity:
    TipoProductoId: int
    Nombre :str
    FechaRegistro:  datetime
    CodUsuario : str
    Estado: bool


    def Cargar(_DB: any):
        c = TipoProductoEntity()
        c.TipoProductoId = _DB['TipoProductoId']
        c.Nombre = _DB['Nombre']
        # c.FechaRegistro = _DB['FechaRegistro']
        # c.CodUsuario = _DB['CodUsuario']
        # c.Estado = bool(_DB['Estado'])
        return c

 
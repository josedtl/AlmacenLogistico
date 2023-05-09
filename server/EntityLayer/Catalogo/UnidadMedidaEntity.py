from datetime import datetime

class UnidadMedidaEntity:
    UnidadMedidaId :int	
    CodigoComercial	:str
    CodigoAdministrativo:str
    Nombre	:str
    FechaRegistro:  datetime
    CodUsuario : str
    Estado: bool

    def Cargar(_DB: any):
        c = UnidadMedidaEntity()
        c.UnidadMedidaId = _DB['UnidadMedidaId']
        c.Nombre = _DB['Nombre']
        # c.FechaRegistro = _DB['FechaRegistro']
        # c.CodUsuario = _DB['CodUsuario']
        # c.Estado = bool(_DB['Estado'])
        return c

 
from datetime import datetime

class ModeloEntity:
    ModeloId: int
    Nombre :str
    FechaRegistro:  datetime
    CodUsuario : str
    Estado: bool


    def Cargar(_DB: any):
        c = ModeloEntity()
        c.ModeloId = _DB['ModeloId']
        c.Nombre = _DB['Nombre']
        # c.FechaRegistro = _DB['FechaRegistro']
        # c.CodUsuario = _DB['CodUsuario']
        # c.Estado = bool(_DB['Estado'])
        return c

 
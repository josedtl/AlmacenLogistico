import datetime 

class MarcaEntity:
    MarcaId: int
    Nombre :str
    FechaRegistro:  datetime
    CodUsuario : str
    Estado: bool


    def Cargar(_DB: any):
        c = MarcaEntity()
        c.MarcaId = _DB['MarcaId']
        c.Nombre = _DB['Nombre']
        c.FechaRegistro = _DB['FechaRegistro']
        c.CodUsuario = _DB['CodUsuario']
        c.Estado = bool(_DB['Estado'])
        return c

 
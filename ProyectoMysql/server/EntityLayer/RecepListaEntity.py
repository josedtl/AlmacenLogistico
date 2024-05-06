

class RecepListaEntity:
    ListaId: int 
    Nombre: str 

    def Cargar(_DB):
        c =  RecepListaEntity()
        c.ListaId = _DB["ListaId"] 
        c.Nombre = _DB["Nombre"] 
        return c



class EntListaEntity:
    ListaId: int 
    Nombre: str 

    def Cargar(_DB):
        c =  EntListaEntity()
        c.ListaId = _DB["ListaId"] 
        c.Nombre = _DB["Nombre"] 
        return c

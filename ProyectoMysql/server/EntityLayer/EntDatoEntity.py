

class EntDatoItemLikeModel:
    EntidadId: int 
    Nombre: str 
    def Cargar(_DB):
        c =  EntDatoItemLikeModel()
        c.EntidadId = _DB["EntidadId"] 
        c.Nombre = _DB["Nombre"] 
        return c


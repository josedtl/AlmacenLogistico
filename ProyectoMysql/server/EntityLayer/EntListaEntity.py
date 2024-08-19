from pydantic import BaseModel

class EntListaItemModel(BaseModel):
    ListaId: int 
    CampoId: int 
    Nombre: str 
    Codigo: str 
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
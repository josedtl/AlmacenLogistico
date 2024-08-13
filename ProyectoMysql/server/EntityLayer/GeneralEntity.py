
from pydantic import BaseModel

class EntidadNombreCompletoModel(BaseModel):
    EntidadId: int = 0
    Nombres: str = ''
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

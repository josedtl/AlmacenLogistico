from pydantic import BaseModel

class HorarioPrueba(BaseModel):
    HorarioId: int
    Nombre: str

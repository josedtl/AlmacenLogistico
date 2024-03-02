from pydantic import BaseModel


class EntidadLikeModel(BaseModel):
    Valor1: str = ""
    Valor2: str = ""
    ValorInt1: int = ""


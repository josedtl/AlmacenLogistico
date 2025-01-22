from pydantic import BaseModel


class UsuarioModel(BaseModel):
    username: str = ''
    password: str = ''

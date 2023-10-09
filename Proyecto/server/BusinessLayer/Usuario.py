from DataLayer.UsuarioDB import *
from EntityLayer.UsuarioEntity import *


class Usuario:
    def Save(Ent: UsuarioSaveModel):
        try:
            return UsuarioDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return UsuarioDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return UsuarioDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return UsuarioDB.Delete(Id)
        except Exception as e:
            print(e)
    

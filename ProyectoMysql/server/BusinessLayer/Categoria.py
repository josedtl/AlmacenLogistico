from DataLayer.CategoriaDB import *
from EntityLayer.CategoriaEntity import *


class Categoria:
    def Save(Ent: CategoriaSaveModel):
        try:
            return CategoriaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return CategoriaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return CategoriaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return CategoriaDB.Delete(Id)
        except Exception as e:
            print(e)
    
    def GetItemLike(Nombre: str):
        try:
            return CategoriaDB.GetItemLike(Nombre)
        except Exception as e:
            print(e)
    
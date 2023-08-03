from DataLayer.CategoriaDB import *
from EntityLayer.CategoriaEntity import *
import json


class Categoria:
    def Save(Ent: CategoriaEntity):
        try:
            return CategoriaDB.Save(Ent)
        except Exception as e:
            print(e)

    def GetMainItems():
        try:
            return CategoriaDB.GetMainItems()
        except Exception as e:
            print(e)

    def Delete(Id: int):
        try:
            return CategoriaDB.Delete(Id)
        except Exception as e:
            print(e)

    def GetCategoriaLikeItems(Nombre :str):
        try:
            return CategoriaDB.GetCategoriaLikeItems(Nombre)
        except Exception as e:
            print(e)
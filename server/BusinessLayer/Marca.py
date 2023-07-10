from DataLayer.MarcaDB import *
from EntityLayer.MarcaEntity import *
import json


class Marca:
    def Save(Ent: MarcaEntity):
        try:
            return MarcaDB.Save(Ent)
        except Exception as e:
            print(e)

    def GetMainItems():
        try:
            return MarcaDB.GetMainItems()
        except Exception as e:
            print(e)

    def Delete(Id: int):
        try:
            return MarcaDB.Delete(Id)
        except Exception as e:
            print(e)
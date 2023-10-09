from DataLayer.UbigeoDB import *
from EntityLayer.UbigeoEntity import *


class Ubigeo:
    def Save(Ent: UbigeoSaveModel):
        try:
            return UbigeoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return UbigeoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return UbigeoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return UbigeoDB.Delete(Id)
        except Exception as e:
            print(e)
    

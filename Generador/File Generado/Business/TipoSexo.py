from DataLayer.TipoSexoDB import *
from EntityLayer.TipoSexoEntity import *


class TipoSexo:
    def Save(Ent: TipoSexoSaveModel):
        try:
            return TipoSexoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return TipoSexoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return TipoSexoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return TipoSexoDB.Delete(Id)
        except Exception as e:
            print(e)
    

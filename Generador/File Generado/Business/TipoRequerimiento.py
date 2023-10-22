from DataLayer.TipoRequerimientoDB import *
from EntityLayer.TipoRequerimientoEntity import *


class TipoRequerimiento:
    def Save(Ent: TipoRequerimientoSaveModel):
        try:
            return TipoRequerimientoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return TipoRequerimientoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return TipoRequerimientoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return TipoRequerimientoDB.Delete(Id)
        except Exception as e:
            print(e)
    

from DataLayer.ProcesoSecuenciaDB import *
from EntityLayer.ProcesoSecuenciaEntity import *


class ProcesoSecuencia:
    def Save(Ent: ProcesoSecuenciaSaveModel):
        try:
            return ProcesoSecuenciaDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ProcesoSecuenciaDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ProcesoSecuenciaDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ProcesoSecuenciaDB.Delete(Id)
        except Exception as e:
            print(e)
    

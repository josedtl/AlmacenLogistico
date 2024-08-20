from DataLayer.TipoEntidadDB import *
from EntityLayer.TipoProcesoEntity import *


class TipoProceso:
    def Save(Ent: TipoProcesoSaveModel):
        try:
            return TipoProcesoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return TipoProcesoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return TipoProcesoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return TipoProcesoDB.Delete(Id)
        except Exception as e:
            print(e)
    

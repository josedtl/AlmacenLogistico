from DataLayer.ProcesoDB import *
from EntityLayer.ProcesoEntity import *


class Proceso:
    def Save(Ent: ProcesoSaveModel):
        try:
            return ProcesoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return ProcesoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return ProcesoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return ProcesoDB.Delete(Id)
        except Exception as e:
            print(e)
    
    def ObtenerTipo(Codigo: str):
        try:
            return ProcesoDB.ObtenerTipo(Codigo)
        except Exception as e:
            print(e)
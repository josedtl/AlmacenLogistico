from DataLayer.EstadoProcesoDB import *
from EntityLayer.EstadoProcesoEntity import *


class EstadoProceso:
    def Save(Ent: EstadoProcesoSaveModel):
        try:
            return EstadoProcesoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return EstadoProcesoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return EstadoProcesoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return EstadoProcesoDB.Delete(Id)
        except Exception as e:
            print(e)
    

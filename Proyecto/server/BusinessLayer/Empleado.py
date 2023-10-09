from DataLayer.EmpleadoDB import *
from EntityLayer.EmpleadoEntity import *


class Empleado:
    def Save(Ent: EmpleadoSaveModel):
        try:
            return EmpleadoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return EmpleadoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return EmpleadoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return EmpleadoDB.Delete(Id)
        except Exception as e:
            print(e)
    

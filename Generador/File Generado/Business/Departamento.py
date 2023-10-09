from DataLayer.DepartamentoDB import *
from EntityLayer.DepartamentoEntity import *


class Departamento:
    def Save(Ent: DepartamentoSaveModel):
        try:
            return DepartamentoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return DepartamentoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return DepartamentoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return DepartamentoDB.Delete(Id)
        except Exception as e:
            print(e)
    

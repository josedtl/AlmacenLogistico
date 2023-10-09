from DataLayer.TipoDocumentoentidadDB import *
from EntityLayer.TipoDocumentoentidadEntity import *


class TipoDocumentoentidad:
    def Save(Ent: TipoDocumentoentidadSaveModel):
        try:
            return TipoDocumentoentidadDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return TipoDocumentoentidadDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return TipoDocumentoentidadDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return TipoDocumentoentidadDB.Delete(Id)
        except Exception as e:
            print(e)
    

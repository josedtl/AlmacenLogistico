from DataLayer.TipoDocumentoIdentidadDB import *
from EntityLayer.TipoDocumentoIdentidadEntity import *


class TipoDocumentoIdentidad:
    def Save(Ent: TipoDocumentoIdentidadSaveModel):
        try:
            return TipoDocumentoIdentidadDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return TipoDocumentoIdentidadDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return TipoDocumentoIdentidadDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return TipoDocumentoIdentidadDB.Delete(Id)
        except Exception as e:
            print(e)
    

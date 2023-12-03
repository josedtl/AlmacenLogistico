from DataLayer.TipoDocumentoDB import *
from EntityLayer.TipoDocumentoEntity import *


class TipoDocumento:
    def Save(Ent: TipoDocumentoSaveModel):
        try:
            return TipoDocumentoDB.Save(Ent)
        except Exception as e:
            print(e)
    
    def GetItems():
        try:
            return TipoDocumentoDB.GetItems()
        except Exception as e:
            print(e)
    
    def GetItem(Id: int):
        try:
            return TipoDocumentoDB.GetItem(Id)
        except Exception as e:
            print(e)
    
    def Delete(Id: int):
        try:
            return TipoDocumentoDB.Delete(Id)
        except Exception as e:
            print(e)
    

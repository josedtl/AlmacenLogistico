from DataLayer.MercaderiaDB import MercaderiaDB
from EntityLayer.MercaderiaEntity import MercaderiaSaveModel
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Mercaderia:
    def Save(Ent: MercaderiaSaveModel):
        try:
            StartTransaction()
            data = MercaderiaDB.Save(Ent)
            EndTransaction()
            return data
        except Exception as e:
            Restore()
            print(e)
    
    def GetMainItems():
        try:
            data =  MercaderiaDB.GetMainItems()
            return data
        except Exception as e:
            print(e)    

    def GetCabeceraItem(Id : int):
        try:
            data =  MercaderiaDB.GetCabeceraItem(Id)
            return data
        except Exception as e:
            print(e)    

    def GetMercaderiaLikeCategoria(Nombre : str, CategoriaId :int):
        try:
            data =  MercaderiaDB.GetMercaderiaLikeCategoria(Nombre, CategoriaId)
            return data
        except Exception as e:
            print(e)    
    def GetMercaderia_ItemOP(Id : int):
        try:
            data =  MercaderiaDB.GetMercaderia_ItemOP(Id)
            return data
        except Exception as e:
            print(e)    
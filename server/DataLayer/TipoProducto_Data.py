from .configMysql import get_connection
from EntityLayer.Catalogo.TipoProductoEntity import *
from EntityLayer.Catalogo.TipoProductoSaveEntity import *

import pymysql

class TipoProducto_Data:
    def Get_TipoProductoItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_TipoProductoItems")
                resulset = cursor.fetchall()
            conn.close()
           
            list = []

            for row in resulset:
                Data_ent = TipoProductoEntity.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)


    def SaveTipoProducto(Ent: TipoProductoSaveEntity):    


        try:
            Store :str
            if(Ent.Action==1):
                Store ="sp_TipoProductoInsert"
            else:
                Store = "sp_TipoProductoUpdate"


            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (
                    Ent.TipoProductoId,
                    Ent.Nombre,
                    Ent.FechaRegistro,
                    Ent.CodUsuario,
                    Ent.Estado,
                )

                result_args = cursor.callproc(Store, args)
                for result in cursor.fetchall():
                    Ent.TipoProductoId = result["v_TipoProductoId"]

            conn.commit()
            print(result_args[0])
            return Ent.TipoProductoId
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    def DeleteTipoProducto(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,) 
                result_args = cursor.callproc("sp_TipoProductoDelete", args)
                conn.commit()
            return True
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
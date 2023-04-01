from .configMysql import get_connection
from EntityLayer.Catalogo.MarcaEntity import *
from EntityLayer.Catalogo.MarcaSaveEntity import *

import pymysql

class Marca_Data:
    def Get_MarcaItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_MarcaItems")
                resulset = cursor.fetchall()
            conn.close()
           
            list = []

            for row in resulset:
                Data_ent = MarcaEntity.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)


    def SaveMarca(Ent: MarcaSaveEntity):    


        try:
            Store :str
            if(Ent.Action==1):
                Store ="sp_MarcaInsert"
            else:
                Store = "sp_MarcaUpdate"


            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (
                    Ent.MarcaId,
                    Ent.Nombre,
                    Ent.FechaRegistro,
                    Ent.CodUsuario,
                    Ent.Estado,
                )

                result_args = cursor.callproc(Store, args)
                for result in cursor.fetchall():
                    Ent.MarcaId = result["v_MarcaId"]

            conn.commit()
            print(result_args[0])
            return Ent.MarcaId
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    def DeleteMarca(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,) 
                result_args = cursor.callproc("sp_MarcaDelete", args)
                conn.commit()
            return True
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
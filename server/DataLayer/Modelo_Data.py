from .configMysql import get_connection
from EntityLayer.Catalogo.ModeloEntity import *
from EntityLayer.Catalogo.ModeloSaveEntity import *

import pymysql

class Modelo_Data:
    def Get_ModeloItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_ModeloItems")
                resulset = cursor.fetchall()
            conn.close()
           
            list = []

            for row in resulset:
                Data_ent = ModeloEntity.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)


    def SaveModelo(Ent: ModeloSaveEntity):    


        try:
            Store :str
            if(Ent.Action==1):
                Store ="sp_ModeloInsert"
            else:
                Store = "sp_ModeloUpdate"


            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (
                    Ent.ModeloId,
                    Ent.Nombre,
                    Ent.FechaRegistro,
                    Ent.CodUsuario,
                    Ent.Estado,
                )

                result_args = cursor.callproc(Store, args)
                for result in cursor.fetchall():
                    Ent.ModeloId = result["v_ModeloId"]

            conn.commit()
            print(result_args[0])
            return Ent.ModeloId
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    def DeleteModelo(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,) 
                result_args = cursor.callproc("sp_ModeloDelete", args)
                conn.commit()
            return True
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()


    def Get_ModeloItemsLike( v_Nombre:str):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (  v_Nombre,)
                cursor.callproc("sp_ModeloItemsLike",args)
                resulset = cursor.fetchall()
            conn.close()
           
            list = []

            for row in resulset:
                Data_ent = ModeloEntity.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)
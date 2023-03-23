from .configMysql import get_connection
import pymysql
from EntityLayer.Catalogo.TipoSecuenciaMarcacionEntity import *


class TipoSecuenciaMarcacion_Data:
    def Get_TipoSecuenciaMarcacionItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_TipoSecuenciaMarcacionItems", args=())
                resulset = cursor.fetchall()
            conn.close()
           
            list = []
            print(resulset)
            for row in resulset:
                Data_ent = TipoSecuenciaMarcacionEntity.CargarItems(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)



    def Get_TipoSecuenciaMarcacionItem( v_TipoSecuenciaMarcacionId :int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_TipoSecuenciaMarcacionItem", args=(v_TipoSecuenciaMarcacionId))
                resulset = cursor.fetchall()
            conn.close()
           
            list = []
            print(resulset)
            for row in resulset:
                Data_ent = TipoSecuenciaMarcacionEntity.CargarItems(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)
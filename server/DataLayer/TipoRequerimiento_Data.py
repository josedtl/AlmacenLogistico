from .configMysql import get_connection
from EntityLayer.Catalogo.TipoRequerimientoEntity import *

import pymysql

class TipoRequerimiento_Data:
    def Get_TipoRequerimientoItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_TipoRequerimientoItems")
                resulset = cursor.fetchall()
            conn.close()
           
            list = []

            for row in resulset:
                Data_ent = TipoRequerimientoEntity.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

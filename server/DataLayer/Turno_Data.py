from .configMysql import get_connection
import pymysql
from EntityLayer.Turno.TurnoEntity import *


class Turno_Data:
    def Get_TurnoItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_TurnoItems", args=())
                resulset = cursor.fetchall()
            conn.close()
           
            list = []
            print(resulset)
            for row in resulset:
                Data_ent = TurnoEntity.CargarItems(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)
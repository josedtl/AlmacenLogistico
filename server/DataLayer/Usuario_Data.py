from .configMysql import get_connection
import pymysql
from EntityLayer.Usuario.UsuarioEntity import *


class Usuario_Data:
    def Get_Acceso(v_COD_ID: str, v_PWD: str):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_AccsoUsuario", args=(v_COD_ID, v_PWD))
                resulset = cursor.fetchall()
            conn.close()
           
            list = []
            print(resulset)
            for row in resulset:
                Data_ent = UsuarioEntity.CargarAcceso(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)
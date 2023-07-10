from .configMysql import get_connection
from EntityLayer.CategoriaEntity import *

import pymysql


class CategoriaDB:

    def Save(Ent: CategoriaEntity):

        try:
            Store: str
            Store = "sp_Categoria_Insert"
            if (Ent.Action == ProcessActionEnum.Update):Store = "sp_Categoria_Update"
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)

                args=[]
                args.append(Ent.CategoriaId)
                args.append(Ent.Nombre)
                args.append(Ent.FechaRegistro)
                args.append(Ent.CodUsuario)
                args.append(Ent.EstadoRegistro)

                cursor.callproc(Store, args)
                Ent.CategoriaId =int(cursor.fetchone()['v_CategoriaId'])

            conn.commit()
            return Ent.CategoriaId
        except Exception as e:
            print(e)
            conn.rollback()
        finally:
            cursor.close()
            conn.close()

    def GetMainItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_Categoria_Main")
                resulset = cursor.fetchall()
            conn.close()

            list = []

            for row in resulset:
                Data_ent = CategoriaItemEntity.CargarMain(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def Delete(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_Categoria_Delete", args)
                conn.commit()
            return True
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
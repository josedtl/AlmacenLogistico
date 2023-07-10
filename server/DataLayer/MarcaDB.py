from .configMysql import get_connection
from EntityLayer.MarcaEntity import *

import pymysql


class MarcaDB:

    def Save(Ent: MarcaEntity):

        try:
            Store: str
            Store = "sp_Marca_Insert"
            if (Ent.Action == ProcessActionEnum.Update):Store = "sp_Marca_Update"
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)

                args=[]
                args.append(Ent.MarcaId)
                args.append(Ent.Nombre)
                args.append(Ent.FechaRegistro)
                args.append(Ent.CodUsuario)
                args.append(Ent.EstadoRegistro)

                cursor.callproc(Store, args)
                Ent.MarcaId =int(cursor.fetchone()['v_MarcaId'])

            conn.commit()
            return Ent
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
                cursor.callproc("sp_Marca_Main")
                resulset = cursor.fetchall()
            conn.close()

            list = []

            for row in resulset:
                Data_ent = MarcaItemEntity.CargarMain(row)
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
                cursor.callproc("sp_Marca_Delete", args)
                conn.commit()
            return True
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
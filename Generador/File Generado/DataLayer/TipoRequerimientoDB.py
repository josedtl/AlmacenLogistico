from Utilidades.Entidades.ResponseAPI import ResponseAPIError
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Arreglos.ListError import error_entities
from .configMysql import get_connection
from EntityLayer.TipoRequerimientoEntity import *
import pymysql


class TipoRequerimientoDB:
    def GetItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_TipoRequerimientoAllItems")
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = TipoRequerimientoItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_TipoRequerimientoAllItem", args)
                resulset = cursor.fetchall()
            conn.close()
            list = []

            for row in resulset:
                Data_ent = TipoRequerimientoItemModel.Cargar(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)

    def Save(Ent: TipoRequerimientoSaveModel):
        try:
            Store: str
            Store = "sp_TipoRequerimiento_Save"
            if Ent.Action == ProcessActionEnum.Update:
                Store = "sp_TipoRequerimiento_Update"
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = []
                args.append(Ent.TipoRequerimientoId)
                args.append(Ent.Codigo)
                args.append(Ent.Nombre)
                args.append(Ent.EstadoRegistro)
                cursor.callproc(Store, args)
                Ent.TipoRequerimientoId = int(cursor.fetchone()["v_TipoRequerimientoId"])

            conn.commit()
            return Ent
        except Exception as e:
            print(e)
            conn.rollback()
        finally:
            cursor.close()
            conn.close()

    def Delete(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,)
                cursor.callproc("sp_TipoRequerimiento_Delete", args)
                conn.commit()
            return ResponseAPI.Response(True)
        except Exception as e:
            error_code = e.args[0]
            error_entity = next((entity for entity in error_entities if entity['code'] == error_code), None)

            if error_entity:
                print(error_entity['message'])
                return ResponseAPIError.ErrorMensaje(error_entity['messageuser']) 
            else:
                error_message = "Ocurrio un error al eliminar el Registro"
                print(e)
                return ResponseAPIError.ErrorMensaje(error_message) 
        finally:
            cursor.close()
            conn.close()


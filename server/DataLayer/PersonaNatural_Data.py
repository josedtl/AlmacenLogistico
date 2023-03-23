from .configMysql import get_connection
from EntityLayer.PersonaNatural.PersonaNaturalEntity import *
import pymysql
from EntityLayer.PersonaNatural.PersonaNaturalModel import *

class PersonaNatural_Data:
    def Get_PersonaNaturalItems():
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor.callproc("sp_PersonaNaturalSelectAll")
                resulset = cursor.fetchall()
            conn.close()
           
            list = []

            for row in resulset:
                Data_ent = PersonaNaturalEntity.CargarSoloNombre(row)
                list.append(Data_ent)
            return list
        except Exception as e:
            print(e)


    def Post_PersonaNatural_Insert(Ent: PersonaNaturalSave):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Ent.TipoDocumentoIdentidadId,
                    Ent.NumDocumento,
                    Ent.Nombres,
                    Ent.ApellidoPaterno,
                    Ent.ApellidoMaterno,
                    Ent.FechaNacimiento,
                    Ent.FechaVencimiento,
                    Ent.TipoSexoId,
                    Ent.EstadoCivilId,
                    Ent.Direccion,
                    Ent.DireccionReferencia,
                    Ent.UbigeoId,
                    Ent.FechaRegistro,
                    Ent.UsuarioRegistro,
                    Ent.EstadoRegistro) 

                result_args = cursor.callproc("sp_PersonaNaturalInsert", args)

            conn.commit()
            print(result_args[0])
            return True
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    def Post_PersonaNatural_Delete(Id: int):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Id,) 
                result_args = cursor.callproc("sp_PersonaNaturalDelete", args)
                conn.commit()
            return True
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    def Update_PersonaNatural_Insert(Ent: PersonaNaturalSave):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (Ent.TipoDocumentoIdentidadId,
                Ent.NumDocumento,
                Ent.Nombres,
                Ent.ApellidoPaterno,
                Ent.ApellidoMaterno,
                Ent.FechaNacimiento,
                Ent.FechaVencimiento,
                Ent.TipoSexoId,
                Ent.EstadoCivilId,
                Ent.Direccion,
                Ent.DireccionReferencia,
                Ent.UbigeoId,
                Ent.FechaRegistro,
                Ent.UsuarioRegistro,
                Ent.EstadoRegistro) 

            result_args = cursor.callproc("sp_PersonaNaturalUpdate", args)

            conn.commit()
            # print(result_args[0])
            return True
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

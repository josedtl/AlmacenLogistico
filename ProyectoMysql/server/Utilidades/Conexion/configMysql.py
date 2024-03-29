import pymysql

# import pymssql
# from DataLayer.configMysql import get_connection
# from .configMysql import get_connection


def get_connection():
    return pymysql.connect(
            #    host="localhost",
        host="192.168.18.19",
        database="logisticstoragedb",
        user="root",
        password="123456",
        cursorclass=pymysql.cursors.DictCursor,
    )

config = {
    'host': 'localhost',
    'user': 'root',
    'password': '123456',
    'database': 'logisticstoragedb',
    'cursorclass': pymysql.cursors.DictCursor  # Esto convierte los resultados en diccionarios
}


conexion = get_connection()


def StartTransaction():
    conexion.begin()


def EndTransaction():
    conexion.commit()


def Restore():
    conexion.rollback()

def OpenConnection():
    conexion.open()

def CloseConnection():
    conexion.close()


# dbCominit = conexion.commit()

class DBProcedure:
    def DBProcedureInsertUpdate(self, Store, Parametro, out):
        try:
            with conexion.cursor() as cursor:
                cursor.callproc(Store, Parametro)
                Id = cursor.fetchone()[out]
            return Id
        except Exception as e:
            print(e)
            conexion.rollback
        finally:
            cursor.close()

    def DBProcedureConsult(self, Store, Parametro):
        try:
            with conexion.cursor() as cursor:
                cursor.callproc(Store, Parametro)
                resulset = cursor.fetchall()
            # print(resulset)
            # cursor.close()
            return resulset
        except Exception as e:
            conexion.rollback()
            print(e)

    def DBProcedureDalete(self, Store, Parametro):
        try:
            with conexion.cursor() as cursor:
                cursor.callproc(Store, Parametro)
                conexion.commit()
            return True
        except Exception as e:
            print(e)
            conexion.rollback
        finally:
            cursor.close()
            
            

    def DBProcedureConsult(self, Store, Parametro):
        try:
            # Utilizar el bloque with para garantizar la correcta apertura y cierre de la conexión
            with pymysql.connect(**config) as cn:
                # Crear un objeto cursor
                with cn.cursor() as cur:
                    # Ejecutar la consulta SELECT
                    cur.callproc(Store, Parametro)
                    resulset = cur.fetchall()
                    cur.close()
                return resulset

        except Exception as e:
            cn.rollback
            print(f"Error en la consulta: {e}")
            
        finally:
            cur.close()
# class DBProcedure:
#     def DBProcedureInsertUpdate(self, Store, Parametro, out):
#         try:
#             with conexion.cursor() as cursor:
#                 cursor.callproc(Store, Parametro)
#                 Id = cursor.fetchone()[out]
#             return Id
#         except Exception as e:
#             print(e)
#             conexion.rollback
#         finally:
#             cursor.close()

#     def DBProcedureConsult(self, Store, Parametro):
#         try:
#             with conexion.cursor() as cursor:
#                 cursor.callproc(Store, Parametro)
#                 resulset = cursor.fetchall()
#             # print(resulset)
#             cursor.close()
#             return resulset
#         except Exception as e:
#             conexion.rollback()
#             print(e)
#         # finally:
#         #     conexion.close()

#     def DBProcedureDalete(self, Store, Parametro):
#         try:
#             with conexion.cursor() as cursor:
#                 cursor.callproc(Store, Parametro)
#                 conexion.commit()
#             return True
#         except Exception as e:
#             print(e)
#             conexion.rollback
#         finally:
#             cursor.close()
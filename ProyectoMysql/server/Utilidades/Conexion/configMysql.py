import pymysql
from dotenv import load_dotenv
import os

# import pymssql
# from DataLayer.configMysql import get_connection
# from .configMysql import get_connection
load_dotenv()
HOST_V = os.getenv("HOST")
DATABASE_V = os.getenv("DATABASE")
USER_V = os.getenv("USER")
PASSWORD_V = os.getenv("PASSWORD")

# SECRET_KEY = os.getenv("SECRET_KEY")
# DEBUG = os.getenv("DEBUG")


def get_connection():
    return pymysql.connect(
            #    host="localhost",
        host=HOST_V,
        database=DATABASE_V,
        user=USER_V,
        password=PASSWORD_V,
        cursorclass=pymysql.cursors.DictCursor,
    )

config = {
    'host':HOST_V,
    'user': USER_V,
    'password': PASSWORD_V,
    'database': DATABASE_V,
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
            
    # def DBProcedureConsult(self, Store, Parametro):
    #     try:
    #         with conexion.cursor() as cur:
    #             cur.callproc(Store, Parametro)
    #             resulset = cur.fetchall()
    #             cur.close()
    #         return resulset

    #     except Exception as e:
    #         conexion.rollback
    #         print(f"Error en la consulta: {e}")
            
    #     finally:
    #         cur.close()         

    def DBProcedureConsult(self, Store, Parametro):
        try:
            with pymysql.connect(**config) as cn:
                with cn.cursor() as cur:
                    cur.callproc(Store, Parametro)
                    resulset = cur.fetchall()
                    cur.close()
                return resulset

        except Exception as e:
            cn.rollback
            print(f"Error en la consulta: {e}")
            
        finally:
            cur.close()

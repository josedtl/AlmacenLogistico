import pymysql

# import pymssql
# from DataLayer.configMysql import get_connection
# from .configMysql import get_connection


def get_connection():
    return pymysql.connect(
        host="localhost",
        database="logisticstoragedb",
        user="root",
        password="123456",
        cursorclass=pymysql.cursors.DictCursor,
    )


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
            cursor.close()
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
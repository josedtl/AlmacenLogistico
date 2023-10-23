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
        cursorclass=pymysql.cursors.DictCursor
    )


conexion = get_connection()

def Init():
    conexion.begin()
def Fin():
    conexion.commit()

def Retornar():
    conexion.rollback()

def Retornar():
    conexion.close()

    
# dbCominit = conexion.commit()


class DatabaseManager:

    def DBProcedure(self, Store, Parametro, out):
        # Init()
        with conexion.cursor() as cursor:
            cursor.callproc(Store, Parametro)
            Id = cursor.fetchone()[out]
            cursor.close()
        # Fin()

        return Id

    # def DBcommit():
    #     conexion.commit()

    # def DBProcedureDetalle(self, Store, Parametro, out):
    #     conexion.begin()
    #     with conexion.cursor() as cursor:
    #         cursor.callproc(Store, Parametro)
    #         Id = cursor.fetchone()[out]
    #     return Id

# def get_connectionSQL():
#     conn = pymssql.connect( "190.187.52.107", "user", "abcde1F", "PRV_SMF")
#     cursor = conn.cursor(as_dict=True)
#     cursor.execute("SELECT * FROM C33_Empresa")
#     for row in cursor:
#         print(row)

#     conn.close()

# get_connectionSQL()

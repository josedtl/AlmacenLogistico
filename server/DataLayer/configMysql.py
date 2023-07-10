import pymysql
# import pymssql


def get_connection():
    return pymysql.connect(
        host="localhost",
        database="logisticstoragedb",
        user="root",
        password="123456",
    )


# def get_connectionSQL():
#     conn = pymssql.connect( "190.187.52.107", "user", "abcde1F", "PRV_SMF")
#     cursor = conn.cursor(as_dict=True)
#     cursor.execute("SELECT * FROM C33_Empresa")
#     for row in cursor:
#         print(row)

#     conn.close()

# get_connectionSQL()

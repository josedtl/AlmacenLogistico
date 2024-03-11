import pymysql
import requests
import json

# Establecer la conexión a la base de datos
conexion = pymysql.connect(
    host="localhost",
    user="root",
    password="123456",
    database="storedb",
    charset="utf8mb4",
    cursorclass=pymysql.cursors.DictCursor,
)

try:
    with conexion.cursor() as cursor:
        # Ejecutar una consulta SELECT
        consulta = "SELECT * FROM catalogo_empresa"
        cursor.execute(consulta)

        # Obtener los resultados de la consulta
        resultados = cursor.fetchall()

        url = "http://localhost:9085/api/Empresa/Save"
        # Mostrar los resultados
        for fila in resultados:
            data = {
                "EmpresaId": 0,
                "TipoDocumentoIdentidadId": 4,
                "NumDocumento": fila["NumeroDocumento"],
                "Nombres": fila["RazonSocial"],
                "NombreComercial": fila["NombreComercial"],
                "UbigeoId": 222,
                "Direccion": fila["direccion"],
                "Telefono": "",
                "Correo": "",
                "FechaRegistro": "2023-12-04T00:56:41.000Z",
                "CodUsuario": "ADM",
                "EstadoRegistro": 1,
                "Action": 1
            }
            response = requests.post(url, json=data)
            if response.status_code == 200:
                print("Solicitud POST exitosa")
                # Imprimir la respuesta del servidor
                print("Respuesta del servidor:")
                print(
                    response.json()
                )  # Muestra la respuesta del servidor en formato JSON
            else:
                print("Error al realizar la solicitud POST")
                print("Código de estado:", response.status_code)
            print(fila)

finally:
    # Cerrar la conexión
    conexion.close()

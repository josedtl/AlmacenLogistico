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
        consulta = "SELECT * FROM catalogo_personanatural"
        cursor.execute(consulta)

        # Obtener los resultados de la consulta
        resultados = cursor.fetchall()

        url = "http://localhost:8030/api/Entidad/SaveItem"
        # Mostrar los resultados
        for fila in resultados:
            data = {
                "EntidadId": 0,
                "EsEmpresa": False,
                "TipoDocumentoIdentidadId": 1,
                "NumDocumento": fila['NumDocumento'],
                "FechaRegistro": "2023-12-04T00:56:41.000Z",
                "CodUsuario": "adm",
                "Nombres": fila['Nombres'],
                "ApellidoMaterno": fila['ApellidoMaterno'],
                "ApellidoPaterno": fila['ApellidoPaterno'],
                "FechaNacimiento": "2023-12-04T00:56:41.000Z",
                "Direccion": fila['Direccion'],
                "Telefono": fila['Telefono'],
                "Correo": fila['Correo'],
                "SexoId": 1,
                "EstadoCivilId": 1,
                "UbigeoId":793,
                "Action": 1,
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

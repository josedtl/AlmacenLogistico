import pymysql
import requests
import json

# Establecer la conexión a la base de datos
conexion = pymysql.connect(
    host="localhost",
    user="root",
    password="123456",
    database="spaceDB",
    charset="utf8mb4",
    cursorclass=pymysql.cursors.DictCursor,
)

try:
    with conexion.cursor() as cursor:
        # Ejecutar una consulta SELECT
        consulta = "SELECT * FROM PRealData"
        cursor.execute(consulta)

        # Obtener los resultados de la consulta
        resultados = cursor.fetchall()

        url = "http://localhost:9085/api/Mercaderia/Save"
        # Mostrar los resultados
        for fila in resultados:
            data = {
                "MercaderiaId": 0,
                "Codigo": fila["Codigo"],
                "CategoriaId": fila["CategoriaId"],
                "TipoProductoId": fila["TipoProductoId"],
                "MarcaId": fila["MarcaId"],
                "ModeloId": fila["ModeloId"],
                "Nombre": fila["Nombre"],
                "Descripcion": fila["Nombre"],
                "UnidadMedidaId": fila["UnidadMedidaId"],
                "Reserva": 0,
                "Stock": 0,
                "FechaRegistro": "2024-03-11T05:56:33.106Z",
                "CodUsuario": fila["CodUsuario"],
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

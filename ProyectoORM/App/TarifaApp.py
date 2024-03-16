import pymysql
import requests
import json

# Establecer la conexión a la base de datos
conexion = pymysql.connect(
    host="localhost",
    user="root",
    password="123456",
    database="DataExtraibleDB",
    charset="utf8mb4",
    cursorclass=pymysql.cursors.DictCursor,
)

try:
    with conexion.cursor() as cursor:
        # Ejecutar una consulta SELECT
        consulta = "SELECT * FROM Tarifa"
        cursor.execute(consulta)
        # Obtener los resultados de la consulta
        resultados = cursor.fetchall()
        url = "http://localhost/ServiceSpace/api/Tarifa/Registrar"
        # Mostrar los resultados
        for fila in resultados:
            data = {
                "TarifaId": 0,
                "ObjetoRefereciaId": fila["ObjetoRefereciaId"],
                "TipoTarifaEnum": fila["TipoTarifaEnum"],
                "CostoTarifa": float(fila["CostoTarifa"]),
                "MonedaId": fila["MonedaId"],
                "UnidadMedidaId": fila["UnidadMedidaId"],
                "Correlativo": "Correlativo",
                "NomTarifa": fila["NomTarifa"],
                "NomComercial": fila["NomComercial"],
                "Descripcion": fila["Descripcion"],
                "FechaRegistro": "2024-03-14T22:31:05.492Z",
                "CodUsuario": "ADM",
                "EstadoRegistro": True,
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
                print("Estructura:", response.request.body)
            print(fila)

finally:
    # Cerrar la conexión
    conexion.close()

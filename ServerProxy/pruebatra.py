import requests
import time

# URL base del API
# base_url = "http://127.0.0.1:8000"
base_url = "http://127.0.0.1:8888"

# Endpoint que deseas probar
endpoint = "/api/Categoria/GetMainItems/"

# Número de solicitudes a enviar
num_requests = 10000
start_timeAll = time.time()
# Realizar las solicitudes de prueba
for i in range(num_requests):
    # start_time = time.time() 
    response = requests.get(base_url + endpoint)
    # end_time = time.time()  
    # elapsed_time = end_time - start_time
    # print(f"Solicitud {i+1} - Código de respuesta: {response.status_code} - Tiempo: {elapsed_time:.4f} segundos")
    
    # time.sleep(1) 
end_timeAll = time.time()

elapsed_timeAll = end_timeAll - start_timeAll

print(f" Tiempo: {elapsed_timeAll:.4f} segundos")
print("Pruebas de tráfico completadas.")

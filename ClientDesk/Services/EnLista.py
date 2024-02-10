import requests


class EnLista:
    def Get_EntListaCodigo(Codigo: str):
        try:
            url = "http://localhost:9085/api/EntLista/GetItems/" + Codigo
            response = requests.get(url)
            data = response.json()
            return data.get("Value", [])
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

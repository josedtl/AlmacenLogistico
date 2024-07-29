import requests


class EnLista:
    def Get_EntListaCodigo(Codigo: str):
        try:
            url = "http://localhost/AlmacenLogisticoService/api/EntLista/ObtenerItems/" + Codigo
            response = requests.get(url)
            data = response.json()
            return data.get("Value", [])
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de la API: {e}")
            return []

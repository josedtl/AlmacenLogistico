from Utilidades.Arreglos.ListError import error_entities
from Utilidades.Entidades.ResponseAPI import ResponseAPIError
class ErrorData:
    def Control(e: Exception):
        error_code = e.args[0]
        error_entity = next(
            (entity for entity in error_entities if entity["code"] == error_code),
            None,
        )
        if error_entity:
            print(error_entity["message"])
            return ResponseAPIError.ErrorMensaje(error_entity["messageuser"])
        else:
            error_message = "Ocurrio un error al eliminar el Registro"
            print(e)
            return ResponseAPIError.ErrorMensaje(error_message)

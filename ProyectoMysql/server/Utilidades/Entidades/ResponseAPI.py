class ResponseAPI():
    State: bool = True
    Message:  str
    Value: any

    def Response(_Value: any):
        Item = ResponseAPI()
        Item.Message = "Correcto"
        Item.State = True
        Item.Value = _Value
        return Item


class ResponseAPIError():
    Message:  str
    State: bool
    def Error():
        Item = ResponseAPIError()
        Item.State = False
        Item.Message = "hubo un error en el servidor"
        return Item
    def ErrorMensaje(Mensaje):
        Item = ResponseAPIError()
        Item.State = False
        Item.Message = Mensaje
        return Item
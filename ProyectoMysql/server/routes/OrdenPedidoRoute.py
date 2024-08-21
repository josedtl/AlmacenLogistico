from fastapi import APIRouter
from BusinessLayer.OrdenPedido import *
from BusinessLayer.OrdenPedidoDetalle import *
from EntityLayer.OrdenPedidoEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

OrdenPedidoRouter = APIRouter()
ApiName = "OrdenPedido"

@OrdenPedidoRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = OrdenPedido.ObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoRouter.get(f"/api/{ApiName}/ObtenerItem/{{Id}}", tags=[ApiName])
def ObtenerItem(Id: int):
    try:
        jsonData = OrdenPedido.ObtenerItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



@OrdenPedidoRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: OrdenPedidoSaveModel):
    try:
        print(jsonable_encoder(Ent))
        Ent.FechaRegistro = datetime.now()
        Ent = OrdenPedido.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@OrdenPedidoRouter.get(f"/api/{ApiName}/ObtenerDetalleItem/{{Id}}", tags=[ApiName])
def ObtenerDetalleItem(Id: int):
    try:
        jsonData = OrdenPedidoDetalle.ObtenerItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


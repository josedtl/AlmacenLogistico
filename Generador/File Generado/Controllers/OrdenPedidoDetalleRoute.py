from fastapi import APIRouter
from BusinessLayer.OrdenPedidoDetalle import *
from EntityLayer.OrdenPedidoDetalleEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

OrdenPedidoDetalleRouter = APIRouter()
ApiName = "OrdenPedidoDetalle"


@OrdenPedidoDetalleRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: OrdenPedidoDetalleSaveModel):
    try:
        Ent = OrdenPedidoDetalle.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoDetalleRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = OrdenPedidoDetalle.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoDetalleRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = OrdenPedidoDetalle.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoDetalleRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = OrdenPedidoDetalle.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



from fastapi import APIRouter
from BusinessLayer.OrdenCompraPedidoEnlace import *
from EntityLayer.OrdenCompraPedidoEnlaceEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

OrdenCompraPedidoEnlaceRouter = APIRouter()
ApiName = "OrdenCompraPedidoEnlace"


@OrdenCompraPedidoEnlaceRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: OrdenCompraPedidoEnlaceSaveModel):
    try:
        Ent = OrdenCompraPedidoEnlace.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenCompraPedidoEnlaceRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = OrdenCompraPedidoEnlace.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenCompraPedidoEnlaceRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = OrdenCompraPedidoEnlace.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenCompraPedidoEnlaceRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = OrdenCompraPedidoEnlace.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



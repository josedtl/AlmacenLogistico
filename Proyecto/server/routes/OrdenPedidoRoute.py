from fastapi import APIRouter
from BusinessLayer.OrdenPedido import *
from BusinessLayer.OrdenPedidoDetalle import *
from EntityLayer.OrdenPedidoEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

OrdenPedidoRouter = APIRouter()
ApiName = "OrdenPedido"


@OrdenPedidoRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: OrdenPedidoSaveModel):
    try:
        print(jsonable_encoder(Ent))
        Ent.FechaRegistro = datetime.now()
        Ent = OrdenPedido.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoRouter.get(f"/api/{ApiName}/GetItems/", tags=[ApiName])
def GetItems():
    try:
        jsonData = OrdenPedido.GetItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoRouter.get(f"/api/{ApiName}/GetItem/{{Id}}/", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = OrdenPedido.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id: int):
    try:
        jsonData = OrdenPedido.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoRouter.get(f"/api/{ApiName}/GetItemCabecera/{{Id}}/", tags=[ApiName])
def GetItemCabecera(Id: int):
    try:
        jsonData = OrdenPedido.GetItemCabecera(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@OrdenPedidoRouter.get(f"/api/{ApiName}/GetItemCabeceraOP/{{Id}}/", tags=[ApiName])
def GetItemCabeceraOP(Id: int):
    try:
        jsonData = OrdenPedidoDetalle.GetItemCabeceraOP(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@OrdenPedidoRouter.get(f"/api/{ApiName}/GetItemOPMain/", tags=[ApiName])
def GetItemOPMain():
    try:
        jsonData = OrdenPedido.GetItemOPMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


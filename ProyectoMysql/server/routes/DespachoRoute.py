from fastapi import APIRouter
from BusinessLayer.Despacho import *
from BusinessLayer.Reserva import *
from EntityLayer.DespachoEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

DespachoRouter = APIRouter()
ApiName = "Despacho"

@DespachoRouter.get(f"/api/{ApiName}/ObtenerMain/", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = DepachoDB.DespachoObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@DespachoRouter.get(f"/api/{ApiName}/ObtenerCabecera/{{OrdenPedidoId}}", tags=[ApiName])
def ObtenerCabecera(OrdenPedidoId : int):
    try:
        jsonData = DepachoDB.ObtenerCabecera(OrdenPedidoId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@DespachoRouter.get(f"/api/{ApiName}/ObtenerDetalle/{{OrdenPedidoId}}", tags=[ApiName])
def ObtenerDetalle(OrdenPedidoId : int):
    try:
        jsonData = DepachoDetalleDB.ObtenerDetalle(OrdenPedidoId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@DespachoRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: DespachoSaveModel):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = Despacho.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
@DespachoRouter.get(f"/api/{ApiName}/ObtenerReservaOPItem/{{OrdenPedidoId}}", tags=[ApiName])
def ObtenerReservaOPItem(OrdenPedidoId : int):
    try:
        jsonData = Reserva.ObtenerReservaOPItem(OrdenPedidoId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
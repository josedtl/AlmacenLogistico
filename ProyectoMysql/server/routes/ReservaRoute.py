from fastapi import APIRouter
from BusinessLayer.Reserva import *
from EntityLayer.ReservaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

ReservaRouter = APIRouter()
ApiName = "Reserva"


@ReservaRouter.get(f"/api/{ApiName}/GetMercaderiaMainItems", tags=[ApiName])
def GetMercaderiaMainItems():
    try:
        jsonData = Reserva.GetMercaderiaMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@ReservaRouter.post(f"/api/{ApiName}/ReservarMercaderia", tags=[ApiName])
def ReservarMercaderia(Ent: ReservaMercaderiaOPModel):
    try:
        Ent = Reserva.ReservarMercaderia(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@ReservaRouter.get(f"/api/{ApiName}/ReservaPedido/{{MercaderiaId}}", tags=[ApiName])
def ReservaPedido(MercaderiaId : int):
    try:
        jsonData = Reserva.ReservaPedido(MercaderiaId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    

@ReservaRouter.get(f"/api/{ApiName}/ReservaResumen/{{MercaderiaId}}", tags=[ApiName])
def ReservaResumen(MercaderiaId : int):
    try:
        jsonData = Reserva.ReservaResumen(MercaderiaId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
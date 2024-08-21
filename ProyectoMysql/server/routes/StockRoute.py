from fastapi import APIRouter
from BusinessLayer.StockMercaderia import *
from BusinessLayer.ReservaDetalle import *
from BusinessLayer.Reserva import *
from EntityLayer.ReservaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

StockRouter = APIRouter()
ApiName = "Stock"


@StockRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = StockMercaderia.ObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


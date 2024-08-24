from fastapi import APIRouter
from BusinessLayer.Tarifa import *
from EntityLayer.TarifaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

TarifaRouter = APIRouter()
ApiName = "Tarifa"

@TarifaRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = Tarifa.ObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@TarifaRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: OrdenPedidoSaveModel):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = Tarifa.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


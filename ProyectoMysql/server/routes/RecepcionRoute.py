from fastapi import APIRouter
from BusinessLayer.Recepcion import *
from BusinessLayer.RecepcionDetalle import RecepcionDetalle
from BusinessLayer.RecepLista import *
from EntityLayer.RecepcionEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

RecepcionRouter = APIRouter()
ApiName = "Recepcion"

@RecepcionRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = Recepcion.ObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@RecepcionRouter.get(f"/api/{ApiName}/ObtenerItem/{{RecepcionId}}", tags=[ApiName])
def ObtenerItem(RecepcionId : int):
    try:
        jsonData = Recepcion.ObtenerItem(RecepcionId    )
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



@RecepcionRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Save(Ent: RecepcionSaveModel):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = Recepcion.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@RecepcionRouter.get(f"/api/{ApiName}/ObtenerDetalleItem/{{Id}}", tags=[ApiName])
def ObtenerDetalleItem(Id : int):
    try:
        jsonData = RecepcionDetalle.ObtenerItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


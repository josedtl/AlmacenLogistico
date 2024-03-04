from fastapi import APIRouter
from BusinessLayer.EntDato import *
from EntityLayer.EntDatoEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

EntDatoRouter = APIRouter()
ApiName = "EntDato"

@EntDatoRouter.post(f"/api/{ApiName}/GetItemLike", tags=[ApiName])
def GetItemLike(NDataLike: EntidadLikeModel):
    try:
        jsonData = EntDato.GetItemLike(NDataLike.Valor1, NDataLike.Valor2)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@EntDatoRouter.post(f"/api/{ApiName}/GetNomCompletoItemLike", tags=[ApiName])
def GetNomCompletoItemLike(NDataLike: EntidadLikeModel):
    try:
        jsonData = EntDato.GetNomCompletoItemLike( NDataLike.Valor1)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@EntDatoRouter.post(f"/api/{ApiName}/GetNomCompletoItem", tags=[ApiName])
def GetNomCompletoItem(NDataLike: EntidadLikeModel):
    try:
        jsonData = EntDato.GetNomCompletoItem(NDataLike.ValorInt1)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

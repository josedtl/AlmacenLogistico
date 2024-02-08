from fastapi import APIRouter
from BusinessLayer.EntLista import *
from EntityLayer.EntListaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

EntListaRouter = APIRouter()
ApiName = "EntLista"


@EntListaRouter.get(f"/api/{ApiName}/GetItems/{{Codigo}}", tags=[ApiName])
def GetItems(Codigo: str):
    try:
        jsonData = EntLista.GetItems(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@EntListaRouter.get(f"/api/{ApiName}/GetItem/{{Id}}", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = EntLista.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@EntListaRouter.post(f"/api/{ApiName}/GetItemLike", tags=[ApiName])
def GetProductoItemLike(NDataLike: EntidadLikeModel):
    try:
        jsonData = EntLista.GetItemLike(NDataLike.Valor1, NDataLike.Valor2)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

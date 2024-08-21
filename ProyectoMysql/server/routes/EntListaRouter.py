from fastapi import APIRouter
from BusinessLayer.EntLista import *
from EntityLayer.EntListaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

EntListaRouter = APIRouter()
ApiName = "EntLista"

@EntListaRouter.get(f"/api/{ApiName}/ObtenerItem/{{Id}}", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = EntLista.ObtenerItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@EntListaRouter.get(f"/api/{ApiName}/ObtenerItems/{{Codigo}}", tags=[ApiName])
def ObtenerItems(Codigo: str):
    try:
        jsonData = EntLista.ObtenerItems(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@EntListaRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: MerListaSaveModel):
    try:
        Ent = EntLista.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    

@EntListaRouter.post(f"/api/{ApiName}/BuscarItem", tags=[ApiName])
def BuscarItem(NDataLike: EntidadLikeModel):
    try:
        jsonData = EntLista.BuscarItem(NDataLike.Valor1, NDataLike.Valor2)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

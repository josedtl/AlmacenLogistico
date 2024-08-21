from fastapi import APIRouter
from BusinessLayer.MerLista import *
from EntityLayer.MerListaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

MerListaRouter = APIRouter()
ApiName = "MerLista"


@MerListaRouter.get(f"/api/{ApiName}/ObtenerMain/{{Codigo}}", tags=[ApiName])
def ObtenerMain(Codigo: str):
    try:
        jsonData = MerLista.ObtenerMain(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MerListaRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: MerListaSaveModel):
    try:
        Ent = MerLista.Registrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MerListaRouter.get(f"/api/{ApiName}/ObtenerTitulo/{{Codigo}}", tags=[ApiName])
def GetItemTitulo(Codigo: str):
    try:
        jsonData = MerLista.ObtenerTitulo(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MerListaRouter.get(f"/api/{ApiName}/ObtenerItem/{{MerListaId}}", tags=[ApiName])
def ObtenerItem(MerListaId: int):
    try:
        jsonData = MerLista.ObtenerItem(MerListaId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
@MerListaRouter.post(f"/api/{ApiName}/BuscarItem", tags=[ApiName])
def BuscarItem(NDataLike: EntidadLikeModel):
    try:
        jsonData = MerLista.BuscarItem(NDataLike.Valor1, NDataLike.Valor2)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    

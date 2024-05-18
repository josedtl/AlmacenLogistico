from fastapi import APIRouter
from BusinessLayer.MerLista import *
from EntityLayer.MerListaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

MerListaRouter = APIRouter()
ApiName = "MerLista"


@MerListaRouter.get(f"/api/{ApiName}/ObtenerMain/{{Codigo}}", tags=[ApiName])
def GetItems(Codigo: str):
    try:
        jsonData = MerLista.GetItems(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MerListaRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Save(Ent: MerListaSaveModel):
    try:
        print (Ent)
        Ent = MerLista.Save(Ent)
    
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MerListaRouter.get(f"/api/{ApiName}/ObtenerTitulo/{{Codigo}}", tags=[ApiName])
def GetItemTitulo(Codigo: str):
    try:
        jsonData = MerLista.GetItemTitulo(Codigo)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@MerListaRouter.post(f"/api/{ApiName}/BuscarItem", tags=[ApiName])
def GetItemLike(NDataLike: EntidadLikeModel):
    try:
        jsonData = MerLista.GetItemLike(NDataLike.Valor1, NDataLike.Valor2)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
@MerListaRouter.get(f"/api/{ApiName}/ObtenerItem/{{Id}}", tags=[ApiName])
def GetItem(Id: int):
    try:
        jsonData = MerLista.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
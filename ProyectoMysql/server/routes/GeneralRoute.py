from fastapi import APIRouter
from BusinessLayer.Producto import *
from BusinessLayer.PersonaNatural import *
from BusinessLayer.Empresa import *
from BusinessLayer.Ubigeo import Ubigeo
from EntityLayer.EmpresaEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError
from Utilidades.Entidades.EntidadLikeModel import EntidadLikeModel

GeneralRouter = APIRouter()
ApiName = "General"



@GeneralRouter.get(f"/api/{ApiName}/UnidadMedidaObtenerItems", tags=[ApiName])
def UnidadMedidaObtenerItems():
    try:
        jsonData = PersonaNatural.GetBuscardocumento(NumDocumento)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/UnidadMedidaObtenerItem/{{UnidadMedidaId}}", tags=[ApiName])
def UnidadMedidaObtenerItem(NumDocumento: str):
    try:
        jsonData = PersonaNatural.GetBuscardocumento(NumDocumento)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
  


@GeneralRouter.post(f"/api/{ApiName}/GetProductoItemLike", tags=[ApiName])
def GetProductoItemLike(NDataLike: EntidadLikeModel):
    try:
        jsonData = Producto.GetItemLike(NDataLike.Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@GeneralRouter.get(f"/api/{ApiName}/GetBuscardocumento/{{NumDocumento}}/", tags=[ApiName])
def GetBuscardocumento(NumDocumento: str):
    try:
        jsonData = PersonaNatural.GetBuscardocumento(NumDocumento)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

    
@GeneralRouter.get(f"/api/{ApiName}/GetEmpresaBuscaDocumento/{{NumDocumento}}/", tags=[ApiName])
def GetEmpresaBuscaDocumento(NumDocumento: str):
    try:
        jsonData = Empresa.GetEmpresaBuscaDocumento(NumDocumento)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
@GeneralRouter.post(f"/api/{ApiName}/GetUbigeoItemLike", tags=[ApiName])
def GetUbigeoItemLike(NDataLike: EntidadLikeModel):
    try:
        jsonData = Ubigeo.GetItemLike(NDataLike.Valor1)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
@GeneralRouter.get(f"/api/{ApiName}/GetUbigeoItem/{{value}}/", tags=[ApiName])
def GetUbigeoItem(value: int):
    try:
        jsonData = Ubigeo.GetItem(value)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
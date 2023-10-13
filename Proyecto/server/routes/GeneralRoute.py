from fastapi import APIRouter
from BusinessLayer.Categoria import *
from BusinessLayer.TipoProducto import *
from BusinessLayer.Marca import *
from BusinessLayer.Modelo import *

from EntityLayer.CategoriaEntity import *
from EntityLayer.TipoProductoEntity import *
from EntityLayer.MarcaEntity import *
from EntityLayer.ModeloEntity import *

from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

GeneralRouter = APIRouter()
ApiName = "General"


@GeneralRouter.get(f"/api/{ApiName}/GetCategoriaItemLike/{{Nombre}}/", tags=[ApiName])
def GetCategoriaItemLike(Nombre: str):
    try:
        jsonData = Categoria.GetItemLike(Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/GetCategoriaItem/{{Id}}/", tags=[ApiName])
def GetCategoriaItem(Id: int):
    try:
        jsonData = Categoria.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(
    f"/api/{ApiName}/GetTipoProductoItemLike/{{Nombre}}/", tags=[ApiName]
)
def GetTipoProductoItemLike(Nombre: str):
    try:
        jsonData = TipoProducto.GetItemLike(Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/GetTipoProductoItem/{{Id}}/", tags=[ApiName])
def GetTipoProductoItem(Id: int):
    try:
        jsonData = TipoProducto.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/GetMarcaItemLike/{{Nombre}}/", tags=[ApiName])
def GetMarcaItemLike(Nombre: str):
    try:
        jsonData = Marca.GetItemLike(Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



@GeneralRouter.get(f"/api/{ApiName}/GetMarcaItem/{{Id}}/", tags=[ApiName])
def GetMarcaItem(Id: int):
    try:
        jsonData = Marca.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



@GeneralRouter.get(f"/api/{ApiName}/GetModeloItemLike/{{Nombre}}/", tags=[ApiName])
def GetModeloItemLike(Nombre: str):
    try:
        jsonData = Modelo.GetItemLike(Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@GeneralRouter.get(f"/api/{ApiName}/GetModeloItem/{{Id}}/", tags=[ApiName])
def GetModeloItem(Id: int):
    try:
        jsonData = Modelo.GetItem(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
from fastapi import APIRouter
from BusinessLayer.Categoria import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

CategoriaRouter = APIRouter()
ApiName = "Categoria"


@CategoriaRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: CategoriaEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = Categoria.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@CategoriaRouter.get(f"/api/{ApiName}/GetMainItems/", tags=[ApiName])
def GetMainItems():
    try:
        jsonData = Categoria.GetMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@CategoriaRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id):
    try:
        jsonData = Categoria.Delete(Id)
        return jsonable_encoder(jsonData)
    except Exception as e:
        print(e)


@CategoriaRouter.get(f"/api/{ApiName}/GetCategoriaLikeItems/{{Nombre}}", tags=[ApiName])
def GetCategoriaLikeItems(Nombre :str):
    try:
        jsonData = Categoria.GetCategoriaLikeItems(Nombre)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

from fastapi import APIRouter
from BusinessLayer.Categoria import *
from routes.ResponseAPI import *
from fastapi.encoders import jsonable_encoder

CategoriaRouter = APIRouter()
ApiName = "Categoria"

@CategoriaRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: CategoriaEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.CategoriaId = Categoria.Save(Ent)
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




@CategoriaRouter.delete(f"/api/{ApiName}/Delete/{{id}}", tags=[ApiName])
def Delete(Id):
    try:
        jsonData=Categoria.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
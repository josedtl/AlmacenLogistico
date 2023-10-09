from fastapi import APIRouter
from BusinessLayer.Modelo import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI , ResponseAPIError

ModeloRouter = APIRouter()
ApiName = "Modelo"

@ModeloRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: ModeloEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = Modelo.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@ModeloRouter.get(f"/api/{ApiName}/GetMainItems/", tags=[ApiName])
def GetMainItems():
    try:
        jsonData = Modelo.GetMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())




@ModeloRouter.delete(f"/api/{ApiName}/Delete/{{id}}", tags=[ApiName])
def Delete(Id):
    try:
        jsonData=Modelo.Delete(Id)
        return jsonable_encoder(jsonData)
    except Exception as e:
        print(e)
    
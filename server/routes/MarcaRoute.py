from fastapi import APIRouter
from BusinessLayer.Marca import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI , ResponseAPIError

MarcaRouter = APIRouter()
ApiName = "Marca"

@MarcaRouter.post(f"/api/{ApiName}/Save", tags=[ApiName])
def Save(Ent: MarcaEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent = Marca.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@MarcaRouter.get(f"/api/{ApiName}/GetMainItems/", tags=[ApiName])
def GetMainItems():
    try:
        jsonData = Marca.GetMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())




@MarcaRouter.delete(f"/api/{ApiName}/Delete/{{Id}}", tags=[ApiName])
def Delete(Id):
    try:
        jsonData=Marca.Delete(Id)
        return jsonable_encoder(jsonData)
    except Exception as e:
        print(e)
    
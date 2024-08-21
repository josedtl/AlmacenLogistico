from fastapi import APIRouter
from BusinessLayer.Entidad import *
from EntityLayer.PersonaNaturalEntity import *
from fastapi.encoders import jsonable_encoder
from Utilidades.Entidades.ResponseAPI import ResponseAPI, ResponseAPIError

PersonaNaturalRouter = APIRouter()
ApiName = "PersonaNatural"

@PersonaNaturalRouter.get(f"/api/{ApiName}/ObtenerMain", tags=[ApiName])
def ObtenerMain():
    try:
        jsonData = Entidad.PersonaNaturalObtenerMain()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())

@PersonaNaturalRouter.get(f"/api/{ApiName}/ObtenerItem/{{PersonaNaturalId}}/", tags=[ApiName])
def ObtenerItem(PersonaNaturalId: int):
    try:
        jsonData = Entidad.PersonaNaturalObtenerItem(PersonaNaturalId)
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())



@PersonaNaturalRouter.post(f"/api/{ApiName}/Registrar", tags=[ApiName])
def Registrar(Ent: PersonaNaturalSaveModel):
    try:
        Ent = Entidad.PersonaNaturalRegistrar(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


from fastapi import APIRouter
from BusinessLayer.Categoria import *
from routes.ResponseAPI import *
from fastapi.encoders import jsonable_encoder

CategoriaRouter = APIRouter()


@CategoriaRouter.post("/api/Categoria/Save", tags=["Categoria"])
def Categoria_Save(Ent: CategoriaEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.CategoriaId = Categoria.Save(Ent)
        return jsonable_encoder(ResponseAPI.Response(Ent))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())


@CategoriaRouter.get("/api/Categoria/GetMainItems/", tags=["Categoria"])
def GetMainItems():
    try:
        jsonData = Categoria.GetMainItems()
        return jsonable_encoder(ResponseAPI.Response(jsonData))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())




@CategoriaRouter.delete("/api/Categoria/Delete/{id}", tags=["Categoria"])
def MarcaDelete(Id):
    try:
        jsonData = Categoria.Delete(Id)
        return jsonable_encoder(ResponseAPI.Response(True))
    except Exception as e:
        print(e)
        return jsonable_encoder(ResponseAPIError.Error())
    
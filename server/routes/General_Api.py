from fastapi import APIRouter
from BusinessLayer.Producto_Business import *
from BusinessLayer.Marca_Business import *
from EntityLayer.Catalogo.MarcaSaveEntity import *
from BusinessLayer.Modelo_Business import *
from EntityLayer.Catalogo.ModeloSaveEntity import *

General = APIRouter()


@General.get("/api/General/Get_ProductoItems/", tags=["General"])
def Get_ProductoItems():
    try:
        jsonData = Producto_Business.Get_ProductoItems()
        return jsonData
    except:
        print("An exception occurred")


@General.get("/api/General/Get_MarcaItems/", tags=["General"])
def Get_MarcaItems():
    try:
        jsonData = Marca_Business.Get_MarcaItems()
        return jsonData
    except:
        print("An exception occurred")



@General.post("/api/General/Marca_Insert", tags=["General"])
def Horario_Insert(Ent: MarcaSaveEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.Estado = True
        Ent.MarcaId = Marca_Business.SaveMarca(Ent)
        return Ent
    
    except Exception as e:
        print(e)

@General.delete("/api/General/Marca_Delete/{id}", tags=["General"])
def Marca_Delete(id):
    try:
        jsonData = Marca_Business.DeleteMarca(id)
        return True
    except Exception as e:
        print(e)





@General.get("/api/General/Get_ModeloItems/", tags=["General"])
def Get_ModeloItems():
    try:
        jsonData = Modelo_Business.Get_ModeloItems()
        return jsonData
    except:
        print("An exception occurred")



@General.post("/api/General/Modelo_Insert", tags=["General"])
def Horario_Insert(Ent: ModeloSaveEntity):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.Estado = True
        Ent.ModeloId = Modelo_Business.SaveModelo(Ent)
        return Ent
    
    except Exception as e:
        print(e)

@General.delete("/api/General/Modelo_Delete/{id}", tags=["General"])
def Modelo_Delete(id):
    try:
        jsonData = Modelo_Business.DeleteModelo(id)
        return True
    except Exception as e:
        print(e)
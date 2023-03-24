from fastapi import APIRouter
from BusinessLayer.Producto_Business import *

General = APIRouter()


@General.get("/api/General/Get_ProductoItems/", tags=["General"])
def Get_ProductoItems():
    try:
        jsonData = Producto_Business.Get_ProductoItems()
        return jsonData
    except:
        print("An exception occurred")


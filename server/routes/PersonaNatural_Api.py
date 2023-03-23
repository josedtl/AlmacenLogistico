from fastapi import APIRouter
from BusinessLayer.PersonaNatural_Business import *
from EntityLayer.PersonaNatural.PersonaNaturalModel import *

PersonaNatural = APIRouter()


@PersonaNatural.get("/Get_PersonaNaturalItems", tags=["PersonaNatural"])
def Get_PersonaNaturalItems():
    try:
        jsonData = PersonaNatural_Business.Get_PersonaNaturalItems()
        return jsonData
    except:
        print("An exception occurred")


@PersonaNatural.post("/Post_PersonaNatural_Insert", tags=["PersonaNatural"])
def Post_PersonaNatural_Insertaa(Ent: PersonaNaturalSave):
    try:

        Ent.PersonaId = 0
        Ent.TipoDocumentoIdentidadId = 1
        Ent.FechaNacimiento = datetime.now
        Ent.FechaVencimiento = datetime.now
        Ent.TipoSexoId = 1
        Ent.EstadoCivilId = 1
        Ent.Direccion = "FG"
        Ent.DireccionReferencia = "DRE"
        Ent.UbigeoId = 0
        Ent.FechaRegistro = datetime.now
        Ent.UsuarioRegistro = "adm"
        Ent.EstadoRegistro = True
        jsonData = PersonaNatural_Business.Post_PersonaNatural_Insert(Ent)

        return True
    except:
        print("An exception occurred")


@PersonaNatural.delete("/PersonaNatural_Delete/<Id>", tags=["PersonaNatural"])
def Post_PersonaNatural_Deletee(Id):
    try:
        jsonData = PersonaNatural_Business.Post_PersonaNatural_Delete(Id)
        return True
    except:
        print("An exception occurred")


@PersonaNatural.post("/update_PersonaNatural_Insert", tags=["PersonaNatural"])
def Update_PersonaNatural_Insert(Ent: PersonaNaturalSave):
    try:
        jsonData = PersonaNatural_Business.Update_PersonaNatural_Insert(Ent)
        return jsonData
    except:
        print("An exception occurred")

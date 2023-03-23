from fastapi import FastAPI
from routes.PersonaNatural_Api import PersonaNatural
from routes.Usuario_Api import Usuario
from routes.Horario_Api import Horario
from routes.Turno_Api import Turno
from routes.General_Api import General

app = FastAPI( title="Adcode",   description='Sistema de asistencia  ',)

app.include_router(PersonaNatural)
app.include_router(Usuario)
app.include_router(Horario)
app.include_router(Turno)
app.include_router(General)

tags_metadata = [
    {
        "name": "PersonaNatural",
        "description": "Tabla Persona Natural todos sus metodos",
    },
    # {
    #     "name": "items",
    #     "description": "Manage items. So _fancy_ they have their own docs.",
    #     "externalDocs": {
    #         "description": "Items external docs",
    #         "url": "https://fastapi.tiangolo.com/",
    #     },
    # },
]


# from fastapi import FastAPI
# from datetime import datetime
# from uuid import uuid4 as uuid
# from BusinessLayer.PersonaNatural_Business import *
# from EntityLayer.PersonaNatural.PersonaNaturalModel import *

# app = FastAPI()

# @app.get('/Get_PersonaNaturalItems')
# def Get_PersonaNaturalItems():
#     try:
#         jsonData = PersonaNatural_Business.Get_PersonaNaturalItems()
#         return jsonData
#     except:
#         print("An exception occurred")

# @app.post('/Post_PersonaNatural_Insert')
# def Post_PersonaNatural_Insertaa(Ent : PersonaNaturalSave):
#     try:

#         Ent.PERID = 0
#         Ent.TIP_DOCID = 1
#         Ent.FEC_NAC = datetime.now
#         Ent.FEC_VEC = datetime.now
#         Ent.TIP_SEXID = 1
#         Ent.TIP_CIVID = 1
#         Ent.DIR = 'FG'
#         Ent.DIR_REF = 'DRE'
#         Ent.UBIID = 0
#         Ent.FEC_REG = datetime.now
#         Ent.USU_REG = 'adm'
#         Ent.EST_REG = True
#         jsonData = PersonaNatural_Business.Post_PersonaNatural_Insert(Ent)

  
#         return True
#     except:
#         print("An exception occurred")



# @app.delete('/PersonaNatural_Delete/<Id>')
# def Post_PersonaNatural_Deletee(Id):
#     try:
#         jsonData = PersonaNatural_Business.Post_PersonaNatural_Delete(
#             Id)
#         return True
#     except:
#         print("An exception occurred")


# @app.post('/update_PersonaNatural_Insert')
# def Update_PersonaNatural_Insert(Ent : PersonaNaturalSave):
#     try:
#         jsonData = PersonaNatural_Business.Update_PersonaNatural_Insert(Ent)
#         return jsonData
#     except:
#         print("An exception occurred")
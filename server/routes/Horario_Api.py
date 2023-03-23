from fastapi import APIRouter
from BusinessLayer.Horario_Business import *
from EntityLayer.Horario.HorarioSaveModel import *
from EntityLayer.Horario.HorarioPrueba import *
Horario = APIRouter()



@Horario.post("/api/Horario_Insert", tags=["Horario"])
def Horario_Insert(Ent: HorarioSaveModel):
    try:
        Ent.FechaRegistro = datetime.now()
        Ent.EstadoRegistro = True
        jsonData = Horario_Business.SaveHorario(Ent)
        return jsonData
    except Exception as e:
        print(e)

@Horario.post("/api/Horario_InsertPrueba", tags=["Horario"])
def Horario_Insert(Ent: HorarioPrueba):
    try:
        print(Ent)
        return Ent.Nombre
    except Exception as e:
        print(e)

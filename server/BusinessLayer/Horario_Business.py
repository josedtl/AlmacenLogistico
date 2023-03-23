from DataLayer.Horario_Data import *
from EntityLayer.Horario.HorarioSaveModel import *

class Horario_Business:
    def SaveHorario(Ent: HorarioSaveModel):
        try:
            data = Horario_Data.SaveHorario(Ent)
            return data
        except Exception as e:
            print(e)

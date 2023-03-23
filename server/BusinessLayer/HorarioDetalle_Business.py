from DataLayer.HorarioDetalle_Data import *
from EntityLayer.Horario.HorarioDetalleModel import *

class HorarioDetalle_Business:
    def SaveHorarioDetalle(Ent: HorarioDetalleModel):
        try:
            data = HorarioDetalle_Data.SaveHorarioDetalle(Ent)
            return data
        except Exception as e:
            print(e)

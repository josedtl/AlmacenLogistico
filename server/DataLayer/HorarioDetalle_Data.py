from .configMysql import get_connection
from EntityLayer.Horario.HorarioDetalleModel import *
import pymysql


class HorarioDetalle_Data:
    def SaveHorarioDetalle(Ent: HorarioDetalleModel):
        try:
            conn = get_connection()
            with conn.cursor() as cursor:
                cursor = conn.cursor(pymysql.cursors.DictCursor)
                args = (
                    Ent.HorarioDetalleId,
                    Ent.HorarioId,
                    Ent.Items,
                    Ent.Hora,
                    Ent.Minuto,
                    Ent.TipoSecuenciaMarcacionId,
                    Ent.FlaInicio,
                )

                result_args = cursor.callproc("sp_HorarioDetallelInsert", args)
                for result in cursor.fetchall():
                    Ent.HorarioDetalleId = result["v_HorarioDetalleId"]

            conn.commit()
            print(result_args[0])
            return Ent.HorarioDetalleId
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

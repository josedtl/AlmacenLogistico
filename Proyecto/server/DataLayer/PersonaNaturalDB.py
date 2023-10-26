from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.PersonaNaturalEntity import *


class PersonaNaturalDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_PersonaNaturalAllItems", [])
            list = [PersonaNaturalItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_PersonaNaturalAllItem", args)
            list = [PersonaNaturalItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: PersonaNaturalSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_PersonaNatural_Update",
                ProcessActionEnum.Add: "sp_PersonaNatural_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_PersonaNatural_Save")
            args = []
            args.append(Ent.PersonaNaturalId)
            args.append(Ent.TipoDocumentoIdentidadId)
            args.append(Ent.NumDocumento)
            args.append(Ent.Nombres)
            args.append(Ent.ApellidoPaterno)
            args.append(Ent.ApellidoMaterno)
            args.append(Ent.FechaNacimiento)
            args.append(Ent.UbigeoId)
            args.append(Ent.Direccion)
            args.append(Ent.Telefono)
            args.append(Ent.Correo)
            args.append(Ent.SexoId)
            args.append(Ent.EstadoCivilId)
            args.append(Ent.FechaRegistro)
            args.append(Ent.CodUsuario)
            args.append(Ent.EstadoRegistro)
            Ent.PersonaNaturalId = DBProcedure().DBProcedureInsertUpdate(Store, args, "v_PersonaNaturalId")

            return Ent
        except Exception as e:
            print(e)
            Restore()
    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_PersonaNatural_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_PersonaNaturalItemLike", args)
            list = [PersonaNaturalItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
             print(e)


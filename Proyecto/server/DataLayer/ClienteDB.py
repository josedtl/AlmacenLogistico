from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.ClienteEntity import *


class ClienteDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_ClienteAllItems", [])
            list = [ClienteItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_ClienteAllItem", args)
            list = [ClienteItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: ClienteSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Cliente_Update",
                ProcessActionEnum.Add: "sp_Cliente_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Cliente_Save")
            args = []
            args.append(Ent.ClienteId)
            args.append(Ent.EsEmpresa)
            args.append(Ent.TipoDocumentoId)
            args.append(Ent.NumDocumento)
            args.append(Ent.Nombre)
            args.append(Ent.Estado)
            Ent.ClienteId = DBProcedure().DBProcedureInsertUpdate(Store, args, "v_ClienteId")

            return Ent
        except Exception as e:
            print(e)
            Restore()
    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_Cliente_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_ClienteItemLike", args)
            list = [ClienteItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
             print(e)
from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.UbigeoEntity import *


class UbigeoDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_UbigeoAllItems", [])
            list = [UbigeoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_UbigeoAllItem", args)
            list = [UbigeoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: UbigeoSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Ubigeo_Update",
                ProcessActionEnum.Add: "sp_Ubigeo_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Ubigeo_Save")
            args = []
            args.append(Ent.UbigeoId)
            args.append(Ent.CodUbigeo)
            args.append(Ent.DesUbigeo)
            args.append(Ent.DepartamentoId)
            args.append(Ent.ProvinciaId)
            args.append(Ent.DistritoId)
            Ent.UbigeoId = DBProcedure().DBProcedureInsertUpdate(Store, args, "v_UbigeoId")

            return Ent
        except Exception as e:
            print(e)
            Restore()
    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_Ubigeo_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_UbigeoItemLike", args)
            list = [UbigeoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
             print(e)

from Utilidades.Entidades.ResponseAPI import ResponseAPI
from Utilidades.Conexion.ErrorData import ErrorData
from Utilidades.Conexion.configMysql import DBProcedure, Restore
from EntityLayer.UbigeoEntity import *


class UbigeoDB:
    def GetItems():
        try:
            resulset = DBProcedure().DBProcedureConsult("sp_UbigeoAllItems", [])
            list = [UbigeoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def GetItem(Id: int):
        try:
            args = (Id,)
            resulset = DBProcedure().DBProcedureConsult("sp_UbigeoAllItem", args)
            list = [UbigeoItemModel.Cargar(row) for row in resulset]
            return list
        except Exception as e:
            print(e)

    def Save(Ent: UbigeoSaveModel):
        try:
            store_mapping = {
                ProcessActionEnum.Update: "sp_Ubigeo_Update",
                ProcessActionEnum.Add: "sp_Ubigeo_Save",
            }
            Store = store_mapping.get(Ent.Action, "sp_Ubigeo_Save")
            args = []
            args.append(Ent.UbigeoId)
            args.append(Ent.CodUbigeo)
            args.append(Ent.DesUbigeo)
            args.append(Ent.DepartamentoId)
            args.append(Ent.ProvinciaId)
            args.append(Ent.DistritoId)
            Ent.UbigeoId = DBProcedure().DBProcedureInsertUpdate(Store, args, "v_UbigeoId")

            return Ent
        except Exception as e:
            print(e)
            Restore()
    def Delete(Id: int):
        try:
            args = (Id,)
            Val = DBProcedure().DBProcedureDalete("sp_Ubigeo_Delete", args)
            return ResponseAPI.Response(Val)
        except Exception as e:
            ErrorData(e)

    def GetItemLike(Nombre: str):
        try:
            args = (Nombre,)
            resulset = DBProcedure().DBProcedureConsult("sp_UbigeoItemLike", args)
            list = [UbigeoItemModel.CargarLike(row) for row in resulset]
            return list
        except Exception as e:
             print(e)



from DataLayer.EntidadDB import *
from EntityLayer.EmpresaEntity import *
from Utilidades.Conexion.configMysql import StartTransaction, EndTransaction, Restore


class Entidad:

    def PersonaNaturalObtenerMain():
        try:
            return EntidadDB.PersonaNaturalObtenerMain()
        except Exception as e:
            print(e)

    def PersonaNaturalObtenerItem(PersonaNaturalId: int):
        try:
            return EntidadDB.PersonaNaturalObtenerItem(PersonaNaturalId)
        except Exception as e:
            print(e)
            
    def PersonaNaturalRegistrar(Ent: PersonaNaturalSaveModel):
        try:
            StartTransaction()
            data = EntidadDB.PersonaNaturalRegistrarDB(Ent)
            EndTransaction()
            return data.PersonaNaturalId
        except Exception as e:
            Restore()
            print(e)
    

    def PersonaNaturalRegistrarEnlace(Ent: DatosClienteItemModel):
        try:
            StartTransaction()
            data = EntidadDB.PersonaNaturalRegistrarEnlaceDB(Ent)
            EndTransaction()
            return data.EntidadId
        except Exception as e:
            Restore()
            print(e)
    
    
    def EmpresaObtenerMain():
        try:
            return EntidadDB.EmpresaObtenerMain()
        except Exception as e:
            print(e)

    def EmpresaObtenerItem(EmpresaId: int):
        try:
            return EntidadDB.EmpresaObtenerItem(EmpresaId)
        except Exception as e:
            print(e)
            
    def EmpresaRegistrar(Ent: EmpresaSaveModel):
        try:
            StartTransaction()
            data = EntidadDB.EmpresaRegistrar(Ent)
            EndTransaction()
            return data.EntidadId
        except Exception as e:
            Restore()
            print(e)

    def EntidadBuscarNombreCompletoItem(Nombre: str):
        try:
            return EntidadDB.EntidadBuscarNombreCompletoItem(Nombre)
        except Exception as e:
            print(e)

    def EntidadObtenerNombreCompletoItem(EntidadId: int):
        try:
            return EntidadDB.EntidadObtenerNombreCompletoItem(EntidadId)
        except Exception as e:
            print(e)

    def EmpresaRegistrarEnlace(Ent: DatosClienteItemModel):
        try:
            StartTransaction()
            data = EntidadDB.EmpresaRegistrarEnlace(Ent)
            EndTransaction()
            return data.EntidadId
        except Exception as e:
            Restore()
            print(e)
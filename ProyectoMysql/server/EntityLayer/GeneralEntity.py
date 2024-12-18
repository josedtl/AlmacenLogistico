
from pydantic import BaseModel,validator


class DatosClienteItemModel (BaseModel):
    TipoEntidadId: int = 0
    EntidadId: int = 0
    TipoDocumentoIdentidadId: int = 0
    NumDocumento: int = 0
    CodUsuario: int = 0
    Nombres: int = 0
    ApellidoPaterno: int = 0
    ApellidoMaterno: int = 0
    NombreComercial: int = 0
    
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)  
    
    
class EntidadNombreCompletoModel(BaseModel):
    EntidadId: int = 0
    Nombres: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class EstadoProcesoModel(BaseModel):
    EstadoProcesoId: int = 0
    Nombre: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class ProcesoItemModel(BaseModel):
    ProcesoId: int = 0
    Nombre: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
    
class RecepListaModel(BaseModel):
    ListaId: int = 0
    Nombre: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class TipoEntidadModel(BaseModel):
    TipoEntidadId: int = 0
    Codigo: str = ''
    Nombre: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class UbigeoItemModel(BaseModel):
    UbigeoId: int = 0
    DesUbigeo: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)

class UnidadMedidaItemModel(BaseModel):
    UnidadMedidaId: int = 0
    Codigo: str = ''
    CodigoComercial: str = ''
    Nombre: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
    
class MonedaModel(BaseModel):
    MonedaId: int = 0
    CodMoneda: str = ''
    Simbolo: str = ''
    Descripcion: str = ''
    
    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
    
class PorcentajeImpuestoModel(BaseModel):
    PorcentajeImpuestoId : int = 0
    Nombre : str = ''
    Descripcion : str = ''
    Valor : float = 0
    ValorOperacion : float = 0
    EstadoRegistro : bool = False

    @validator('EstadoRegistro', pre=True)
    def convertir_a_bool(cls, v: any) -> bool:
        if isinstance(v, str):
            if v.lower() in ('true', '1'):
                return True
            elif v.lower() in ('false', '0'):
                return False
        return bool(v)
    

    @classmethod
    def Cargar(cls, _DB):
        return cls.parse_obj(_DB)
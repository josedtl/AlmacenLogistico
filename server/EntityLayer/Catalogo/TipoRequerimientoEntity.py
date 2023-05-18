class TipoRequerimientoEntity:
    TipoRequerimientoId :int	
    Codigo	:str
    Nombre:str

    def Cargar(_DB: any):
        c = TipoRequerimientoEntity()
        c.TipoRequerimientoId = _DB['TipoRequerimientoId']
        c.Codigo = _DB['Codigo']
        c.Nombre = _DB['Nombre']
        return c

 
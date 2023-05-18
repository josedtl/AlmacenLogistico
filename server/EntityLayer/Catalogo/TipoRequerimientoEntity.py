class TipoRequerimientoEntity:
    TipoRequerimirentoId :int	
    Codigo	:str
    Nombre:str

    def Cargar(_DB: any):
        c = TipoRequerimientoEntity()
        c.TipoRequerimirentoId = _DB['TipoRequerimirentoId']
        c.Codigo = _DB['Codigo']
        c.Nombre = _DB['Nombre']
        return c

 
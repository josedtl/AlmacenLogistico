class SelectAtributosModel:
    value :int	
    label	:str


    
    def CargarUnidadMedida(_DB: any):
        c = SelectAtributosModel()
        c.value = _DB['UnidadMedidaId']
        c.label = _DB['Nombre']
        return c
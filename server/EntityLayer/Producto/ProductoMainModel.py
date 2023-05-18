class ProductoMainModel:
    ProductoId: int
    Codigo: str
    CodigoInterno: str
    NomTipoProducto: str
    NomMarca: str
    NomModelo: str
    CodigoComercial: str
    Descripcion: str

    def Cargar(_DB: any):
        c = ProductoMainModel()
        c.ProductoId = _DB['ProductoId']
        c.Codigo = _DB['Codigo']
        c.CodigoInterno = _DB['CodigoInterno']
        c.NomTipoProducto = _DB['NomTipoProducto']
        c.NomMarca = _DB['NomMarca']
        c.NomModelo = _DB['NomModelo']
        c.CodigoComercial = _DB['CodigoComercial']
        c.Descripcion = _DB['Descripcion']
        return c

    def CargarLike(_DB: any):
        c = ProductoMainModel()
        c.ProductoId = _DB['ProductoId']
        c.NomTipoProducto = _DB['NomTipoProducto']
        return c


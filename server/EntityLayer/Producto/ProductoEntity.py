class ProductoLikeModel:
    ProductoId: int
    Nombre: str

    def CargarLike(_DB: any):
        c = ProductoLikeModel()
        c.ProductoId = _DB['ProductoId']
        c.Nombre = _DB['Nombre']
        return c

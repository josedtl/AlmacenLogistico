from ariadne import QueryType, make_executable_schema, load_schema_from_path, gql
from ariadne.asgi import GraphQL
from BusinessLayer.Categoria import Categoria
from BusinessLayer.TipoProducto import TipoProducto
from BusinessLayer.Marca import Marca
from BusinessLayer.Modelo import Modelo
from BusinessLayer.UnidadMedida import UnidadMedida
from BusinessLayer.Producto import Producto
from BusinessLayer.TipoProceso import TipoProceso
type_defs = load_schema_from_path("types.graphql")

query = QueryType()


@query.field("GHCategoriaItems")
def resolve_GHCategoriaItems(_self, info):
    list = Categoria.GetItems()
    return list


@query.field("GHCategoriaItem")
def resolve_GHCategoriaItem(_self, info, Id):
    list = Categoria.GetItem(Id)
    return list


@query.field("GHCategoriaItemLike")
def resolve_GHCategoriaItemLike(_self, info, Nombre):
    list = Categoria.GetItemLike(Nombre)
    return list


@query.field("GHTipoProductoItems")
def resolve_GHTipoProductoItems(_self, info):
    list = TipoProducto.GetItems()
    return list


@query.field("GHTipoProductoItem")
def resolve_GHTipoProductoItem(_self, info, Id):
    list = TipoProducto.GetItem(Id)
    return list


@query.field("GHTipoProductoItemLike")
def resolve_GHTipoProductoItemLike(_self, info, Nombre):
    list = TipoProducto.GetItemLike(Nombre)
    return list


@query.field("GHMarcaItems")
def resolve_GHMarcaItems(_self, info):
    list = Marca.GetItems()
    return list


@query.field("GHMarcaItem")
def resolve_GHMarcaItem(_self, info, Id):
    list = Marca.GetItem(Id)
    return list


@query.field("GHMarcaItemLike")
def resolve_GHMarcaItemLike(_self, info, Nombre):
    list = Marca.GetItemLike(Nombre)
    return list


@query.field("GHModeloItems")
def resolve_GHModeloItems(_self, info):
    list = Modelo.GetItems()
    return list


@query.field("GHModeloItem")
def resolve_GHModeloItem(_self, info, Id):
    list = Modelo.GetItem(Id)
    return list


@query.field("GHModeloItemLike")
def resolve_GHModeloItemLike(_self, info, Nombre):
    list = Modelo.GetItemLike(Nombre)
    return list


@query.field("GHUnidadMedidaItems")
def resolve_GHUnidadMedidaItems(_self, info):
    list = UnidadMedida.GetItems()
    return list


@query.field("GHUnidadMedidaItem")
def resolve_GHUnidadMedidaItem(_self, info, Id):
    list = UnidadMedida.GetItem(Id)
    return list


@query.field("GHProductoItems")
def resolve_GHProductoItems(_self, info):
    list = Producto.GetItems()
    return list


@query.field("GHProductoItem")
def resolve_GHProductoItem(_self, info, Id):
    list = Producto.GetItem(Id)
    return list


@query.field("GHProductoItemLike")
def resolve_GHProductoItemLike(_self, info, Nombre):
    list = Producto.GetItemLike(Nombre)
    return list


@query.field("GHProductoItemLikeOP")
def resolve_GHProductoItemLikeOP(_self, info, Nombre, CategoriaId):
    list = Producto.GetItemLikeOP(Nombre, CategoriaId)
    return list

@query.field("GHProductoItemOP")
def resolve_GHProductoItemOP(_self, info, Id):
    list = Producto.GetProductoItemOP(Id)
    return list

@query.field("GHTipoProcesoItems")
def resolve_GHTipoProcesoItems(_self, info):
    list = TipoProceso.GetItems()
    return list

schema = make_executable_schema(type_defs, query)

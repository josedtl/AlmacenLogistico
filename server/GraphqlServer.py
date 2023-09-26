from ariadne import QueryType, make_executable_schema, load_schema_from_path, gql
from ariadne.asgi import GraphQL
from BusinessLayer.Categoria import Categoria



type_defs = load_schema_from_path("types.graphql")

query = QueryType()
personas = [
    {"PersonaId": 1, "Nombre": "John", "Apellido": "Doe"},
    {"PersonaId": 2, "Nombre": "Jane", "Apellido": "Smith"},
    {"PersonaId": 3, "Nombre": "Jane", "Apellido": "Smith"},
]


@query.field("personas")
def resolve_personas(_, info):
    return personas

@query.field("categorias")
def resolve_categorias(_, info):
    list = Categoria.GetMainItems()
    return list


schema = make_executable_schema(type_defs, query)
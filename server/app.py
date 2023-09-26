from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routes.CategoriaRoute import CategoriaRouter
from routes.TipoProductoRoute import TipoProductoRouter
from routes.ModeloRoute import ModeloRouter
from routes.MarcaRoute import MarcaRouter
from routes.ProductoRoute import ProductoRouter
from ariadne import QueryType, make_executable_schema, load_schema_from_path, gql
from ariadne.asgi import GraphQL
from GraphqlServer import schema
app = FastAPI(
    title="Adcode",
    description="Sistema logistico  ",
)
# type_defs = load_schema_from_path("types.graphql")

# query = QueryType()
# personas = [
#     {"PersonaId": 1, "Nombre": "John", "Apellido": "Doe"},
#     {"PersonaId": 2, "Nombre": "Jane", "Apellido": "Smith"},
#     {"PersonaId": 2, "Nombre": "Jane", "Apellido": "Smith"},
# ]


# @query.field("personas")
# def resolve_personas(_, info):
#     return personas


# schema = make_executable_schema(type_defs, query)

origins = [
    "http://localhost:5042",
    "http://localhost:3000",
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# app.include_router(PersonaNatural)
# app.include_router(Usuario)
# app.include_router(Horario)
# app.include_router(Turno)
app.add_route("/graphql", GraphQL(schema))
app.include_router(CategoriaRouter)
app.include_router(TipoProductoRouter)
app.include_router(ModeloRouter)
app.include_router(MarcaRouter)
app.include_router(ProductoRouter)

tags_metadata = [
    {
        "name": "PersonaNatural",
        "description": "Tabla Persona Natural todos sus metodos",
    },
    # {
    #     "name": "items",
    #     "description": "Manage items. So _fancy_ they have their own docs.",
    #     "externalDocs": {
    #         "description": "Items external docs",
    #         "url": "https://fastapi.tiangolo.com/",
    #     },
    # },
]

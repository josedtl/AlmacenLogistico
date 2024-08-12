from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routes.EmpresaRoute import EmpresaRouter
from routes.OrdenCompraRoute import OrdenCompraRouter
from routes.OrdenPedidoRoute import OrdenPedidoRouter
from routes.PersonaNaturalRoute import PersonaNaturalRouter
from routes.GeneralRoute import GeneralRouter
from routes.EntListaRouter import EntListaRouter
from routes.MerListaRouter import MerListaRouter
from routes.MercaderiaRoute import MercaderiaRouter
from routes.RecepcionRoute import RecepcionRouter
from routes.ReservaRoute import ReservaRouter
from routes.DespachoRoute import DespachoRouter
from ariadne.asgi import GraphQL
from GraphqlServer import schema

app = FastAPI(
    title="SL",
    description="Sistema logistico ",
)

origins = [
    "http://localhost:5042",
    "http://localhost:3000",
    "http://192.168.18.19:3000",
    "http://192.168.18.19:5173",
    "http://localhost:5173",
    "http://192.168.18.12:5173",
    "http://localhost:7030",
    "http://192.168.18.19:7030",
    "http://localhost:7040",
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


app.add_route("/gql/General", GraphQL(schema))
app.include_router(EmpresaRouter)
app.include_router(OrdenCompraRouter)
app.include_router(OrdenPedidoRouter)
app.include_router(PersonaNaturalRouter)
app.include_router(GeneralRouter)
app.include_router(EntListaRouter)
app.include_router(MerListaRouter)
app.include_router(MercaderiaRouter)
app.include_router(RecepcionRouter)
app.include_router(ReservaRouter)
app.include_router(DespachoRouter)

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

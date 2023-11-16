from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routes.AreaRoute import AreaRouter
from routes.CargoRoute import CargoRouter
from routes.CategoriaRoute import CategoriaRouter
from routes.ClienteEmpresaRoute import ClienteEmpresaRouter
from routes.ClienteRoute import ClienteRouter
from routes.ClientePersonaNaturalRoute import ClientePersonaNaturalRouter
from routes.CorrelativoRoute import CorrelativoRouter
from routes.DepartamentoRoute import DepartamentoRouter
from routes.DistritoRoute import DistritoRouter
from routes.EmpleadoRoute import EmpleadoRouter
from routes.EmpresaRoute import EmpresaRouter
from routes.EstadoProcesoRoute import EstadoProcesoRouter
from routes.MarcaRoute import MarcaRouter
from routes.ModeloRoute import ModeloRouter
from routes.ModuloSistemaRoute import ModuloSistemaRouter
from routes.MonedaRoute import MonedaRouter
from routes.OrdenCompraControlProcesoRoute import OrdenCompraControlProcesoRouter
from routes.OrdenCompraDetalleRoute import OrdenCompraDetalleRouter
from routes.OrdenCompraRoute import OrdenCompraRouter
from routes.OrdenCompraPedidoEnlaceRoute import OrdenCompraPedidoEnlaceRouter
from routes.OrdenPedidoControlProcesoRoute import OrdenPedidoControlProcesoRouter
from routes.OrdenPedidoRoute import OrdenPedidoRouter
from routes.PersonaNaturalRoute import PersonaNaturalRouter
from routes.ProcesoRoute import ProcesoRouter
from routes.ProcesoSecuenciaRoute import ProcesoSecuenciaRouter
from routes.ProductoRoute import ProductoRouter
from routes.ProveedorEmpresaRoute import ProveedorEmpresaRouter
from routes.ProveedorRoute import ProveedorRouter
from routes.ProveedorPersonaNaturalRoute import ProveedorPersonaNaturalRouter
from routes.ProvinciaRoute import ProvinciaRouter
from routes.TarifaProductoRoute import TarifaProductoRouter
from routes.TipoDocumentoIdentidadRoute import TipoDocumentoIdentidadRouter
from routes.TipoDocumentoRoute import TipoDocumentoRouter
from routes.TipoProcesoRoute import TipoProcesoRouter
from routes.TipoProductoRoute import TipoProductoRouter
from routes.UbigeoRoute import UbigeoRouter
from routes.UnidadMedidaRoute import UnidadMedidaRouter
from routes.UsuarioRoute import UsuarioRouter
from routes.GeneralRoute import GeneralRouter
from ariadne.asgi import GraphQL
from GraphqlServer import schema
app = FastAPI(
    title="SL",
    description="Sistema logistico  ",
)

origins = [
    "http://localhost:5042",
    "http://localhost:3000",
    "http://192.168.18.19:3000",
    "http://192.168.18.19:5173",
    "http://localhost:5173",
    "http://192.168.18.12:5173",
    "http://localhost:7030",
    "http://192.168.18.19:7030"
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
app.include_router(TipoProductoRouter)



app.include_router(AreaRouter)                               
app.include_router(CargoRouter)
app.include_router(CategoriaRouter)
app.include_router(ClienteEmpresaRouter)
app.include_router( ClienteRouter)
app.include_router(ClientePersonaNaturalRouter)
app.include_router(CorrelativoRouter)
app.include_router(DepartamentoRouter)
app.include_router( DistritoRouter)
app.include_router( EmpleadoRouter)
app.include_router( EmpresaRouter)
app.include_router(EstadoProcesoRouter)
app.include_router(MarcaRouter)
app.include_router(ModeloRouter)
app.include_router(ModuloSistemaRouter)
app.include_router(MonedaRouter)
app.include_router(OrdenCompraControlProcesoRouter)
app.include_router(OrdenCompraRouter)
app.include_router(OrdenCompraPedidoEnlaceRouter)
app.include_router(OrdenPedidoControlProcesoRouter)
app.include_router(OrdenCompraDetalleRouter)
app.include_router(OrdenPedidoRouter)
app.include_router(PersonaNaturalRouter)
app.include_router(ProcesoRouter)
app.include_router(ProcesoSecuenciaRouter)
app.include_router(ProductoRouter)
app.include_router(ProveedorEmpresaRouter)
app.include_router(ProveedorRouter)
app.include_router(ProveedorPersonaNaturalRouter)
app.include_router(ProvinciaRouter)
app.include_router(TarifaProductoRouter)
app.include_router(TipoDocumentoIdentidadRouter)
app.include_router(TipoDocumentoRouter)
app.include_router(TipoProcesoRouter)
app.include_router(UbigeoRouter)
app.include_router( UnidadMedidaRouter)
app.include_router(UsuarioRouter)
app.include_router(GeneralRouter)

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

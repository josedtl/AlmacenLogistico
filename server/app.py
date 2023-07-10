from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routes.CategoriaRoute import CategoriaRouter

app = FastAPI(title="Adcode",   description='Sistema logistico  ',)

origins = [
    "http://192.168.18.12:3000",
    "http://localhost:3000",
    "http://localhost:5173",

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
app.include_router(CategoriaRouter)
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

from pydantic import BaseModel


class PersonaNaturalSaveDetalle(BaseModel):
    PERID: int
    TIP_DOCID: int

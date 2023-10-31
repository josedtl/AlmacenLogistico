import { ProcessActionEnum } from '../Lib/ResourceModel/Enum'

export class ClienteEntity {
    ClienteId: number;
    EsEmpresa: boolean;
    TipoDocumentoId: number;
    NumDocumento: string;
    Nombre: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    Estado: boolean;
    Action: ProcessActionEnum
    constructor() {
        this.ClienteId = 0;
        this.EsEmpresa = false;
        this.TipoDocumentoId = 0;
        this.NumDocumento = '';
        this.Nombre = '';
        this.ApellidoPaterno = '';
        this.ApellidoMaterno = '';
        this.Estado = false;
        this.Action = ProcessActionEnum.Add;
    }
}

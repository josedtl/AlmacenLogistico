
export class ClienteEntity {
    ClienteId: number;
    EsEmpresa: boolean;
    TipoDocumentoId: number;
    NumDocumento: string;
    Nombre: string;
    ApellidoPaterno: string =''; 
    ApellidoMaterno: string ='';
    Estado: boolean;
    Key:number =0;
    constructor() {
        this.ClienteId = 0;
        this.EsEmpresa = false;
        this.TipoDocumentoId = 0;
        this.NumDocumento = '';
        this.Nombre = '';
        this.ApellidoPaterno = '';
        this.ApellidoMaterno = '';
        this.Estado = false;
        this.Key = 0;
    }
}

export class TipoDocumentoIdentidadEntity {
    TipoDocumentoIdentidadId: number;
    Codigo: string;
    Alias: string;
    Descripcion: string;
    EsEmpresa: boolean;

    constructor() {
        this.TipoDocumentoIdentidadId = 0;
        this.Codigo = '';
        this.Alias = '';
        this.Descripcion = '';
        this.EsEmpresa = false;
    }
}
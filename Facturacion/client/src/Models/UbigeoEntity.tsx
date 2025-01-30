export class UbigeoEntity {
    UbigeoId: number;
    CodUbigeo: number;
    DesUbigeo: string;
    DepartamentoId: number;
    ProvinciaId: number;
    DistritoId: number;

    constructor() {
        this.UbigeoId = 0;
        this.CodUbigeo = 0;
        this.DesUbigeo = '';
        this.DepartamentoId = 0;
        this.ProvinciaId = 0;
        this.DistritoId = 0;
    }
}

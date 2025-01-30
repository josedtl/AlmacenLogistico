export class PorcentajeImporteEntity {
    
    PorcentajeImpuestoId: number;
    Nombre: string;
    Descripcion: string;
    Valor: number;
    ValorOperacion: number;
    constructor() {
        this.PorcentajeImpuestoId = 0;
        this.Nombre = '';
        this.Descripcion = '';
        this.Valor = 0;
        this.ValorOperacion = 0;
    }
}
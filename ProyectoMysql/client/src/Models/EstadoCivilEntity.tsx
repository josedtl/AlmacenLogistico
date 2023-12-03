export class EstadoCivilEntity {
    EstadoCivilId: number;
    Nombre: string;
    EstadoRegistro: boolean;

    constructor() {
        this.EstadoCivilId = 0;
        this.Nombre = '';
        this.EstadoRegistro = false;
    }
}

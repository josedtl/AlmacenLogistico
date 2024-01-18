
export class CargoEntity {
    constructor(
        public Item: number = 0,
        public CargoId: number = 0,
        public Nombre: string = '',
        public FechaRegistro: Date = new Date(),
        public CodUsuario: string = 'adm',
        public EstadoRegistro: boolean = true,
        public Action: number = 0,
        public Seleccion: boolean = false
    ) { }
}

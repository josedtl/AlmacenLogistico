export class ServicioBasicoEntity {
    constructor(
        public Item: number= 0,
        public ServicioBasicoId: number= 0,
        public Codigo:String = '',
        public Nombre: string= '',
        public Descripcion: string = '',
        public FechaRegistro: Date= new Date(),
        public CodUsuario: string = '',
        public EstadoRegistro: boolean = false,
        public Action: number= 0,
        public Seleccion:boolean= false
    ) { }
};
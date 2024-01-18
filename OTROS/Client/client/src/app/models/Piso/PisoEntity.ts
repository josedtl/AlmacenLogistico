export class PisoEntity {
    constructor(
        public Item: number= 0,
        public  PisoId: number= 0,
        public  Codigo: string= '',
        public  Valor:number= 0,
        public FechaRegistro: Date= new Date(),
        public  CodUsuario: string= '',
        public  EstadoRegistro: boolean= false,
        public  Action: number= 0,
        public Seleccion:boolean= false
    ) { }
};

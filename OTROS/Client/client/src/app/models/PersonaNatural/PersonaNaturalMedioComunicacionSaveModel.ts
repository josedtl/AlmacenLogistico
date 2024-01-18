
export class PersonaNaturalMedioComunicacionSaveModel {
    constructor(
        public Item : number=0,
        public PersonaNaturalMedioComunicacionId: number = 0,
        public PersonaNaturalId: number = 0,
        public MedioComunicacionId: number = 0,
        public NomMedioComunicacion: string = '',
        public Dato: string = '',
        public FechaRegistro: Date = new Date,
        public CodUsuario: string = '',
        public EstadoRegistro: boolean = true,
        public Action: number = 0,
    ) { }
}


export class PersonaNaturalMainModel {
    constructor(
        public Item : number=0,
        public PersonaNaturalId: number = 0,
        public NomDocumento: string = '',
        public NumDocumento: string = '',
        public Nombres: string = '',
        public ApellidoPaterno: string = '',
        public ApellidoMaterno: string = '',
        public FechaRegistro: Date = new Date,
        public CodUsuario: string = ''
    ) { }
}

import { PersonaNaturalMedioComunicacionSaveModel } from "./PersonaNaturalMedioComunicacionSaveModel";

export class PersonaNaturalSaveModel {
    constructor(
        public Item: number = 0,
        public PersonaNaturalId: number = 0,
        public TipoDocumentoIdentidadId: number = 0,
        public NumDocumento: string = '',
        public Nombres: string = '',
        public ApellidoPaterno: string = '',
        public ApellidoMaterno: string = '',
        public FechaNacimiento: Date = new Date,
        public UbigeoId: number = 0,
        public Direccion: string = '',
        public Telefono: string = '',
        public Correo: string = '',
        public GeneroId: number = 0,
        public EstadoCivilId: number = 0,
        public FechaRegistro: Date = new Date,
        public CodUsuario: string = '',
        public EstadoRegistro: boolean = true,
        public Action: number = 0,
        public DetalleMedioComunicacion: PersonaNaturalMedioComunicacionSaveModel[] =[]

    ) { }
}


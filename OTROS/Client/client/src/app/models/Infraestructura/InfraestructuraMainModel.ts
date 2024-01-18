export class InfraestructuraMainModel {
    constructor(
        public Item : number=0,
        public InfraestructuraId: number = 0,
        public SucursalId: number = 0,
        public Estado: number = 0,
        public CodigoSistema: string = '',
        public CodigoInterno: string = '',
        public Descripcion: string = '',
        public TipoInfraestructuraId: number = 0,
        public InfraestructuraDimensionId: number = 0,
        public Aforo: number = 0,
        public PisoId: number = 0,
        public FechaRegistro: Date = new Date,
        public CodUsuario: string = '',
        public EstadoRegistro: boolean =true,
        public Action: number = 0,
        public Seleccion: boolean = true
    ) { }
}
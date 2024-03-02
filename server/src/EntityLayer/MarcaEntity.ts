import { AccionEnum } from "../Lib/AccionEnum";

export class MarcaEntity {
    MarcaId: number;
    Nombre: string;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: AccionEnum;
    // FechaRegistroString: string
    // Cont: number
}

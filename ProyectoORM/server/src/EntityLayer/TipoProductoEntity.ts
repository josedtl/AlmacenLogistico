import { AccionEnum } from "../Lib/AccionEnum";

export class TipoProductoEntity {
    TipoProductoId: number;
    Nombre: string;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: AccionEnum;
    // FechaRegistroString: string
    // Cont: number
}

import { AccionEnum } from "../Lib/AccionEnum";

export class ModeloEntity {
    ModeloId: number;
    Nombre: string;
    FechaRegistro: Date;
    CodUsuario: string;
    EstadoRegistro: boolean;
    Action: AccionEnum;
    // FechaRegistroString: string
    // Cont: number
}

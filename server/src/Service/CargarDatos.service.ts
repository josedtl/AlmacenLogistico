import { Entidad, CampoEntidad } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class CargarDatosservice {
    constructor(private prisma: PrismaService) { }



    async Save(): Promise<String> {



        const TypeValors = [
            { Nombre: 'number' },
            { Nombre: 'decimal' },
            { Nombre: 'date' },
            { Nombre: 'string' },
            { Nombre: 'boolean' },
            { Nombre: 'object' },
            { Nombre: 'array' },

        ];

        await this.prisma.typeValor.createMany({
            data: TypeValors
        });


        const campos = [
            { TypeValorId: 4, campo: 'Nombres' },
            { TypeValorId: 4, campo: 'ApellidoPaterno' },
            { TypeValorId: 4, campo: 'ApellidoMaterno' },
            { TypeValorId: 3, campo: 'FechaNacimiento' },
            { TypeValorId: 4, campo: 'Direccion' },
            { TypeValorId: 4, campo: 'Telefono' },
            { TypeValorId: 4, campo: 'Correo' },
            { TypeValorId: 1, campo: 'SexoId' },
            { TypeValorId: 1, campo: 'EstadoCivilId' },
        ];

        // await this.prisma.campoEntidad.createMany({
        //     data: campos
        // });


        return 'ok';
    }
}
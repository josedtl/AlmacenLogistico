import { TipoProductoModel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TipoProductoEntity } from 'src/EntityLayer/TipoProductoEntity';

@Injectable()
export class TipoProductoService {
    constructor(private prisma: PrismaService) { }

    async getItems(): Promise<TipoProductoEntity[]> {
        const Data = await this.prisma.tipoProductoModel.findMany();

        const Items: TipoProductoEntity[] = Data.map(item => ({
            TipoProductoId: item.TipoProductoId,
            Nombre: item.Nombre,
            FechaRegistro: new Date(item.FechaRegistro),
            CodUsuario: item.CodUsuario,
            EstadoRegistro: item.EstadoRegistro,
            Action: 0,
        }));

        return Items;
    }

    async getItem(id: number): Promise<TipoProductoModel[]> {
        return this.prisma.tipoProductoModel.findMany({
            where: {
                TipoProductoId: id,
            },
        });
    }
    async getLikeItem(Nombre: string): Promise<TipoProductoModel[]> {
        return this.prisma.tipoProductoModel.findMany({
            where: {
                Nombre: {
                    contains: Nombre,
                },
            },
        });
    }


    async Delete(id: number): Promise<TipoProductoModel> {
        return this.prisma.tipoProductoModel.delete({
            where: {
                TipoProductoId: id,
            },
        });
    }

    async SaveItem(Ent: TipoProductoEntity): Promise<TipoProductoEntity> {
        try {
            const usuarioData = await this.prisma.$transaction(async (prisma) => {


                const createdUsuario = Ent.Action == 1 ? await prisma.tipoProductoModel.create({
                    data: {
                        Nombre: Ent.Nombre,
                        FechaRegistro: Ent.FechaRegistro,
                        CodUsuario: Ent.CodUsuario,
                        EstadoRegistro: Ent.EstadoRegistro
                    },
                }) :
                    await prisma.tipoProductoModel.update({
                        where: {
                            TipoProductoId: Ent.TipoProductoId,
                        },
                        data: {
                            Nombre: Ent.Nombre,
                            FechaRegistro: Ent.FechaRegistro,
                            CodUsuario: Ent.CodUsuario,
                            EstadoRegistro: Ent.EstadoRegistro
                        },
                    })
                    ;


                Ent.TipoProductoId = createdUsuario.TipoProductoId;
                return Ent;
            });

            return usuarioData;
        } catch (error) {
            console.error('Error saving item:', error);
            throw error;
        }
    }



}
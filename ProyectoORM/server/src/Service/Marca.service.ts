import { MarcaModel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { MarcaEntity } from 'src/EntityLayer/MarcaEntity';

@Injectable()
export class MarcaService {
    constructor(private prisma: PrismaService) { }

    async getItems(): Promise<MarcaEntity[]> {
        const Data = await this.prisma.marcaModel.findMany();

        const Items: MarcaEntity[] = Data.map(item => ({
            MarcaId: item.MarcaId,
            Nombre: item.Nombre,
            FechaRegistro: new Date(item.FechaRegistro),
            CodUsuario: item.CodUsuario,
            EstadoRegistro: item.EstadoRegistro,
            Action: 0,
        }));

        return Items;
    }

    async getItem(id: number): Promise<MarcaModel[]> {
        return this.prisma.marcaModel.findMany({
            where: {
                MarcaId: id,
            },
        });
    }
    async getLikeItem(Nombre: string): Promise<MarcaModel[]> {
        return this.prisma.marcaModel.findMany({
            where: {
                Nombre: {
                    contains: Nombre,
                },
            },
        });
    }


    async Delete(id: number): Promise<MarcaModel> {
        return this.prisma.marcaModel.delete({
            where: {
                MarcaId: id,
            },
        });
    }

    async SaveItem(Ent: MarcaEntity): Promise<MarcaEntity> {
        try {
            const usuarioData = await this.prisma.$transaction(async (prisma) => {


                const createdUsuario = Ent.Action == 1 ? await prisma.marcaModel.create({
                    data: {
                        Nombre: Ent.Nombre,
                        FechaRegistro: Ent.FechaRegistro,
                        CodUsuario: Ent.CodUsuario,
                        EstadoRegistro: Ent.EstadoRegistro
                    },
                }) :
                    await prisma.marcaModel.update({
                        where: {
                            MarcaId: Ent.MarcaId,
                        },
                        data: {
                            Nombre: Ent.Nombre,
                            FechaRegistro: Ent.FechaRegistro,
                            CodUsuario: Ent.CodUsuario,
                            EstadoRegistro: Ent.EstadoRegistro
                        },
                    })
                    ;


                Ent.MarcaId = createdUsuario.MarcaId;
                return Ent;
            });

            return usuarioData;
        } catch (error) {
            console.error('Error saving item:', error);
            throw error;
        }
    }



}
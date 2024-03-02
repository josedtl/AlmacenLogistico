import { ModeloModel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ModeloEntity } from 'src/EntityLayer/ModeloEntity';

@Injectable()
export class ModeloService {
    constructor(private prisma: PrismaService) { }

    async getItems(): Promise<ModeloEntity[]> {
        const Data = await this.prisma.modeloModel.findMany();

        const Items: ModeloEntity[] = Data.map(item => ({
            ModeloId: item.ModeloId,
            Nombre: item.Nombre,
            FechaRegistro: new Date(item.FechaRegistro),
            CodUsuario: item.CodUsuario,
            EstadoRegistro: item.EstadoRegistro,
            Action: 0,
        }));

        return Items;
    }

    async getItem(id: number): Promise<ModeloModel[]> {
        return this.prisma.modeloModel.findMany({
            where: {
                ModeloId: id,
            },
        });
    }
    async getLikeItem(Nombre: string): Promise<ModeloModel[]> {
        return this.prisma.modeloModel.findMany({
            where: {
                Nombre: {
                    contains: Nombre,
                },
            },
        });
    }


    async Delete(id: number): Promise<ModeloModel> {
        return this.prisma.modeloModel.delete({
            where: {
                ModeloId: id,
            },
        });
    }

    async SaveItem(Ent: ModeloEntity): Promise<ModeloEntity> {
        try {
            const usuarioData = await this.prisma.$transaction(async (prisma) => {


                const createdUsuario = Ent.Action == 1 ? await prisma.modeloModel.create({
                    data: {
                        Nombre: Ent.Nombre,
                        FechaRegistro: Ent.FechaRegistro,
                        CodUsuario: Ent.CodUsuario,
                        EstadoRegistro: Ent.EstadoRegistro
                    },
                }) :
                    await prisma.modeloModel.update({
                        where: {
                            ModeloId: Ent.ModeloId,
                        },
                        data: {
                            Nombre: Ent.Nombre,
                            FechaRegistro: Ent.FechaRegistro,
                            CodUsuario: Ent.CodUsuario,
                            EstadoRegistro: Ent.EstadoRegistro
                        },
                    })
                    ;


                Ent.ModeloId = createdUsuario.ModeloId;
                return Ent;
            });

            return usuarioData;
        } catch (error) {
            console.error('Error saving item:', error);
            throw error;
        }
    }



}
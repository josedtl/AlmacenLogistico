import { CategoriaModel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CategoriaEntity } from 'src/EntityLayer/CategoriaEntity';

@Injectable()
export class CategoriaService {
    constructor(private prisma: PrismaService) { }

    async getItems(): Promise<CategoriaEntity[]> {
        const Data = await this.prisma.categoriaModel.findMany();

        const Items: CategoriaEntity[] = Data.map(item => ({
            CategoriaId: item.CategoriaId,
            Nombre: item.Nombre,
            FechaRegistro: new Date(item.FechaRegistro),
            CodUsuario: item.CodUsuario,
            EstadoRegistro: item.EstadoRegistro,
            Action: 0,
        }));

        return Items;
    }

    async getItem(id: number): Promise<CategoriaModel[]> {
        return this.prisma.categoriaModel.findMany({
            where: {
                CategoriaId: id,
            },
        });
    }
    async getLikeItem(Nombre: string): Promise<CategoriaModel[]> {
        return this.prisma.categoriaModel.findMany({
            where: {
                Nombre: {
                    contains: Nombre,
                },
            },
        });
    }


    async Delete(id: number): Promise<CategoriaModel> {
        return this.prisma.categoriaModel.delete({
            where: {
                CategoriaId: id,
            },
        });
    }

    async SaveItem(Ent: CategoriaEntity): Promise<CategoriaEntity> {
        try {
            const usuarioData = await this.prisma.$transaction(async (prisma) => {


                const createdUsuario = Ent.Action == 1 ? await prisma.categoriaModel.create({
                    data: {
                        Nombre: Ent.Nombre,
                        FechaRegistro: Ent.FechaRegistro,
                        CodUsuario: Ent.CodUsuario,
                        EstadoRegistro: Ent.EstadoRegistro
                    },
                }) :
                    await prisma.categoriaModel.update({
                        where: {
                            CategoriaId: Ent.CategoriaId,
                        },
                        data: {
                            Nombre: Ent.Nombre,
                            FechaRegistro: Ent.FechaRegistro,
                            CodUsuario: Ent.CodUsuario,
                            EstadoRegistro: Ent.EstadoRegistro
                        },
                    })
                    ;


                Ent.CategoriaId = createdUsuario.CategoriaId;
                return Ent;
            });

            return usuarioData;
        } catch (error) {
            console.error('Error saving item:', error);
            throw error;
        }
    }



}
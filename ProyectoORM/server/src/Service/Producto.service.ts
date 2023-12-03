import { ProductoModel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { ProductoEntity } from 'src/EntityLayer/ProductoEntity';

@Injectable()
export class ProductoService {
    constructor(private prisma: PrismaService) { }

    async getItems(): Promise<ProductoEntity[]> {
        const Data = await this.prisma.productoModel.findMany();

        const Items: ProductoEntity[] = Data.map(item => ({
            ProductoId: item.ProductoId,
            Codigo: item.Codigo,
            CategoriaId: item.CategoriaId,
            TipoProductoId: item.TipoProductoId,
            MarcaId: item.MarcaId,
            ModeloId: item.ModeloId,
            Nombre: item.Nombre,
            Descripcion: item.Descripcion,
            UnidadMedidaId: item.UnidadMedidaId,
            Reserva: item.Reserva,
            Stock: item.Stock,
            FechaRegistro: new Date(item.FechaRegistro),
            CodUsuario: item.CodUsuario,
            EstadoRegistro: item.EstadoRegistro,
            Action: 0
        }));

        return Items;
    }

    async getItem(id: number): Promise<ProductoModel[]> {
        return this.prisma.productoModel.findMany({
            where: {
                ProductoId: id,
            },
        });
    }
    async getLikeItem(Nombre: string): Promise<ProductoModel[]> {
        return this.prisma.productoModel.findMany({
            where: {
                Nombre: {
                    contains: Nombre,
                },
            },
        });
    }


    async Delete(id: number): Promise<ProductoModel> {
        return this.prisma.productoModel.delete({
            where: {
                ProductoId: id,
            },
        });
    }

    async SaveItem(Ent: ProductoEntity): Promise<ProductoEntity> {
        try {
            const usuarioData = await this.prisma.$transaction(async (prisma) => {

                const CategoriaItem = await this.prisma.categoriaModel.findUnique({
                    where: {
                        CategoriaId: Ent.CategoriaId
                    }
                });


                const TipoProductoItem = await this.prisma.tipoProductoModel.findUnique({
                    where: {
                        TipoProductoId: Ent.TipoProductoId
                    }
                });

                const MarcaItem = await this.prisma.marcaModel.findUnique({
                    where: {
                        MarcaId: Ent.MarcaId
                    }
                });

                const ModeloItem = await this.prisma.modeloModel.findUnique({
                    where: {
                        ModeloId: Ent.ModeloId
                    }
                });

                const createdUsuario = Ent.Action == 1 ? await prisma.productoModel.create({
                    data: {
                        Codigo: Ent.Codigo,
                        CategoriaId: Ent.CategoriaId,
                        TipoProductoId: Ent.TipoProductoId,
                        MarcaId: Ent.MarcaId,
                        ModeloId: Ent.ModeloId,
                        Nombre: CategoriaItem.Nombre + " " + TipoProductoItem.Nombre + " " + MarcaItem.Nombre + " " + ModeloItem.Nombre,
                        Descripcion: Ent.Descripcion,
                        UnidadMedidaId: Ent.UnidadMedidaId,
                        Reserva: Ent.Reserva,
                        Stock: Ent.Stock,
                        FechaRegistro: Ent.FechaRegistro,
                        CodUsuario: Ent.CodUsuario,
                        EstadoRegistro: Ent.EstadoRegistro,
                    },
                }) :
                    await prisma.productoModel.update({
                        where: {
                            ProductoId: Ent.ProductoId,
                        },
                        data: {
                            ProductoId: Ent.ProductoId,
                            Codigo: Ent.Codigo,
                            CategoriaId: Ent.CategoriaId,
                            TipoProductoId: Ent.TipoProductoId,
                            MarcaId: Ent.MarcaId,
                            ModeloId: Ent.ModeloId,
                            Nombre: Ent.Nombre,
                            Descripcion: Ent.Descripcion,
                            UnidadMedidaId: Ent.UnidadMedidaId,
                            Reserva: Ent.Reserva,
                            Stock: Ent.Stock,
                            FechaRegistro: Ent.FechaRegistro,
                            CodUsuario: Ent.CodUsuario,
                            EstadoRegistro: Ent.EstadoRegistro,
                        },
                    })
                    ;


                Ent.ProductoId = createdUsuario.ProductoId;
                return Ent;
            });

            return usuarioData;
        } catch (error) {
            console.error('Error saving item:', error);
            throw error;
        }
    }



}
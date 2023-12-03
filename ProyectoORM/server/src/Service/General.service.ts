import { CategoriaModel, TipoDocumentoIdentidad, MarcaModel, ModeloModel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneralService {
    constructor(private prisma: PrismaService) { }

    async getCategoriaItems(): Promise<any[]> {
        return await this.prisma.categoriaModel.findMany(
            {
                select: {
                    CategoriaId: true,
                    Nombre: true,
                }
            }
        );
    }
    async getCategoriaItem(Id: number): Promise<any[]> {
        return await this.prisma.categoriaModel.findMany(
            {
                where: {
                    CategoriaId: Id
                },
                select: {
                    CategoriaId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getCategoriaLikeItem(Nombre: string): Promise<any[]> {
        return await this.prisma.categoriaModel.findMany(
            {
                where: {
                    Nombre: {
                        contains: Nombre
                    }
                },
                select: {
                    CategoriaId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getTipoProductoItems(): Promise<any[]> {
        return await this.prisma.tipoProductoModel.findMany(
            {
                select: {
                    TipoProductoId: true,
                    Nombre: true,
                }
            }
        );
    }


    async getTipoProductoItem(Id: number): Promise<any[]> {
        return await this.prisma.tipoProductoModel.findMany(
            {
                where: {
                    TipoProductoId: Id
                },
                select: {
                    TipoProductoId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getTipoProductoLikeItem(Nombre: string): Promise<any[]> {
        return await this.prisma.tipoProductoModel.findMany(
            {
                where: {
                    Nombre: {
                        contains: Nombre
                    }
                },
                select: {
                    TipoProductoId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getMarcaItems(): Promise<any[]> {
        return await this.prisma.marcaModel.findMany(
            {
                select: {
                    MarcaId: true,
                    Nombre: true,
                }
            }
        );
    }


    async getMarcaItem(Id: number): Promise<any[]> {
        return await this.prisma.marcaModel.findMany(
            {
                where: {
                    MarcaId: Id
                },
                select: {
                    MarcaId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getMarcaLikeItem(Nombre: string): Promise<any[]> {
        return await this.prisma.marcaModel.findMany(
            {
                where: {
                    Nombre: {
                        contains: Nombre
                    }
                },
                select: {
                    MarcaId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getModeloItems(): Promise<any[]> {
        return await this.prisma.modeloModel.findMany(
            {
                select: {
                    ModeloId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getModeloItem(Id: number): Promise<any[]> {
        return await this.prisma.modeloModel.findMany(
            {
                where: {
                    ModeloId: Id
                },
                select: {
                    ModeloId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getModeloLikeItem(Nombre: string): Promise<any[]> {
        return await this.prisma.modeloModel.findMany(
            {
                where: {
                    Nombre: {
                        contains: Nombre
                    }
                },
                select: {
                    ModeloId: true,
                    Nombre: true,
                }
            }
        );
    }
    async getUnidadMedidaItems(): Promise<any[]> {
        return await this.prisma.unidadMedidaModel.findMany(
            {
                select: {
                    UnidadMedidaId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getUnidadMedidaItem(Id: number): Promise<any[]> {
        return await this.prisma.unidadMedidaModel.findMany(
            {
                where: {
                    UnidadMedidaId: Id
                },
                select: {
                    UnidadMedidaId: true,
                    Nombre: true,
                }
            }
        );
    }

    async getUnidadMedidaLikeItem(Nombre: string): Promise<any[]> {
        return await this.prisma.unidadMedidaModel.findMany(
            {
                where: {
                    Nombre: {
                        contains: Nombre
                    }
                },
                select: {
                    UnidadMedidaId: true,
                    Nombre: true,
                }
            }
        );
    }

}
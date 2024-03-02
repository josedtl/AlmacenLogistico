import {ListaRelacion } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListaRelacionService {
  constructor(private prisma: PrismaService) { }

  async getAllUsuarios(): Promise<ListaRelacion[]> {
    return this.prisma.listaRelacion.findMany();
  }

 



}
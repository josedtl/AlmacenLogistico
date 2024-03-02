import { Module } from '@nestjs/common';
import { ListaRelacionController } from '../Controllers/ListaRelacion.controller';
import { ListaRelacionService } from '../Service/ListaRelacion.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ListaRelacionController],
  providers: [ListaRelacionService],
  imports: [PrismaModule]
})
export class ListaRelacionModule {}
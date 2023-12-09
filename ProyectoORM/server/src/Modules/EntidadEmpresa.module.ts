import { Module } from '@nestjs/common';
import { EntidadEmpresaController } from '../Controllers/EntidadEmpresa.controller';
import { EntidadEmpresaService } from '../Service/EntidadEmpresa.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [EntidadEmpresaController],
  providers: [EntidadEmpresaService],
  imports: [PrismaModule]
})
export class EntidadEmpresa {}
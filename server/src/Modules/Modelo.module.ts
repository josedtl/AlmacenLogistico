import { Module } from '@nestjs/common';
import { ModeloController } from '../Controllers/Modelo.controller';
import { ModeloService } from '../Service/Modelo.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ModeloController],
  providers: [ModeloService],
  imports: [PrismaModule]
})
export class ModeloModule {}
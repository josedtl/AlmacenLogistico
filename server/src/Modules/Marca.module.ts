import { Module } from '@nestjs/common';
import { MarcaController } from '../Controllers/Marca.controller';
import { MarcaService } from '../Service/Marca.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [MarcaController],
  providers: [MarcaService],
  imports: [PrismaModule]
})
export class MarcaModule {}
import { Module } from '@nestjs/common';
import { CategoriaController } from '../Controllers/Categoria.controller';
import { CategoriaService } from '../Service/Categoria.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService],
  imports: [PrismaModule]
})
export class CategoriaModule {}
import { Module } from '@nestjs/common';
import { ProductoController } from '../Controllers/Producto.controller';
import { ProductoService } from '../Service/Producto.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ProductoController],
  providers: [ProductoService],
  imports: [PrismaModule]
})
export class ProductoModule {}
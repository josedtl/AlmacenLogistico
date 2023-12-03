import { Module } from '@nestjs/common';
import { TipoProductoController } from '../Controllers/TipoProducto.controller';
import { TipoProductoService } from '../Service/TipoProducto.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TipoProductoController],
  providers: [TipoProductoService],
  imports: [PrismaModule]
})
export class TipoProductoModule {}
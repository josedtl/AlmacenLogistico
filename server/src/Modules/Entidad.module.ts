import { Module } from '@nestjs/common';
import { EntidadController } from '../Controllers/Entidad.controller';
import { EntidadService } from '../Service/Entidad.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [EntidadController],
  providers: [EntidadService],
  imports: [PrismaModule]
})
export class PersonaModule {}
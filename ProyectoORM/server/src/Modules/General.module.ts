import { Module } from '@nestjs/common';
import { GeneralController } from '../Controllers/General.controller';
import { GeneralService } from '../Service/General.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [GeneralController],
  providers: [GeneralService],
  imports: [PrismaModule]
})
export class GeneralModule {}
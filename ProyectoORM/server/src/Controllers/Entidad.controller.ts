import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EntidadService } from '../Service/Entidad.service';
import { Entidad } from '@prisma/client';
import { EntidadEntity } from '../EntityLayer/EntidadEntity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Empresa')
@Controller('api/Entidad')
export class EntidadController {
  constructor(private readonly EntidadService: EntidadService) { }

  @Get('/GetPersonaItems')
  async getEntidad() {
    return this.EntidadService.getEntidads();
    // return "d";
  }


  @Get('/GetEmpresaItems')
  async GetEmpresaItems() {
    return this.EntidadService.getEntidads();
    // return "d";
  }

  @Get('/GetEntidadMain')
  async GetEntidadMain() {
    return this.EntidadService.GetEntidadMain();
    // return "d";
  }
  @Get('/getPersonaItem/:id')
  async getPersonaItem(@Param('id') id: string) {
    const EntidadFound = await this.EntidadService.getPersonaItem(Number(id));
    if (!EntidadFound) throw new BadRequestException('Entidad does not exist');
    return EntidadFound;
  }

  @Post("/SaveItem")
  async SaveItem(@Body() data: EntidadEntity) {
    try {
      return this.EntidadService.SaveItem(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Put(':id')
  async updateEntidad(@Param('id') id: string, @Body() data: Entidad) {
    try {
      return await this.EntidadService.updateEntidad(Number(id), data);
    } catch (error) {
      throw new BadRequestException('Entidad does not exist');
    }
  }

  @Delete(':id')
  async deleteEntidad(@Param('id') id: string) {
    try {
      return await this.EntidadService.deleteEntidad(Number(id));
    } catch (error) {
      throw new BadRequestException('Entidad does not exist');
    }
  }

  // @Post('/Save')
  // async Save(@Body() data: EntidadEntity) {
  //   return this.EntidadService.Save(data);
  // }




}
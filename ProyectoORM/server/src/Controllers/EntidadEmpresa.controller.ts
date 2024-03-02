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
import { EntidadEmpresaService } from '../Service/EntidadEmpresa.service';
import { Entidad } from '@prisma/client';
import { EntidadEntity } from '../EntityLayer/EntidadEntity';
import { EntidadEmpresaEntity } from 'src/EntityLayer/EntidadEmpresaEntity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('EntidadEmpresa')
@Controller('api/EntidadEmpresa')
export class EntidadEmpresaController {
  constructor(private readonly EntidadService: EntidadEmpresaService) { }

  @Get('/getEntidadEmpresas')
  async getEntidadEmpresas() {
    return this.EntidadService.getAllEntidadEmpresas();
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
  @Get('/getEmpresaItem/:id')
  async getPersonaItem(@Param('id') id: string) {
    const EntidadFound = await this.EntidadService.getEmpresaItem(Number(id));
    if (!EntidadFound) throw new BadRequestException('Entidad does not exist');
    return EntidadFound;
  }

  @Post("/SaveItem")
  async SaveItem(@Body() data: EntidadEmpresaEntity) {
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
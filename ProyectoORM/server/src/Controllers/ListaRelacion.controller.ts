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
  import { ListaRelacionService } from '../Service/ListaRelacion.service';
  import { ListaRelacion} from '@prisma/client';
  import { ApiTags } from '@nestjs/swagger';

@ApiTags('ListaRelacion')
  @Controller('api/ListaRelacion')
  export class ListaRelacionController {
    constructor(private readonly ListaRelacionService: ListaRelacionService) { }
  
    @Get('/GetItemsLista')
    async getAllUsuarios() {
      return this.ListaRelacionService.getAllUsuarios();
    }
 
  
  }
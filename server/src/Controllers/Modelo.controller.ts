import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put
} from '@nestjs/common';
import { ModeloService } from '../Service/Modelo.service';
import { ModeloEntity } from 'src/EntityLayer/ModeloEntity';

@Controller('api/Modelo')
export class ModeloController {
    constructor(private readonly Services: ModeloService) { }

    @Get('/GetItems')
    async getItems() {
        return this.Services.getItems();
    }

    @Get('/GetItem/:id')
    async getTipoEstadoUsuarioById(@Param('id') id: number) {
        return this.Services.getItem(id);
    }

    @Post('/Save')
    async createTipoEstadoUsuario(@Body() data: ModeloEntity) {
        return this.Services.SaveItem(data);
    }

    @Get('/getLikeItem/:Nombre')
    async getLikeItem(@Param('Nombre') Nombre: string) {
        return this.Services.getLikeItem(Nombre);
    }

    @Delete('/Delete/:id')
    async deleteTipoEstadoUsuario(@Param('id') id: string) {
        try {
            return await this.Services.Delete( Number(id));
        } catch (error) {
            throw new BadRequestException('TipoEstadoUsuario does not exist '+error);
        }
    }

}
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
import { TipoProductoService } from '../Service/TipoProducto.service';
import { TipoProductoEntity } from 'src/EntityLayer/TipoProductoEntity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('TipoProducto')
@Controller('api/TipoProducto')
export class TipoProductoController {
    constructor(private readonly Services: TipoProductoService) { }

    @Get('/GetItems')
    async getItems() {
        return this.Services.getItems();
    }

    @Get('/GetItem/:id')
    async getTipoEstadoUsuarioById(@Param('id') id: number) {
        return this.Services.getItem(id);
    }

    @Post('/Save')
    async createTipoEstadoUsuario(@Body() data: TipoProductoEntity) {
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
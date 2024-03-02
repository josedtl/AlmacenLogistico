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
import { MarcaService } from '../Service/Marca.service';
import { MarcaEntity } from 'src/EntityLayer/MarcaEntity';

@Controller('api/Marca')
export class MarcaController {
    constructor(private readonly Services: MarcaService) { }

    @Get('/GetItems')
    async getItems() {
        return this.Services.getItems();
    }

    @Get('/GetItem/:id')
    async getTipoEstadoUsuarioById(@Param('id') id: number) {
        return this.Services.getItem(id);
    }

    @Post('/Save')
    async createTipoEstadoUsuario(@Body() data: MarcaEntity) {
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
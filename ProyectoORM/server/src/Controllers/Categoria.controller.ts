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
import { CategoriaService } from '../Service/Categoria.service';
import { CategoriaEntity } from 'src/EntityLayer/CategoriaEntity';

@Controller('api/Categoria')
export class CategoriaController {
    constructor(private readonly Services: CategoriaService) { }

    @Get('/GetItems')
    async getItems() {
        return this.Services.getItems();
    }

    @Get('/GetItem/:id')
    async getTipoEstadoUsuarioById(@Param('id') id: number) {
        return this.Services.getItem(id);
    }

    @Post('/Save')
    async createTipoEstadoUsuario(@Body() data: CategoriaEntity) {
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
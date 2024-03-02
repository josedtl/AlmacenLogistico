import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post
} from '@nestjs/common';
import { ProductoService } from '../Service/Producto.service';
import { ProductoEntity } from 'src/EntityLayer/ProductoEntity';

@Controller('api/Producto')
export class ProductoController {
    constructor(private readonly Services: ProductoService) { }

    @Get('/GetItems')
    async getItems() {
        return this.Services.getItems();
    }

    @Get('/GetItem/:id')
    async getItem(@Param('id') id: string) {
        return this.Services.getItem(Number(id));
    }

    @Post('/Save')
    async SaveItem(@Body() data: ProductoEntity) {
        
        try {
            return this.Services.SaveItem(data);
        } catch (error) {
            throw new BadRequestException('TipoEstadoUsuario does not exist '+error);
        }
    }

    @Get('/getLikeItem/:Nombre')
    async getLikeItem(@Param('Nombre') Nombre: string) {
        return this.Services.getLikeItem(Nombre);
    }

    @Delete('/Delete/:id')
    async Delete(@Param('id') id: string) {
        try {
            return await this.Services.Delete( Number(id));
        } catch (error) {
            throw new BadRequestException('TipoEstadoUsuario does not exist '+error);
        }
    }

}
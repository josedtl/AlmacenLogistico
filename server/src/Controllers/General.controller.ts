import {
    Controller,
    Get,
    Param,
} from '@nestjs/common';
import { GeneralService } from '../Service/General.service';

@Controller('api/General')
export class GeneralController {
    constructor(private readonly Services: GeneralService) { }

    @Get('/getCategoriaItems')
    async getCategoriaItems() {
        return this.Services.getCategoriaItems();
    }

    @Get('/getCategoriaItem/:Id')
    async getCategoriaItem(@Param('Id') Id: string) {
        return this.Services.getCategoriaItem(Number(Id));
    }

    @Get('/getCategoriaLikeItem/:Nombre')
    async getCategoriaLikeItem(@Param('Nombre') Nombre: string) {
        return this.Services.getCategoriaLikeItem(Nombre);
    }

    @Get('/getTipoProductoItems')
    async getTipoProductoItems() {
        return this.Services.getTipoProductoItems();
    }


    @Get('/getTipoProductoItem/:Id')
    async getTipoProductoItem(@Param('Id') Id: string) {
        return this.Services.getTipoProductoItem(Number(Id));
    }

    @Get('/getTipoProductoLikeItem/:Nombre')
    async getTipoProductoLikeItem(@Param('Nombre') Nombre: string) {
        return this.Services.getTipoProductoLikeItem(Nombre);
    }


    @Get('/getMarcaItems')
    async getMarcaItems() {
        return this.Services.getMarcaItems();
    }

    @Get('/getMarcaItem/:Id')
    async getMarcaItem(@Param('Id') Id: string) {
        return this.Services.getMarcaItem(Number(Id));
    }

    @Get('/getMarcaLikeItem/:Nombre')
    async getMarcaLikeItem(@Param('Nombre') Nombre: string) {
        return this.Services.getMarcaLikeItem(Nombre);
    }


    @Get('/getModeloItems')
    async getModeloItems() {
        return this.Services.getModeloItems();
    }

    @Get('/getModeloItem/:Id')
    async getModeloItem(@Param('Id') Id: string) {
        return this.Services.getModeloItem(Number(Id));
    }

    @Get('/getModeloLikeItem/:Nombre')
    async getModeloLikeItem(@Param('Nombre') Nombre: string) {
        return this.Services.getModeloLikeItem(Nombre);
    }


    @Get('/getUnidadMedidaItems')
    async getUnidadMedidaItems() {
        return this.Services.getUnidadMedidaItems();
    }

    @Get('/getUnidadMedidaItem/:Id')
    async getUnidadMedidaItem(@Param('Id') Id: string) {
        return this.Services.getUnidadMedidaItem(Number(Id));
    }

    @Get('/getUnidadMedidaLikeItem/:Nombre')
    async getUnidadMedidaLikeItem(@Param('Nombre') Nombre: string) {
        return this.Services.getUnidadMedidaLikeItem(Nombre);
    }

    @Get('/GetTipoDocumentoPersona')
    async GetTipoDocumentoPersona() {
        return this.Services.GetTipoDocumentPersona();
    }


    @Get('/GetTipoDocumentoEmpresa')
    async GetTipoDocumentoEmpresa() {
        return this.Services.GetTipoDocumentoEmpresa();
    }
    @Get('/GetTipoDocumentoIdentidadItem/:Id')
    async GetTipoDocumentoIdentidadItem(@Param('Id') Id: string) {
        return this.Services.GetTipoDocumentoIdentidadItem(Number(Id));
    }

    @Get('/GetUbigeoLikeItem/:Nombre')
    async GetUbigeoLikeItem(@Param('Nombre') Nombre: string) {
        return this.Services.GetUbigeoLikeItem(Nombre);
    }
    @Get('/GetUbigeoItem/:Id')
    async GetUbigeoItem(@Param('Id') Id: string) {
        return this.Services.GetUbigeoItem(Number(Id));
    }

    @Get('/GetGeneroItems')
    async GetGeneroItems() {
        return this.Services.GetGeneroItems();
    }
    @Get('/GetEstadoCivilItems')
    async GetEstadoCivilItems() {
        return this.Services.GetEstadoCivilItems();
    }

    @Get('/GetGeneroItem/:Id')
    async GetGeneroItem(@Param('Id') Id: string) {
        return this.Services.GetGeneroItem(Number(Id));
    }

    @Get('/GetEstadoCivilItem/:Id')
    async GetEstadoCivilItem(@Param('Id') Id: string) {
        return this.Services.GetEstadoCivilItem(Number(Id));
    }

}



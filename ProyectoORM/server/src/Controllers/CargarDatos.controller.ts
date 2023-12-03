import {
    Body,
    Controller,
    Post
} from '@nestjs/common';
import { CargarDatosservice } from '../Service/CargarDatos.service';
import { Entidad } from '@prisma/client';

@Controller('api/Entidad')
export class CargarDatosController {
    constructor(private readonly Services: CargarDatosservice) { }



    @Post("SaveItem")
    async SaveItem() {
        return this.Services.Save();
    }





}
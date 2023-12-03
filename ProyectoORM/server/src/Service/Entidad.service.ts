import { Entidad } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { EntidadEntity } from '../EntityLayer/EntidadEntity';
import { DatoEntidad } from '@prisma/client';
import { AccionEnum } from '../Lib/AccionEnum';
import { convertirValorAlTipoDato } from '../Lib/Convetidor';
@Injectable()
export class EntidadService {
  constructor(private prisma: PrismaService) { }

  async getAllEntidads(): Promise<Entidad[]> {
    return this.prisma.entidad.findMany();
  }

  async getEntidadById(id: number): Promise<Entidad> {
    return this.prisma.entidad.findUnique({
      where: {
        EntidadId: id,
      },
    });
  }

  async Save(data: Entidad): Promise<Entidad> {
    return this.prisma.entidad.create({
      data
    });
  }

  async SaveItem(datos: EntidadEntity): Promise<any> {
    console.log(datos);
    const DatosRetornado = datos.Accion === AccionEnum.Add ? await this.prisma.entidad.create({
      data: {
        EsEmpresa: datos.EsEmpresa,
        TipoDocumentoIdentidadId: datos.TipoDocumentoIdentidadId,
        NumDocumento: datos.NumDocumento,
        NombreCompleto: datos.Nombres + " " + datos.ApellidoPaterno + " " + datos.ApellidoMaterno,
        FechaRegistro: datos.FechaRegistro,
        CodUsuario: datos.CodUsuario,
      }
    }) : await this.prisma.entidad.update({
      where: {
        EntidadId: datos.EntidadId
      },
      data: {
        EsEmpresa: datos.EsEmpresa,
        TipoDocumentoIdentidadId: datos.TipoDocumentoIdentidadId,
        NumDocumento: datos.NumDocumento,
        NombreCompleto: datos.Nombres + " " + datos.ApellidoPaterno + " " + datos.ApellidoMaterno,
        FechaRegistro: datos.FechaRegistro,
        CodUsuario: datos.CodUsuario,
      }
    })


    datos.EntidadId = DatosRetornado.EntidadId;
    const Items: DatoEntidad[] = [];

    const campos = await this.prisma.campo.findMany();



    const DatosUpdate = await this.prisma.datoEntidad.findMany({
      where: {
        EntidadId: datos.EntidadId,
      },
    });

    if (datos.Accion == AccionEnum.Update) {
      for (const key in datos) {
        console.log(key);
        const index = campos.findIndex((i) => i.campo === key)
        if (index > -1) {
          const indexDato = DatosUpdate.findIndex((ii) => ii.CampoId === campos[index].CampoId)
          if (indexDato > -1) {
            Items.push({
              DatoId: DatosUpdate[indexDato].DatoId,
              EntidadId: DatosRetornado.EntidadId,
              CampoId: campos[index].CampoId,
              valor: String(datos[key]),
              ListaRelacionId: null
            });
          }
        }
      }
    }
    else {
      for (const key in datos) {
        const index = campos.findIndex((i) => i.campo === key)
        if (index > -1) {
          Items.push({
            DatoId: 0,
            EntidadId: DatosRetornado.EntidadId,
            CampoId: campos[index].CampoId,
            valor: String(datos[key]),
            ListaRelacionId:null
          });
        }
      }
    }

    if (datos.Accion == AccionEnum.Add) {

      const resultado = await this.prisma.$transaction([
        this.prisma.datoEntidad.createMany({ data: Items }),
      ]);
    }
    else {
      const actualizaciones = Items.map(async (i) => {
        await this.prisma.datoEntidad.update({
          where: { DatoId: i.DatoId },
          data: i,
        });
      });
    }




    return datos;
  }

  async updateEntidad(id: number, data: Entidad): Promise<Entidad> {
    return this.prisma.entidad.update({
      where: {
        EntidadId: id,
      },
      data,
    });
  }

  async deleteEntidad(id: number): Promise<Entidad> {
    return this.prisma.entidad.delete({
      where: {
        EntidadId: id,
      },
    });
  }


  async getEntidads(): Promise<any> {
    const datos = await this.prisma.datoEntidad.findMany(
      {
        select: {
          EntidadId: true,
          valor: true,
          Campo: {
            select: {
              CampoId: true,
              campo: true,
              TypeValor: {
                select: {
                  Nombre: true
                }
              }
            }

          }
        }
      }
    );
    // console.log(datos);
    const datosPivotados = {};

    datos.forEach((dato) => {
      if (!datosPivotados[dato.EntidadId]) {
        datosPivotados[dato.EntidadId] = { EntidadId: dato.EntidadId };
      }
      console.log(dato.Campo.TypeValor.Nombre)
      datosPivotados[dato.EntidadId][dato.Campo.campo] = convertirValorAlTipoDato(dato.valor, dato.Campo.TypeValor.Nombre);
    });

    return Object.values(datosPivotados);
  }


  async getPersonaItem(Id: number): Promise<any> {

    const PersonaItem = await this.prisma.entidad.findUnique(
      {
        where: {
          EntidadId: Id
        },
        select: {
          EntidadId: true,
          NumDocumento: true,
          TipoDocumentoIdentidadId: true,
          NombreCompleto: true,
          CodUsuario: true,
          FechaRegistro: true,
          EsEmpresa: true,

        }
      }

    );





    const datos = await this.prisma.datoEntidad.findMany(
      {
        where: {
          EntidadId: Id
        },
        select: {
          EntidadId: true,
          valor: true,
          Campo: {
            select: {
              CampoId: true,
              campo: true,
              TypeValor: {
                select: {
                  Nombre: true
                }
              }
            }

          }
        }
      }
    );
    console.log(datos);
    const datosPivotados = {};

    datos.forEach((dato) => {
      if (!datosPivotados[dato.EntidadId]) {
        datosPivotados[dato.EntidadId] = {
          EntidadId: dato.EntidadId,
          TipoDocuemntoIdentidadId: PersonaItem.TipoDocumentoIdentidadId,
          NumDocumento: PersonaItem.NumDocumento,
          NombreCompleto: PersonaItem.NombreCompleto,
          FechaRegistro: PersonaItem.FechaRegistro,
          EsEmpresa: PersonaItem.EsEmpresa,
          CodUsuario: PersonaItem.CodUsuario,
        };
      }
      datosPivotados[dato.EntidadId][dato.Campo.campo] = convertirValorAlTipoDato(dato.valor, dato.Campo.TypeValor.Nombre);
    });

    return Object.values(datosPivotados);
  }
}
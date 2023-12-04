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
        UbigeoId: null,
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
        UbigeoId: null
      }
    })


    datos.EntidadId = DatosRetornado.EntidadId;
    const Items: DatoEntidad[] = [];

    const campos = await this.prisma.campoEntidad.findMany();



    const DatosUpdate = await this.prisma.datoEntidad.findMany({
      where: {
        EntidadId: datos.EntidadId,
      },
    });

    if (datos.Accion == AccionEnum.Update) {
      for (const key in datos) {
        console.log(key);
        const index = campos.findIndex((i) => i.Campo === key)
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
        const index = campos.findIndex((i) => i.Campo === key)
        if (index > -1) {
          Items.push({
            DatoId: 0,
            EntidadId: DatosRetornado.EntidadId,
            CampoId: campos[index].CampoId,
            valor: String(datos[key]),
            ListaRelacionId: null
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

    const PersonaItems = await this.prisma.entidad.findMany(
      {
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
        select: {
          EntidadId: true,
          valor: true,
          CampoEntidad: {
            select: {
              CampoId: true,
              Campo: true,
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

    const datosPivotados = {};

    datos.forEach((dato) => {
      if (!datosPivotados[dato.EntidadId]) {
        const datoscabecera = PersonaItems.findIndex((S) => S.EntidadId == dato.EntidadId);

        datosPivotados[dato.EntidadId] = {
          EntidadId: dato.EntidadId,
          TipoDocumentoIdentidadId: PersonaItems[datoscabecera].TipoDocumentoIdentidadId,
          NumDocumento: PersonaItems[datoscabecera].NumDocumento,
          NombreCompleto: PersonaItems[datoscabecera].NombreCompleto,
          // UbigeoId: PersonaItems[datoscabecera].UbigeoId,
          FechaRegistro: PersonaItems[datoscabecera].FechaRegistro,
          CodUsuario: PersonaItems[datoscabecera].CodUsuario,

        };
      }
      datosPivotados[dato.EntidadId][dato.CampoEntidad.Campo] = convertirValorAlTipoDato(dato.valor, dato.CampoEntidad.TypeValor.Nombre);

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
          CampoEntidad: {
            select: {
              CampoId: true,
              Campo: true,
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
      datosPivotados[dato.EntidadId][dato.CampoEntidad.Campo] = convertirValorAlTipoDato(dato.valor, dato.CampoEntidad.TypeValor.Nombre);
    });

    return Object.values(datosPivotados);
  }




  async GetEntidadMain(): Promise<any> {

    const PersonaItems = await this.prisma.entidad.findMany(
      {
        select: {
          EntidadId: true,
          NumDocumento: true,
          NombreCompleto: true,
          CodUsuario: true,
          FechaRegistro: true,
          EsEmpresa: true,
          TipoDocumentoIdentidadModel: {
            select: {
              Nombre: true
            }
          }

        }
      }

    );

    const datos = await this.prisma.datoEntidad.findMany(
      {
        select: {
          EntidadId: true,
          valor: true,
          CampoEntidad: {
            select: {
              CampoId: true,
              Campo: true,
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

    const datosPivotados = {};

    datos.forEach((dato) => {
      if (!datosPivotados[dato.EntidadId]) {
        const datoscabecera = PersonaItems.findIndex((S) => S.EntidadId == dato.EntidadId);

        datosPivotados[dato.EntidadId] = {
          EntidadId: dato.EntidadId,
          NomDocumento: PersonaItems[datoscabecera].TipoDocumentoIdentidadModel.Nombre,
          NumDocumento: PersonaItems[datoscabecera].NumDocumento,
          NombreCompleto: PersonaItems[datoscabecera].NombreCompleto,
          // UbigeoId: PersonaItems[datoscabecera].UbigeoId,
          FechaRegistro: PersonaItems[datoscabecera].FechaRegistro,
          CodUsuario: PersonaItems[datoscabecera].CodUsuario,

        };
      }
      datosPivotados[dato.EntidadId][dato.CampoEntidad.Campo] = convertirValorAlTipoDato(dato.valor, dato.CampoEntidad.TypeValor.Nombre);

    });




    return Object.values(datosPivotados);
  }

}
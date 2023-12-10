import { Entidad } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { DatoEntidad } from '@prisma/client';
import { AccionEnum } from '../Lib/AccionEnum';
import { convertirValorAlTipoDato } from '../Lib/Convetidor';
import { EntidadEmpresaEntity } from 'src/EntityLayer/EntidadEmpresaEntity';
@Injectable()
export class EntidadEmpresaService {
  constructor(private prisma: PrismaService) { }

  async getAllEntidadEmpresas(): Promise<Entidad[]> {
    const Items = await this.prisma.entidad.findMany(
      {
        where: {
          TipoEntidad: {
            Codigo: '0002'
          }
        },
        select: {
          EntidadId: true,
          NumDocumento: true,
          NombreCompleto: true,
          FechaRegistro: true,
          CodUsuario: true,
          TipoDocumentoIdentidadModel: {
            select: {
              Alias: true
            }
          }

        }

      }
    );



    const datosPivotados = {};

    Items.forEach((dato) => {
      if (!datosPivotados[dato.EntidadId]) {
        datosPivotados[dato.EntidadId] = {
          EntidadId: dato.EntidadId,
          NomDocumento: dato.TipoDocumentoIdentidadModel.Alias,
          NumDocumento: dato.NumDocumento,
          NombreCompleto: dato.NombreCompleto,
          FechaRegistro: dato.FechaRegistro,
          CodUsuario: dato.CodUsuario
        };
      }
    });


    return Object.values(datosPivotados);


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

  async SaveItem(datos: EntidadEmpresaEntity): Promise<any> {
    const DatosRetornado = datos.Action === AccionEnum.Add ? await this.prisma.entidad.create({
      data: {
        EsEmpresa: true,
        TipoDocumentoIdentidadId: datos.TipoDocumentoIdentidadId,
        NumDocumento: datos.NumDocumento,
        NombreCompleto: datos.NombreCompleto,
        FechaRegistro: datos.FechaRegistro,
        CodUsuario: datos.CodUsuario,
        UbigeoId: datos.UbigeoId,
        TipoEntidadId: 2

      }
    }) : await this.prisma.entidad.update({
      where: {
        EntidadId: datos.EntidadId
      },
      data: {
        EsEmpresa: true,
        TipoDocumentoIdentidadId: datos.TipoDocumentoIdentidadId,
        NumDocumento: datos.NumDocumento,
        NombreCompleto: datos.NombreCompleto,
        FechaRegistro: datos.FechaRegistro,
        CodUsuario: datos.CodUsuario,
        UbigeoId: datos.UbigeoId,
        TipoEntidadId: 2
      }
    })


    datos.EntidadId = DatosRetornado.EntidadId;
    const Items: DatoEntidad[] = [];

    // const campos = await this.prisma.campoEntidad.findMany();


    const campos = await this.prisma.configuracionEntidadDetalle.findMany(
      {
        where: {
          ConfiguracionEntidad: {
            Codigo: '003'
          }
        },
        select: {
          CampoId: true,
          CampoEntidad: {
            select: {
              Campo: true
            }
          }
        }

      }
    );


    console.log(campos);


    const DatosUpdate = await this.prisma.datoEntidad.findMany({
      where: {
        EntidadId: datos.EntidadId,
      },
    });

    if (datos.Action == AccionEnum.Update) {
      for (const key in datos) {
        console.log(key);
        const index = campos.findIndex((i) => i.CampoEntidad.Campo === key)
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
        const index = campos.findIndex((i) => i.CampoEntidad.Campo === key)
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

    if (datos.Action == AccionEnum.Add) {

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
        where: {
          Entidad: {
            TipoEntidad: {
              Codigo: 'DNI'
            }
          }
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

    // const datos = await this.prisma.datoEntidad.findMany(
    //   {
    //     select: {
    //       EntidadId: true,
    //       valor: true,
    //       CampoEntidad: {
    //         select: {
    //           CampoId: true,
    //           Campo: true,
    //           TypeValor: {
    //             select: {
    //               Nombre: true
    //             }
    //           }
    //         }

    //       }
    //     }
    //   }
    // );

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

  async getEmpresaItem(Id: number): Promise<any> {

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
          UbigeoId: true

        }
      }

    );





    const datos = await this.prisma.datoEntidad.findMany(
      {
        where: {
          EntidadId: Id,
          Entidad: {
            TipoEntidad: {
              Codigo: "0002"
            }
          }
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
          TipoDocumentoIdentidadId: PersonaItem.TipoDocumentoIdentidadId,
          NumeroDocumento: PersonaItem.NumDocumento,
          NombreCompleto: PersonaItem.NombreCompleto,
          FechaRegistro: PersonaItem.FechaRegistro,
          EsEmpresa: PersonaItem.EsEmpresa,
          CodUsuario: PersonaItem.CodUsuario,
          UbigeoId: PersonaItem.UbigeoId
        };
      }
      datosPivotados[dato.EntidadId][dato.CampoEntidad.Campo] = convertirValorAlTipoDato(dato.valor, dato.CampoEntidad.TypeValor.Nombre);
    });

    return Object.values(datosPivotados);
  }


  async GetEntidadMain(): Promise<any> {

    const Items = await this.prisma.entidad.findMany(
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
              Alias: true
            }
          }

        }
      }


    );
    const datosPivotados = {};

    Items.forEach((dato) => {
      if (!datosPivotados[dato.EntidadId]) {
        datosPivotados[dato.EntidadId] = {
          EntidadId: dato.EntidadId,
          NomDocumento: dato.TipoDocumentoIdentidadModel.Alias,
          NumDocumento: dato.NumDocumento,
          NombreCompleto: dato.NombreCompleto,
          FechaRegistro: dato.FechaRegistro,
          EsEmpresa: dato.EsEmpresa,
          CodUsuario: dato.CodUsuario
        };
      }
    });


    return Object.values(datosPivotados);
  }


  async getEmpresaItems(): Promise<any> {

    return this.prisma.entidad.findMany(
      {
        where: {
          TipoEntidad: {
            Codigo: 'Ruc'
          }

        },
        select: {
          NumDocumento: true,
          NombreCompleto: true,
          FechaRegistro: true,
          CodUsuario: true,
          TipoDocumentoIdentidadModel: {
            select: {
              Alias: true
            }
          }
        }
      }
    );
  }
}
import { UnidadMedidaEntity } from '../Models/UnidadMedidaEntity';
import { TipoDocumentoIdentidadEntity } from '../Models/TipoDocumentoIdentidadEntity';
import { UbigeoEntity } from '../Models/UbigeoEntity';
import { PersonaNaturalEntity } from '../Models/PersonaNaturalEntity';
import { apiLg } from './axios-config';
import { EntidadNombreCompletoModel,TipoEntidadItemModel ,DatosClienteItemModel } from '../Models/GeneralEntity';
import { EmpresaEntity } from '../Models/EmpresaEntity';
import { EntidadLikeModel } from '../Models/EntidadLikeModel';
import { ProcesoEntity } from '../Models/ProcesoEntity';
import { RecepListaModel } from '../Models/RecepcionEntity';

class GeneralService {



    async GetUbigeoApiItem(Id: number): Promise<UbigeoEntity[]> {
        try {
            const response = await apiLg.get(`api/Ubigeo/GetItem/${Id}`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async GetPersonaBuscardocumento(NumDocumento: string): Promise<PersonaNaturalEntity[]> {
        try {
            const response = await apiLg.get(`api/General/GetBuscardocumento/${NumDocumento}/`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }


    async GetTipoDocumentoIdentidadPorEstadoItems(): Promise<TipoDocumentoIdentidadEntity[]> {
        try {
            const response = await apiLg.get(`api/General/GetTipoDocumentoIdentidadPorEstadoItems`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async GetEmpresaBuscaDocumento(NumDocumento: string): Promise<EmpresaEntity[]> {
        try {
            const response = await apiLg.get(`api/General/GetEmpresaBuscaDocumento/${NumDocumento}/`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }


    async GetUbigeoItemLikeApi(codigo: string): Promise<UbigeoEntity[]> {
        try {

            const EntLike = new EntidadLikeModel();
            EntLike.Valor1 = codigo;
            const response = await apiLg.post(`api/General/UbigeoBuscarItem`, EntLike, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async GetUbigeoItemApi(Value: number): Promise<UbigeoEntity[]> {
        try {
            const response = await apiLg.get(`api/General/UbigeoObtenerItem/${Value}`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }





    async GetUnidadMedidaItems(): Promise<UnidadMedidaEntity[]> {

        try {
            const response = await apiLg.get(`api/General/UnidadMedidaObtenerItems`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }

    }

    async GetUnidadMedidaItem(Id: number): Promise<UnidadMedidaEntity[]> {
        try {
            const response = await apiLg.get(`api/General/UnidadMedidaObtenerItem/${Id}`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async ProcesoObtenerTipo(Codigo: string): Promise<ProcesoEntity[]> {
        try {
            const response = await apiLg.get(`api/General/ProcesoObtenerTipo/${Codigo}`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async EntidadBuscarNombreCompletoItem(Nombres: string): Promise<EntidadNombreCompletoModel[]> {
        try {

            const EntLike = new EntidadLikeModel();
            EntLike.Valor1 = Nombres;
            const response = await apiLg.post(`api/General/EntidadBuscarNombreCompletoItem`, EntLike, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async EntidadObtenerNombreCompletoItem(Id: number): Promise<EntidadNombreCompletoModel[]> {
        try {
            const response = await apiLg.get(`api/General/EntidadObtenerNombreCompletoItem/${Id}`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }


    async RecepListaObtenerItem(Id: number): Promise<RecepListaModel[]> {
        try {
            const response = await apiLg.get(`api/General/RecepListaObtenerItem/${Id}`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async RecepListaObtenerItems(Codigo: string): Promise<RecepListaModel[]> {
        try {
            const response = await apiLg.get(`api/General/RecepListaObtenerItems/${Codigo}`);
            return response.data.Value;
        } catch (error) {
            throw error;
        }
    }

    async GetTipoEntidadObtenerItems(): Promise<TipoEntidadItemModel[]> {
        try {
          const response = await apiLg.get(`api/General/TipoEntidadObtenerItems`);
          return response.data.Value;
        } catch (error) {
          throw error;
        }
      }
      
  async saveEnlaceEntidad(item: DatosClienteItemModel): Promise<DatosClienteItemModel | null> {
    try {
      const response = await apiLg.post(`/api/General/EntidadRegistrarEnlace`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        return response.data.Value;
      } else {
        console.log('Save operation failed');
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

}

export default GeneralService;
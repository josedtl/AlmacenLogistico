import { CategoriaEntity } from '../Models/CategoriaEntity';
import { TipoProductoEntity } from '../Models/TipoProductoEntity';
import { MarcaEntity } from '../Models/MarcaEntity';
import { ModeloEntity } from '../Models/ModeloEntity';
import { UnidadMedidaEntity } from '../Models/UnidadMedidaEntity';
import { SexoEntity } from '../Models/SexoEntity';
import { EstadoCivilEntity } from '../Models/EstadoCivilEntity';
import { TipoDocumentoIdentidadEntity } from '../Models/TipoDocumentoIdentidadEntity';
import { UbigeoEntity } from '../Models/UbigeoEntity';
import { PersonaNaturalEntity } from '../Models/PersonaNaturalEntity';
import { apiLg } from './axios-config';
import { ProductoEntity } from '../Models/ProductoEntity';
import { EstadoProcesoEntity, TipoProcesoEntity } from '../Models/GeneralEntity';
import { EmpresaEntity } from '../Models/EmpresaEntity';

class GeneralService {

  async GetCategoriaItems(): Promise<CategoriaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getCategoriaItems`);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  async GetCategoriaItem(Id: number): Promise<CategoriaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getCategoriaItem/${Id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async GetCategoriaItemLike(Nombre: string): Promise<CategoriaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getCategoriaLikeItem/${Nombre}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }



  async GetTipoProductoItems(): Promise<TipoProductoEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getTipoProductoItems`);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  async GetTipoProductoItem(Id: number): Promise<TipoProductoEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getTipoProductoItem/${Id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async GetTipoProductoItemLike(Nombre: string): Promise<TipoProductoEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getTipoProductoLikeItem/${Nombre}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }




  async GetMarcaItems(): Promise<MarcaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getMarcaItems`);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  async GetMarcaItem(Id: number): Promise<MarcaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getMarcaItem/${Id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async GetMarcaItemLike(Nombre: string): Promise<MarcaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getMarcaLikeItem/${Nombre}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }




  async GetModeloItems(): Promise<ModeloEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getModeloItems`);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  async GetModeloItem(Id: number): Promise<ModeloEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getModeloItem/${Id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async GetModeloItemLike(Nombre: string): Promise<ModeloEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getModeloLikeItem/${Nombre}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }




  async GetUnidadMedidaItems(): Promise<UnidadMedidaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getUnidadMedidaItems`);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

  async GetUnidadMedidaItem(Id: number): Promise<UnidadMedidaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getUnidadMedidaItem/${Id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async GetUnidadMedidaItemLike(Nombre: string): Promise<UnidadMedidaEntity[]> {
    try {
      const response = await apiLg.get(`api/General/getUnidadMedidaLikeItem/${Nombre}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


  async GetProductoItemLikeOP(Nombre: string, CategoriaId: number): Promise<ProductoEntity[]> {

    try {
      const response = await apiLg.post('gql/General', {
        query: `{GHProductoItemLikeOP(Nombre: "${Nombre}", CategoriaId: ${CategoriaId}) {
        ProductoId
        Codigo
        NomProducto
        Stock
        CodigoUM
      }
    }`,
      });
      return await response.data.data.GHProductoItemLikeOP;
    } catch (error) {
      throw error;
    }

  }


  async GetProductoItemOP(Id: number): Promise<ProductoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{GHProductoItemOP(Id: ${Id}) {
        ProductoId
        Codigo
        NomProducto
        Stock
        CodigoUM
      }
    }`,
    });
    return await response.data.data.GHProductoItemOP;
  }


  async GetTipoProcesoItems(): Promise<TipoProcesoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHTipoProcesoItems {
          TipoProcesoId
          Codigo
          Nombre
        }
      }`,
    });
    return await response.data.data.GHTipoProcesoItems
  }


  async GetEstadoProcesoItems(): Promise<EstadoProcesoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHEstadoProcesoItems {
          EstadoProcesoId
          Nombre
        }
      }`,
    });
    return await response.data.data.GHEstadoProcesoItems
  }


  async GetSexoItems(): Promise<SexoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHSexoItems {SexoId Nombre}}`,
    });
    return await response.data.data.GHSexoItems
  }

  async GetSexoItem(Id: number): Promise<SexoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHSexoItem(Id: ${Id}) {SexoId Nombre}}`,
    });
    return await response.data.data.GHSexoItem
  }

  async GetSexoItemLike(Nombre: string): Promise<SexoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHSexoItemLike(Nombre: "${Nombre}") {SexoId Nombre}}`,
    });
    return await response.data.data.GHSexoItemLike;
  }

  async GetEstadoCivilItems(): Promise<EstadoCivilEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHEstadoCivilItems {EstadoCivilId Nombre}}`,
    });
    return await response.data.data.GHEstadoCivilItems
  }

  async GetEstadoCivilItem(Id: number): Promise<EstadoCivilEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHEstadoCivilItem(Id: ${Id}) {EstadoCivilId Nombre}}`,
    });
    return await response.data.data.GHEstadoCivilItem
  }

  async GetEstadoCivilItemLike(Nombre: string): Promise<EstadoCivilEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHEstadoCivilItemLike(Nombre: "${Nombre}") {EstadoCivilId Nombre}}`,
    });
    return await response.data.data.GHEstadoCivilItemLike;
  }

  async GetTipoDocumentoIdentidadPersonaItems(): Promise<TipoDocumentoIdentidadEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHTipoDocumentoIdentidadPersonaItems {
          TipoDocumentoIdentidadId
          Alias
        }
      }`,
    });
    return await response.data.data.GHTipoDocumentoIdentidadPersonaItems
  }

  async GetTipoDocumentoIdentidadEmpresaItems(): Promise<TipoDocumentoIdentidadEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHTipoDocumentoIdentidadEmpresaItems {
          TipoDocumentoIdentidadId
          Alias
        }
      }`,
    });
    return await response.data.data.GHTipoDocumentoIdentidadEmpresaItems
  }
  async GetTipoDocumentoIdentidadItems(): Promise<TipoDocumentoIdentidadEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHTipoDocumentoIdentidadItems {TipoDocumentoIdentidadId Nombre}}`,
    });
    return await response.data.data.GHTipoDocumentoIdentidadItems
  }

  async GetTipoDocumentoIdentidadItem(Id: number): Promise<TipoDocumentoIdentidadEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHTipoDocumentoIdentidadItem(Id: ${Id}) {TipoDocumentoIdentidadId Nombre}}`,
    });
    return await response.data.data.GHTipoDocumentoIdentidadItem
  }

  async GetTipoDocumentoIdentidadItemLike(Nombre: string): Promise<TipoDocumentoIdentidadEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHTipoDocumentoIdentidadItemLike(Nombre: "${Nombre}") {TipoDocumentoIdentidadId Nombre}}`,
    });
    return await response.data.data.GHTipoDocumentoIdentidadItemLike;
  }


  async GetUbigeoItems(): Promise<UbigeoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHUbigeoItems {UbigeoId Nombre}}`,
    });
    return await response.data.data.GHUbigeoItems
  }

  async GetUbigeoItem(Id: number): Promise<UbigeoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHUbigeoItem(Id: ${Id}) {UbigeoId DesUbigeo}}`,
    });
    return await response.data.data.GHUbigeoItem
  }


  async GetUbigeoItemLike(Nombre: string): Promise<UbigeoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHUbigeoItemLike(Nombre: "${Nombre}") {UbigeoId DesUbigeo}}`,
    });
    return await response.data.data.GHUbigeoItemLike;
  }

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


}

export default GeneralService;
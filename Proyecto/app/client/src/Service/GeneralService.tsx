import { CategoriaEntity } from '../Models/CategoriaEntity';
import { TipoProductoEntity } from '../Models/TipoProductoEntity';
import { MarcaEntity } from '../Models/MarcaEntity';
import { ModeloEntity } from '../Models/ModeloEntity';
import { UnidadMedidaEntity } from '../Models/UnidadMedidaEntity';
import { apiLg } from './axios-config';

class GeneralService {

  async GetCategoriaItems(): Promise<CategoriaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHCategoriaItems {CategoriaId Nombre}}`,
    });
    return await response.data.data.GHCategoriaItems
  }

  async GetCategoriaItem(Id: number): Promise<CategoriaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHCategoriaItem(Id: ${Id}) {CategoriaId Nombre}}`,
    });
    return await response.data.data.GHCategoriaItem
  }

  async GetCategoriaItemLike(Nombre: string): Promise<CategoriaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHCategoriaItemLike(Nombre: "${Nombre}") {CategoriaId Nombre}}`,
    });
    return await response.data.data.GHCategoriaItemLike;
  }



  async GetTipoProductoItems(): Promise<TipoProductoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHTipoProductoItems {TipoProductoId Nombre}}`,
    });
    return await response.data.data.GHTipoProductoItems
  }

  async GetTipoProductoItem(Id: number): Promise<TipoProductoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHTipoProductoItem(Id: ${Id}) {TipoProductoId Nombre}}`,
    });
    return await response.data.data.GHTipoProductoItem
  }

  async GetTipoProductoItemLike(Nombre: string): Promise<TipoProductoEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHTipoProductoItemLike(Nombre: "${Nombre}") {TipoProductoId Nombre}}`,
    });
    return await response.data.data.GHTipoProductoItemLike;
  }



  
  async GetMarcaItems(): Promise<MarcaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHMarcaItems {MarcaId Nombre}}`,
    });
    return await response.data.data.GHMarcaItems
  }

  async GetMarcaItem(Id: number): Promise<MarcaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHMarcaItem(Id: ${Id}) {MarcaId Nombre}}`,
    });
    return await response.data.data.GHMarcaItem
  }

  async GetMarcaItemLike(Nombre: string): Promise<MarcaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHMarcaItemLike(Nombre: "${Nombre}") {MarcaId Nombre}}`,
    });
    return await response.data.data.GHMarcaItemLike;
  }



  
  async GetModeloItems(): Promise<ModeloEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHModeloItems {ModeloId Nombre}}`,
    });
    return await response.data.data.GHModeloItems
  }

  async GetModeloItem(Id: number): Promise<ModeloEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHModeloItem(Id: ${Id}) {ModeloId Nombre}}`,
    });
    return await response.data.data.GHModeloItem
  }

  async GetModeloItemLike(Nombre: string): Promise<ModeloEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHModeloItemLike(Nombre: "${Nombre}") {ModeloId Nombre}}`,
    });
    return await response.data.data.GHModeloItemLike;
  }



   
  async GetUnidadMedidaItems(): Promise<UnidadMedidaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `
      {GHUnidadMedidaItems {UnidadMedidaId Nombre}}`,
    });
    return await response.data.data.GHUnidadMedidaItems
  }

  async GetUnidadMedidaItem(Id: number): Promise<UnidadMedidaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{ GHUnidadMedidaItem(Id: ${Id}) {UnidadMedidaId Nombre}}`,
    });
    return await response.data.data.GHUnidadMedidaItem
  }

  async GetUnidadMedidaItemLike(Nombre: string): Promise<UnidadMedidaEntity[]> {
    const response = await apiLg.post('gql/General', {
      query: `{
        GHUnidadMedidaItemLike(Nombre: "${Nombre}") {UnidadMedidaId Nombre}}`,
    });
    return await response.data.data.GHUnidadMedidaItemLike;
  }

}

export default GeneralService;
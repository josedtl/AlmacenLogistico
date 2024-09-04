import { MercaderiaItemOPModel, MercaderiaMainModel, MercaderiaSaveModel } from '../Models/MercaderiaEntity';
import { EntidadLikeModel } from '../Models/EntidadLikeModel';
import { apiLg } from './axios-config';
import { MercaderiaPresentacionSaveModel } from '../Models/MercaderiaPresentacionEntity';
class MercaderiaService {



  async getItems(): Promise<MercaderiaMainModel[]> {

    try {
      const response = await apiLg.get(`api/Mercaderia/ObtenerMain`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }

  }



  async saveItem(item: MercaderiaSaveModel): Promise<MercaderiaSaveModel | null> {
    try {
      const response = await apiLg.post(`api/Mercaderia/Registrar/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }


  }

  async GetCabeceraItem(Id: number): Promise<MercaderiaSaveModel[]> {
    try {
      const response = await apiLg.get(`api/Mercaderia/ObtenerItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemCategoriaLike(codigo: string, value: number): Promise<MercaderiaItemOPModel[]> {
    try {

      const EntLike = new EntidadLikeModel();
      EntLike.Valor1 = codigo;
      EntLike.ValorInt1 = value;
      const response = await apiLg.post(`api/Mercaderia/BuscarCategoriaItem`, EntLike, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async GetMercaderia_ItemOP(Id: number): Promise<MercaderiaItemOPModel[]> {

    try {
      const response = await apiLg.get(`api/Mercaderia/ObtenerItemOP/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }

  }
  async ObtenerMercaderiaTarifaItems(): Promise<MercaderiaSaveModel[]> {
    try {
      const response = await apiLg.get(`api/Mercaderia/ObtenerMercaderiaTarifaItems`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }

  }
  async GetObtenerMercaderiaTarifa(Id: number): Promise<MercaderiaSaveModel[]> {
    try {
      const response = await apiLg.get(`api/Mercaderia/ObtenerMercaderiaTarifa/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }

  }
  async GetBuscarItem(codigo: string): Promise<MercaderiaSaveModel[]> {
    try {

      const EntLike = new EntidadLikeModel();
      EntLike.Valor1 = codigo;

      const response = await apiLg.post(`api/Mercaderia/BuscarItem`, EntLike, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async ObtenerDetalleMPresentacion(Id: number): Promise<MercaderiaPresentacionSaveModel[]> {
    try {
      const response = await apiLg.get(`api/Mercaderia/MercaderiaPresentacionObtenerDetalle/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


}

export default MercaderiaService;
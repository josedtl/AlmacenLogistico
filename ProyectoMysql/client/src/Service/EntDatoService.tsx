import { EntDatoModel } from '../Models/EntDatoEntity';
import { EntidadLikeModel } from '../Models/EntidadLikeModel';
import { apiLg } from './axios-config';

class EntDatoService {



  async getItemLike(codigo: string, value: string): Promise<EntDatoModel[]> {
    try {

      const EntLike = new EntidadLikeModel();
      EntLike.Valor1 = codigo;
      EntLike.Valor2 = value;
      const response = await apiLg.post(`api/EntDato/GetItemLike`, EntLike, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async GetNomCompletoItemLike(value: string): Promise<EntDatoModel[]> {
    try {

      const EntLike = new EntidadLikeModel();
      EntLike.Valor1 = value;
      const response = await apiLg.post(`api/EntDato/GetNomCompletoItemLike`, EntLike, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async GetNomCompletoItem(value: number): Promise<EntDatoModel[]> {
    try {
      const EntLike = new EntidadLikeModel();
      EntLike.ValorInt1 = value;
      const response = await apiLg.post(`api/EntDato/GetNomCompletoItem`, EntLike, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default EntDatoService;
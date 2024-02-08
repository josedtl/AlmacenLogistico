import { EntListaModel } from '../Models/EntListaEntity';
import { EntidadLikeModel } from '../Models/EntidadLikeModel';
import { apiLg } from './axios-config';

class EntListaService {

  async getItems(Codigo: string): Promise<EntListaModel[]> {
    try {
      const response = await apiLg.get(`api/EntLista/GetItems/${Codigo}`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async getItem(Id: number): Promise<EntListaModel[]> {
    try {
      const response = await apiLg.get(`api/EntLista/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItemLike(codigo: string, value: string): Promise<EntListaModel[]> {
    try {

      const EntLike = new EntidadLikeModel();
      EntLike.Valor1 = codigo;
      EntLike.Valor2 = value;
      const response = await apiLg.post(`api/EntLista/GetItemLike`, EntLike, {
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

export default EntListaService;
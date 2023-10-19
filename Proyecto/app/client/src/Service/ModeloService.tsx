import { ModeloEntity } from '../Models/ModeloEntity';
import { apiLg } from './axios-config';

class ModeloService {

  async getItems(): Promise<ModeloEntity[]> {
    try {
      const response = await apiLg.get(`api/Modelo/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(ModeloId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/Modelo/Delete/${ModeloId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: ModeloEntity): Promise<ModeloEntity | null> {
    try {
      const response = await apiLg.post(`api/Modelo/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<ModeloEntity[]> {
    try {
      const response = await apiLg.get(`api/Modelo/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<ModeloEntity[]> {
    try {
      const response = await apiLg.get(`api/Modelo/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default ModeloService;
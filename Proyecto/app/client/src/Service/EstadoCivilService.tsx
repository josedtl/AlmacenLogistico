import { EstadoCivilEntity } from '../Models/EstadoCivilEntity';
import { apiLg } from './axios-config';

class EstadoCivilService {

  async getItems(): Promise<EstadoCivilEntity[]> {
    try {
      const response = await apiLg.get(`api/EstadoCivil/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(EstadoCivilId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/EstadoCivil/Delete/${EstadoCivilId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: EstadoCivilEntity): Promise<EstadoCivilEntity | null> {
    try {
      const response = await apiLg.post(`api/EstadoCivil/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<EstadoCivilEntity[]> {
    try {
      const response = await apiLg.get(`api/EstadoCivil/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<EstadoCivilEntity[]> {
    try {
      const response = await apiLg.get(`api/EstadoCivil/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default EstadoCivilService;
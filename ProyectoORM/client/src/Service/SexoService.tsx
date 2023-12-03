import { SexoEntity } from '../Models/SexoEntity';
import { apiLg } from './axios-config';

class SexoService {

  async getItems(): Promise<SexoEntity[]> {
    try {
      const response = await apiLg.get(`api/Sexo/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(SexoId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/Sexo/Delete/${SexoId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: SexoEntity): Promise<SexoEntity | null> {
    try {
      const response = await apiLg.post(`api/Sexo/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<SexoEntity[]> {
    try {
      const response = await apiLg.get(`api/Sexo/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<SexoEntity[]> {
    try {
      const response = await apiLg.get(`api/Sexo/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default SexoService;
import { MarcaEntity } from '../Models/MarcaEntity';
import { apiLg } from './axios-config';

class MarcaService {

  async getItems(): Promise<MarcaEntity[]> {
    try {
      const response = await apiLg.get(`api/Marca/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(MarcaId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/Marca/Delete/${MarcaId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: MarcaEntity): Promise<MarcaEntity | null> {
    try {
      const response = await apiLg.post(`api/Marca/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<MarcaEntity[]> {
    try {
      const response = await apiLg.get(`api/Marca/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<MarcaEntity[]> {
    try {
      const response = await apiLg.get(`api/Marca/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default MarcaService;
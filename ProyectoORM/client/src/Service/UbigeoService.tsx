import { UbigeoEntity } from '../Models/UbigeoEntity';
import { apiLg } from './axios-config';

class UbigeoService {

  async getItems(): Promise<UbigeoEntity[]> {
    try {
      const response = await apiLg.get(`api/Ubigeo/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(UbigeoId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/Ubigeo/Delete/${UbigeoId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: UbigeoEntity): Promise<UbigeoEntity | null> {
    try {
      const response = await apiLg.post(`api/Ubigeo/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<UbigeoEntity[]> {
    try {
      const response = await apiLg.get(`api/Ubigeo/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<UbigeoEntity[]> {
    try {
      const response = await apiLg.get(`api/Ubigeo/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default UbigeoService;
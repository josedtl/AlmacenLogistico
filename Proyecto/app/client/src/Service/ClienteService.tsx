import { ClienteEntity } from '../Models/ClienteEntity';
import { apiLg } from './axios-config';

class ClienteService {

  async getItems(): Promise<ClienteEntity[]> {
    try {
      const response = await apiLg.get(`api/Cliente/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(ClienteId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/Cliente/Delete/${ClienteId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: ClienteEntity): Promise<ClienteEntity | null> {
    try {
      const response = await apiLg.post(`api/Cliente/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<ClienteEntity[]> {
    try {
      const response = await apiLg.get(`api/Cliente/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<ClienteEntity[]> {
    try {
      const response = await apiLg.get(`api/Cliente/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItemCompleto(item: ClienteEntity): Promise<ClienteEntity> {
    try {
      const response = await apiLg.post(`api/Cliente/SaveCompleto/`, item, {
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

export default ClienteService;
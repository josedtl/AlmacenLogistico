import { OrdenPedidoEntity } from '../Models/OrdenPedidoEntity';
import { apiLg } from './axios-config';

class OrdenPedidoService {

  async getItems(): Promise<OrdenPedidoEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenPedido/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(OrdenPedidoId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/OrdenPedido/Delete/${OrdenPedidoId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: OrdenPedidoEntity): Promise<OrdenPedidoEntity | null> {
    try {
      const response = await apiLg.post(`api/OrdenPedido/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<OrdenPedidoEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenPedido/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<OrdenPedidoEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenPedido/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default OrdenPedidoService;
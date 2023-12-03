import { TipoProductoEntity } from '../Models/TipoProductoEntity';
import { apiLg } from './axios-config';

class TipoProductoService {

  async getItems(): Promise<TipoProductoEntity[]> {
    try {
      const response = await apiLg.get(`api/TipoProducto/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(TipoProductoId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/TipoProducto/Delete/${TipoProductoId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: TipoProductoEntity): Promise<TipoProductoEntity | null> {
    try {
      const response = await apiLg.post(`api/TipoProducto/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<TipoProductoEntity[]> {
    try {
      const response = await apiLg.get(`api/TipoProducto/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<TipoProductoEntity[]> {
    try {
      const response = await apiLg.get(`api/TipoProducto/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default TipoProductoService;
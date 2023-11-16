import { CategoriaEntity } from '../Models/CategoriaEntity';
import { apiLg } from './axios-config';

class CategoriaService {

  async getItems(): Promise<CategoriaEntity[]> {
    try {
      const response = await apiLg.get(`api/Categoria/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(CategoriaId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/Categoria/Delete/${CategoriaId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: CategoriaEntity): Promise<CategoriaEntity | null> {
    try {
      const response = await apiLg.post(`api/Categoria/Save`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<CategoriaEntity[]> {
    try {
      const response = await apiLg.get(`api/Categoria/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<CategoriaEntity[]> {
    try {
      const response = await apiLg.get(`api/Categoria/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default CategoriaService;
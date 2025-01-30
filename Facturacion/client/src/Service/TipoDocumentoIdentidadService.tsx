import { TipoDocumentoIdentidadEntity } from '../Models/TipoDocumentoIdentidadEntity';
import { apiLg } from './axios-config';

class TipoDocumentoIdentidadService {

  async getItems(): Promise<TipoDocumentoIdentidadEntity[]> {
    try {
      const response = await apiLg.get(`api/TipoDocumentoIdentidad/GetItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async deleteItem(TipoDocumentoIdentidadId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/TipoDocumentoIdentidad/Delete/${TipoDocumentoIdentidadId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: TipoDocumentoIdentidadEntity): Promise<TipoDocumentoIdentidadEntity | null> {
    try {
      const response = await apiLg.post(`api/TipoDocumentoIdentidad/Save/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<TipoDocumentoIdentidadEntity[]> {
    try {
      const response = await apiLg.get(`api/TipoDocumentoIdentidad/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<TipoDocumentoIdentidadEntity[]> {
    try {
      const response = await apiLg.get(`api/TipoDocumentoIdentidad/GetItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default TipoDocumentoIdentidadService;
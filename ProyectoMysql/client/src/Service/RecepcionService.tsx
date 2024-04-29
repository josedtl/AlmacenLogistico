import { RecepcionEntity } from '../Models/RecepcionEntity';
import { apiLg } from './axios-config';

class RecepcionService {


  async saveItem(item: RecepcionEntity): Promise<RecepcionEntity | null> {
    try {
      const response = await apiLg.post(`api/Recepcion/Save`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async GetItemOPMain(): Promise<RecepcionEntity[]> {
    try {
      const response = await apiLg.get(`api/Recepcion/GetItemMain`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async ObtenerItems(Id: number): Promise<RecepcionEntity[]> {
    try {
      const response = await apiLg.get(`api/Recepcion/ObtenerItems/${Id}`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}


export default RecepcionService;
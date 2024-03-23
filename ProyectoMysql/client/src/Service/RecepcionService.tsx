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
}


export default RecepcionService;
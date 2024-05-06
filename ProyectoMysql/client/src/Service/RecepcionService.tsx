import { RecepcionEntity, RecepListaModel } from '../Models/RecepcionEntity';
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

  async ObtenerItem(Id: number): Promise<RecepcionEntity[]> {
    try {
      const response = await apiLg.get(`api/Recepcion/ObtenerItem/${Id}`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async ReceptListaObtenerLista(Codigo :string): Promise<RecepListaModel[]> {
    try {
      const response = await apiLg.get(`api/Recepcion/ReceptListaObtenerLista/${Codigo}`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  
  async ReceptListaObtenerItem(Id: number): Promise<RecepListaModel[]> {
    try {
      const response = await apiLg.get(`api/Recepcion/ReceptListaObtenerItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


}


export default RecepcionService;
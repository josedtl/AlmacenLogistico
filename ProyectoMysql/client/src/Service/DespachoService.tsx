import { DespachoEntity,DespachoCabeceraModel,DespachoDetalleModel} from '../Models/DespachoEntity';
import { apiLg } from './axios-config';

class DespachoService {

  async GetMain(): Promise<DespachoEntity[]> {
    try {
      const response = await apiLg.get(`api/Despacho/ObtenerMain`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }
  async GetItemCabecera(Id: number): Promise<DespachoEntity[]> {
    try {
      const response = await apiLg.get(`api/Despacho/ObtenerCabecera/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }
 
  async GetItemDetalle(Id: number): Promise<DespachoDetalleModel[]> {
    try {
      const response = await apiLg.get(`api/Despacho/ObtenerDetalle/${Id}`);
      console.log(response);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }
  async saveItem(item: DespachoEntity): Promise<DespachoEntity | null> {
    try {
      const response = await apiLg.post(`api/Despacho/Registrar/`, item, {
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

export default DespachoService;
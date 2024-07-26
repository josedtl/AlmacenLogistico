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
  async GetItemCabecera(Id: number): Promise<DespachoCabeceraModel[]> {
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


}

export default DespachoService;
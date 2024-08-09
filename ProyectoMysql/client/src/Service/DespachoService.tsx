import { DespachoEntity,DespachoReservaOPModel,DespachoDetalleEntity} from '../Models/DespachoEntity';
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
 
  async GetItemDetalle(Id: number): Promise<DespachoDetalleEntity[]> {
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
      const response = await apiLg.post(`api/Despacho/Registrar`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }
  
  async GetDetalleOP(Id: number): Promise<DespachoReservaOPModel[]> {
    try {
      const response = await apiLg.get(`api/Despacho/ObtenerReservaOPItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default DespachoService;
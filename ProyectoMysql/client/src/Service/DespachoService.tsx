import { DespachoEntity} from '../Models/DespachoEntity';
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
}

export default DespachoService;
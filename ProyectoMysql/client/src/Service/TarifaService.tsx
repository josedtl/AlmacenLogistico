import {TarifaEntity} from '../Models/TarifaEntity'
import { apiLg } from './axios-config';

class TarifaService {



  async getItems(): Promise<TarifaEntity[]> {
    try {
      const response = await apiLg.get(`api/Tarifa/ObtenerMain`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default TarifaService;
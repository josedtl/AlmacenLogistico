import { StockMercaderiaMainModel } from '../Models/StockMercaderiaEntity';
import { apiLg } from './axios-config';

class DespachoService {

  async GetMain(): Promise<StockMercaderiaMainModel[]> {
    try {
      const response = await apiLg.get(`api/Stock/ObtenerMain`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }
 

}

export default DespachoService;
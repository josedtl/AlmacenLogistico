import { ProcesoModel } from '../Models/ProcesoEntity';
import { apiLg } from './axios-config';

class ProcesoService {




  async ObtenerTipo(Codigo: string): Promise<ProcesoModel[]> {
    try {
      const response = await apiLg.get(`api/Proceso/ObtenerTipo/${Codigo}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default ProcesoService;
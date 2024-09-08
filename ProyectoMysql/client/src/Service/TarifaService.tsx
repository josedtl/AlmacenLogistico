import { TarifaEntity, TarifaMonedaModel, TarifaUnidadMedidaPrecioModel } from '../Models/TarifaEntity'
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


  async GetObtenerItem(Id: number): Promise<TarifaEntity[]> {
    try {
      const response = await apiLg.get(`api/Tarifa/ObtenerItem/${Id}`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async saveItem(item: TarifaEntity): Promise<TarifaEntity | null> {
    try {
      const response = await apiLg.post(`api/Tarifa/Registrar`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      return response.data.Value;
    } catch (error) {
      console.error('Error al guardar el item:', error);
      throw error;
    }
  }


  async ObtenerMoneda(MercaderiaId: number): Promise<TarifaMonedaModel[]> {
    try {
      const response = await apiLg.get(`api/Tarifa/ObtenerMoneda/${MercaderiaId}`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }


  async ObtenerUnidadMedidaPrecio(MercaderiaId: number, MonedaId: number): Promise<TarifaUnidadMedidaPrecioModel[]> {
    try {
      const response = await apiLg.get(`api/Tarifa/ObtenerUnidadMedidaPrecio/${MercaderiaId}/${MonedaId}`);
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

export default TarifaService;
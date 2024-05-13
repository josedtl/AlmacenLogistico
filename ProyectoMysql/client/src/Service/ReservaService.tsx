import { ReservaEntity, ReservaMercaderiaOPModel, ReservaPedidoModel } from '../Models/ReservaEntity';
import { apiLg } from './axios-config';

class ReservaService {

  async GetMercaderiaMainItems(): Promise<ReservaEntity[]> {
    try {
      const response = await apiLg.get(`api/Reserva/GetMercaderiaMainItems`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async ReservarMercaderia(item: ReservaMercaderiaOPModel): Promise<ReservaMercaderiaOPModel> {
    try {
      const response = await apiLg.post(`api/Reserva/ReservarMercaderia/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async ReservaPedido(MercaderiaId: number): Promise<ReservaPedidoModel[]> {
    try {
      const response = await apiLg.get(`api/Reserva/ReservaPedido/${MercaderiaId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


}

export default ReservaService;
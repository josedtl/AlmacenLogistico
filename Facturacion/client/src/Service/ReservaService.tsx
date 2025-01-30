import { ReservaDetalleEntity, ReservaEntity, ReservaMercaderiaOPModel, ReservaPedidoModel, ReservaResumenModel } from '../Models/ReservaEntity';
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

  async ReservaResumen(MercaderiaId: number): Promise<ReservaResumenModel[]> {
    try {
      const response = await apiLg.get(`api/Reserva/ReservaResumen/${MercaderiaId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  
  async ReservarMercaderiaDetalle(items: ReservaDetalleEntity[]): Promise<ReservaDetalleEntity[]> {
    try {
      const response = await apiLg.post(`api/Reserva/ReservarMercaderiaDetalle/`, items, {
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

export default ReservaService;
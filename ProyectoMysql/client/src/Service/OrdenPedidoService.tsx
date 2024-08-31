import { OrdenPedidoDetalleEntity } from '../Models/OrdenPedidoDetalleEntity';
import { OrdenPedidoEntity } from '../Models/OrdenPedidoEntity';
import { apiLg } from './axios-config';

class OrdenPedidoService {


  async saveItem(item: OrdenPedidoEntity): Promise<OrdenPedidoEntity | null> {
    try {
      const response = await apiLg.post(`api/OrdenPedido/Registrar/`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<OrdenPedidoEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenPedido/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }



  async GetItemCabecera(Id: number): Promise<OrdenPedidoEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenPedido/ObtenerItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  
  async GetItemCabeceraOP(Id: number): Promise<OrdenPedidoDetalleEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenPedido/ObtenerDetalleItem/${Id}`);
      console.log(response);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async GetItemOPMain(): Promise<OrdenPedidoEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenPedido/ObtenerMain`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }
}


export default OrdenPedidoService;
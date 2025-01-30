import { OrdenCompraDetalleEntity } from '../Models/OrdenCompraDetalleEntity';
import { OrdenCompraEntity } from '../Models/OrdenCompraEntity';
import { OrdenPedidoFiltroOCOModel } from '../Models/OrdenPedidoEntity';
import { OrdenPedidoFiltroOCDModel } from '../Models/OrdenPedidoDetalleEntity';
import { apiLg } from './axios-config';

class OrdenCompraService {


  async saveItem(item: OrdenCompraEntity): Promise<OrdenCompraEntity | null> {
    try {
      const response = await apiLg.post(`api/OrdenCompra/Registrar`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async GetItemCabecera(Id: number): Promise<OrdenCompraEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenCompra/ObtenerItem/${Id}`);
      console.log(response);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  
  async GetItemCabeceraOP(Id: number): Promise<OrdenCompraDetalleEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenCompra/ObtenerDetalleItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async GetItemOPMain(): Promise<OrdenCompraEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenCompra/ObtenerMain`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

  async getObtenerFiltroOCO(): Promise<OrdenPedidoFiltroOCOModel[]> {
    try {
      const response = await apiLg.get(`api/OrdenCompra/ObtenerFiltroOCO`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }
  async getObtenerFiltroOCD(): Promise<OrdenPedidoFiltroOCDModel[]> {
    try {
      const response = await apiLg.get(`api/OrdenCompra/ObtenerFiltroOCD`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }

}


export default OrdenCompraService;
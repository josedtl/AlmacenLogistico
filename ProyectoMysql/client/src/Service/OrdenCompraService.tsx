import { OrdenCompraDetalleEntity } from '../Models/OrdenCompraDetalleEntity';
import { OrdenCompraEntity } from '../Models/OrdenCompraEntity';
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
      const response = await apiLg.get(`api/OrdenCompra/GetItem/${Id}`);
      console.log(response);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  
  async GetItemCabeceraOP(Id: number): Promise<OrdenCompraDetalleEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenCompra/GetItemCabeceraDetalle/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async GetItemOPMain(): Promise<OrdenCompraEntity[]> {
    try {
      const response = await apiLg.get(`api/OrdenCompra/GetItemMain`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }
}


export default OrdenCompraService;
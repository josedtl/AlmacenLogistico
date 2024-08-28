import axios from 'axios';
import {  MercaderiaItemOPModel, MercaderiaMainModel, MercaderiaSaveModel } from '../Models/MercaderiaEntity';
import { EntidadLikeModel } from '../Models/EntidadLikeModel';

const URL = import.meta.env.VITE_SOME_KEY;
class MercaderiaService {



  async getItems(): Promise<MercaderiaMainModel[]> {
    try {
      const response = await axios.get(`${URL}/api/Mercaderia/ObtenerMain`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }



  async saveItem(item: MercaderiaSaveModel): Promise<MercaderiaSaveModel | null> {
    try {
      const response = await axios.post(`${URL}/api/Mercaderia/Registrar`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        return response.data.Value;
      } else {
        console.log('Save operation failed');
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async GetCabeceraItem(Id:number): Promise<MercaderiaSaveModel[]> {
    try {
      const response = await axios.get(`${URL}/api/Mercaderia/ObtenerItem/${Id}`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getItemCategoriaLike(codigo: string, value: number): Promise<MercaderiaItemOPModel[]> {
    try {

      const EntLike = new EntidadLikeModel();
      EntLike.Valor1 = codigo;
      EntLike.ValorInt1 = value;
      const response = await axios.post(`${URL}/api/Mercaderia/BuscarCategoriaItem`, EntLike, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async GetMercaderia_ItemOP(Id:number): Promise<MercaderiaItemOPModel[]> {
    try {
      const response = await axios.get(`${URL}/api/Mercaderia/ObtenerItemOP/${Id}`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  async ObtenerMercaderiaTarifaItems(): Promise<MercaderiaSaveModel[]> {
    try {
      const response = await axios.get(`${URL}/api/Mercaderia/ObtenerMercaderiaTarifaItems`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  async GetObtenerMercaderiaTarifa(Id:number): Promise<MercaderiaSaveModel[]> {
    try {
      const response = await axios.get(`${URL}/api/Mercaderia/ObtenerMercaderiaTarifa/${Id}`);
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  async GetBuscarItem(codigo: string): Promise<MercaderiaSaveModel[]> {
    try {

        const EntLike = new EntidadLikeModel();
        EntLike.Valor1 = codigo;
        const response = await axios.post(`${URL}/api/Mercaderia/BuscarItem`, EntLike, {
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

export default MercaderiaService;
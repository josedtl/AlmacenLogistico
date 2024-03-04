import axios from 'axios';
import { MercaderiaItemCategoriaModel, MercaderiaItemOPModel, MercaderiaMainModel, MercaderiaSaveModel } from '../Models/MercaderiaEntity';
import { EntidadLikeModel } from '../Models/EntidadLikeModel';

const URL = import.meta.env.VITE_SOME_KEY;
class MercaderiaService {



  async getItems(): Promise<MercaderiaMainModel[]> {
    try {
      const response = await axios.get(`${URL}/api/Mercaderia/GetMainItems`);
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
      const response = await axios.post(`${URL}/api/Mercaderia/Save`, item, {
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
      const response = await axios.get(`${URL}/api/Mercaderia/GetCabeceraItem/${Id}`);
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
      const response = await axios.post(`${URL}/api/Mercaderia/GetMercaderiaLikeCategoria`, EntLike, {
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
      const response = await axios.get(`${URL}/api/Mercaderia/GetMercaderia_ItemOP/${Id}`);
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

export default MercaderiaService;
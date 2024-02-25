import axios from 'axios';
import { MercaderiaMainModel, MercaderiaSaveModel } from '../Models/MercaderiaEntity';

const URL = import.meta.env.VITE_SOME_KEY;
class MercaderiaService {



  async getItems(): Promise<MercaderiaMainModel[]> {
    try {
      const response = await axios.get(`${URL}/api/Mercaderia/GetMainItems`);
      console.log(response.status);
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
      console.log(response.status);
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
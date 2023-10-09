import axios from 'axios';
import { ModeloEntity } from '@/Models/ModeloEntity';

const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
class ModeloService {



  async getItems(): Promise<ModeloEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Modelo/GetMainItems/`);
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


  async deleteItem(ModeloId: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${URL}/api/Modelo/Delete/${ModeloId}`);
      return response.status === 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  async saveItem(item: ModeloEntity): Promise<ModeloEntity | null> {
    try {
      const response = await axios.post(`${URL}/api/Modelo/Save/`, item, {
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

}

export default ModeloService;
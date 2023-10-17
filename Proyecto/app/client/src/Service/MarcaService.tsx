import axios from 'axios';
import { MarcaEntity } from '../Models/MarcaEntity';

const URL = import.meta.env.VITE_SOME_KEY;
class MarcaService {



  async getItems(): Promise<MarcaEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Marca/GetItems/`);
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


  async deleteItem(MarcaId: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${URL}/api/Marca/Delete/${MarcaId}`);
      return response.status === 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  async saveItem(item: MarcaEntity): Promise<MarcaEntity | null> {
    try {
      const response = await axios.post(`${URL}/api/Marca/Save/`, item, {
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

export default MarcaService;
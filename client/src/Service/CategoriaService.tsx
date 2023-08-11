import axios from 'axios';
import { CategoriaEntity } from '@/Models/CategoriaEntity';

const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
class CategoriaService {



  async getItems(): Promise<CategoriaEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Categoria/GetMainItems/`);
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


  async deleteItem(CategoriaId: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${URL}/api/Categoria/Delete/${CategoriaId}`);
      return response.status === 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  async saveItem(item: CategoriaEntity): Promise<CategoriaEntity | null> {
    try {
      const response = await axios.post(`${URL}/api/Categoria/Save/`, item, {
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

export default CategoriaService;
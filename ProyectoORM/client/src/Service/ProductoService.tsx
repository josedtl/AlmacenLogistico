import axios from 'axios';
import { ProductoEntity } from '../Models/ProductoEntity';

const URL = import.meta.env.VITE_SOME_KEY;
class ProductoService {



  async getItems(): Promise<ProductoEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Producto/GetItems`);
      console.log(response.status);
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
  async deleteItem(ProductoId: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${URL}/api/Producto/Delete/${ProductoId}`);
      return response.status === 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  async saveItem(item: ProductoEntity): Promise<ProductoEntity | null> {
    try {
      const response = await axios.post(`${URL}/api/Producto/Save`, item, {
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

  async getItem(Id :number): Promise<ProductoEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Producto/GetItem/${Id}`);
   
      return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

}

export default ProductoService;
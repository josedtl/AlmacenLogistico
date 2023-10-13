import axios from 'axios';
import { ProductoEntity } from '@/Models/Producto/ProductoEntity';

const URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL;
class ProductoService {



  async getItems(): Promise<ProductoEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Producto/GetItems/`);
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
  async GetItemsGra(): Promise<ProductoEntity[]> {
    const GET_TODOS = `
     {
      Productos
      {
      ProductoId
        Nombre
        FechaRegistro
        CodUsuario
        EstadoRegistro
      }
    }
  `;
    const response = await axios.post('http://127.0.0.1:8000/graphql', {
      query: GET_TODOS,
    });


    return await response.data.data.Productos

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
      const response = await axios.post(`${URL}/api/Producto/Save/`, item, {
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

export default ProductoService;
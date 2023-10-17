import axios from 'axios';
import { TipoProductoEntity } from '../Models/TipoProductoEntity';

const URL = import.meta.env.VITE_SOME_KEY;
class TipoProductoService {



  async getItems(): Promise<TipoProductoEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/TipoProducto/GetItems/`);
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
  async GetItemsGra(): Promise<TipoProductoEntity[]> {
    const GET_TODOS = `
     {
      TipoProductos
      {
      TipoProductoId
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


    return await response.data.data.TipoProductos

  }
  async deleteItem(TipoProductoId: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${URL}/api/TipoProducto/Delete/${TipoProductoId}`);
      return response.status === 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  }


  async saveItem(item: TipoProductoEntity): Promise<TipoProductoEntity | null> {
    try {
      const response = await axios.post(`${URL}/api/TipoProducto/Save/`, item, {
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

export default TipoProductoService;
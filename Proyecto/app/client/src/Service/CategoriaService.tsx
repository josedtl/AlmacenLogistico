import axios from 'axios';
import { CategoriaEntity } from '../Models/CategoriaEntity';
const URL = import.meta.env.VITE_SOME_KEY;
class CategoriaService {



  async getItems(): Promise<CategoriaEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Categoria/GetItems/`);
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
  async GetItemsGra(): Promise<CategoriaEntity[]> {
    const GET_TODOS = `
     {
      categorias
      {
      CategoriaId
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


    return await response.data.data.categorias

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

  async getItemLike(Nombre: string): Promise<CategoriaEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Categoria/GetItemLike/${Nombre}`);
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


  async getItem(Id: number): Promise<CategoriaEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/Categoria/GetItem/${Id}`);
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

export default CategoriaService;
import axios from 'axios';
import { CategoriaEntity } from '../Models/CategoriaEntity';
import { TipoProductoEntity } from '../Models/TipoProductoEntity';
import { MarcaEntity } from '../Models/MarcaEntity';
import { ModeloEntity } from '../Models/ModeloEntity';
import { EntidadLikeModel } from '../Models/EntidadLikeModel';
const URL = import.meta.env.VITE_SOME_KEY;
class GeneralService {

  async getCategoriaItemLike(Nombre: string): Promise<CategoriaEntity[]> {
    try {

      const LikeData = new EntidadLikeModel();
      LikeData.Nombre = Nombre;
      const response = await axios.post(`${URL}/api/General/GetCategoriaItemLike/`, LikeData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }




  async GetCategoriaItem(Id: number): Promise<CategoriaEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/General/GetCategoriaItem/${Id}`);
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


  async getTipoProductoItemLike(Nombre: string): Promise<TipoProductoEntity[]> {
    try {
      const LikeData = new EntidadLikeModel();
      LikeData.Nombre = Nombre;
      const response = await axios.post(`${URL}/api/General/GetTipoProductoItemLike/`, LikeData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }




  async GetTipoProductoItem(Id: number): Promise<TipoProductoEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/General/GetTipoProductoItem/${Id}`);
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
  async getMarcaItemLike(Nombre: string): Promise<MarcaEntity[]> {
    try {
      const LikeData = new EntidadLikeModel();
      LikeData.Nombre = Nombre;
      const response = await axios.post(`${URL}/api/General/GetMarcaItemLike/`, LikeData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }



  async GetMarcaItem(Id: number): Promise<MarcaEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/General/GetMarcaItem/${Id}`);
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


  async getModeloItemLike(Nombre: string): Promise<ModeloEntity[]> {
    try {
      const LikeData = new EntidadLikeModel();
      LikeData.Nombre = Nombre;
      const response = await axios.post(`${URL}/api/General/GetModeloItemLike/`, LikeData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200 && response.data.Value != null) {
        return response.data.Value;
      }
      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  }



  async GetModeloItem(Id: number): Promise<ModeloEntity[]> {
    try {
      const response = await axios.get(`${URL}/api/General/GetModeloItem/${Id}`);
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

export default GeneralService;
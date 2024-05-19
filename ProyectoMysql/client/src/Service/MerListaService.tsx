import { EntidadLikeModel } from '../Models/EntidadLikeModel';
import { MerListaEntity, MerListaTituloModel } from '../Models/MerListaEntity';
import { apiLg } from './axios-config';

class MerListaService {

  ServiceName: string = 'MerLista';

  async getItems(Codigo :string): Promise<MerListaEntity[]> {
    try {
      const response = await apiLg.get(`api/${this.ServiceName}/ObtenerMain/${Codigo}`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }



  async saveItem(item: MerListaEntity): Promise<MerListaEntity | null> {
    try {
      const response = await apiLg.post(`api/${this.ServiceName}/Registrar`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(codigo: string, value: string): Promise<MerListaEntity[]> {
    try {

      const EntLike = new EntidadLikeModel();
      EntLike.Valor1 = codigo;
      EntLike.Valor2 = value;
      const response = await apiLg.post(`api/${this.ServiceName}/BuscarItem`, EntLike, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<MerListaEntity[]> {
    try {
      const response = await apiLg.get(`api/${this.ServiceName}/ObtenerItem/${Id}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async GetItemTitulo(Codigo :string): Promise<MerListaTituloModel[]> {
    try {
      const response = await apiLg.get(`api/${this.ServiceName}/ObtenerTitulo/${Codigo}`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }


  async deleteItem(CategoriaId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/${this.ServiceName}/Delete/${CategoriaId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

}

export default MerListaService;
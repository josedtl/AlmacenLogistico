import { EntidadEmpresaEntity , EmpresaEntity} from '../Models/EmpresaEntity';
import { apiLg } from './axios-config';

class EmpresaService {

  async getItems(): Promise<EntidadEmpresaEntity[]> {
    try {
      const response = await apiLg.get(`api/EntidadEmpresa/getEntidadEmpresas`);
      return response.data.Value;

    } catch (error) {
      throw error;
    }
  }


  async deleteItem(EmpresaId: number): Promise<boolean> {
    try {
      const response = await apiLg.delete(`api/Empresa/Delete/${EmpresaId}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async saveItem(item: EmpresaEntity): Promise<EmpresaEntity | null> {
    try {
      const response = await apiLg.post(`api/EntidadEmpresa/SaveItem`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }

  async getItemLike(Nombre: string): Promise<EmpresaEntity[]> {
    try {
      const response = await apiLg.get(`api/Empresa/GetItemLike/${Nombre}`);
      return response.data.Value;
    } catch (error) {
      throw error;
    }
  }


  async getItem(Id: number): Promise<EmpresaEntity[]> {
    try {
      const response = await apiLg.get(`api/EntidadEmpresa/getEmpresaItem/${Id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async GetMainItems(): Promise<EntidadEmpresaEntity[]> {
    try {
      const response = await apiLg.get(`api/EntidadEmpresa/getEntidadEmpresas`);
      return response.data;

    } catch (error) {
      throw error;
    }
  }

}

export default EmpresaService;
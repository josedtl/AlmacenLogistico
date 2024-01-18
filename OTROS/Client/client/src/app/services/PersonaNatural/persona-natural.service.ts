import { Injectable } from '@angular/core';
import { PersonaNaturalSaveModel } from '../../models/PersonaNatural/PersonaNaturalSaveModel'
import { PersonaNaturalMainModel } from '../../models/PersonaNatural/PersonaNaturalMainModel'
import { apiGeneral } from '../axios-config';
import { PersonaNaturalMedioComunicacionSaveModel } from '../../models/PersonaNatural/PersonaNaturalMedioComunicacionSaveModel';
@Injectable({
  providedIn: 'root'
})
export class PersonaNaturalService {


  constructor() { }


  async GetAllItems(): Promise<PersonaNaturalSaveModel[]> {
    try {

      const response = await apiGeneral.get(`api/PersonaNatural/GetAllItems`);
      return response.data;

    } catch (error) {

      throw error;

    }
  }

  async GetAllItem(id: number): Promise<PersonaNaturalSaveModel[]> {
    try {

      const response = await apiGeneral.get(`api/PersonaNatural/GetAllItem/${id}`);
      return response.data;

    } catch (error) {

      throw error;

    }
  }

  async save(item: PersonaNaturalSaveModel): Promise<PersonaNaturalSaveModel> {
    try {
      const response = await apiGeneral.post(`api/PersonaNatural/Save`, item, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  }


  async delete(id: number): Promise<PersonaNaturalSaveModel[]> {
    try {

      const response = await apiGeneral.delete(`api/PersonaNatural/Delete/${id}`);

      return response.data;

    } catch (error) {

      throw error;

    }
  }

  async GetPersonaNaturalMainItems(): Promise<PersonaNaturalMainModel[]> {
    try {

      const response = await apiGeneral.get(`api/PersonaNatural/GetPersonaNaturalMainItems`);
      console.log(response)
      return response.data;

    } catch (error) {

      throw error;

    }
  }

  async GetMedioComunicacionDetalle(id: number): Promise<PersonaNaturalMedioComunicacionSaveModel[]> {
    try {

      const response = await apiGeneral.get(`api/PersonaNatural/GetMedioComunicacionDetalle/${id}`);
      return response.data;

    } catch (error) {

      throw error;

    }
  }

  async GetMedioComunicacionDetalleAlle(id: number): Promise<PersonaNaturalMedioComunicacionSaveModel[]> {
    try {

      const response = await apiGeneral.get(`api/PersonaNatural/GetMedioComunicacionDetalle/${id}`);
      return response.data;

    } catch (error) {

      throw error;

    }
  }



}

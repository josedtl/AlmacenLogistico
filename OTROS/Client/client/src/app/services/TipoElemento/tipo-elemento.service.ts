import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TipoElementoEntity } from '../../models/TipoElemento/TipoElementoEntity'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TipoElementoServiceService {


  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTipoElemento(): Observable< TipoElementoEntity []> {
    return this.http.get<TipoElementoEntity[]>(`${this.API_URI}/api/TipoElemento/GetAllItems`);
  }

  save(item: TipoElementoEntity): Observable< TipoElementoEntity> {
    return this.http.post< TipoElementoEntity>(`${this.API_URI}/api/TipoElemento/Save`, item);
  }
  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URI}/api/TipoElemento/Delete/${id}`);
  }

}

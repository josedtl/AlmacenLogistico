import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServicioBasicoEntity  } from '../../models/ServicoBasico/ServicioBasicoEntity'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicioBasicoService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getServicioBasico(): Observable<ServicioBasicoEntity[]> {
    return this.http.get<ServicioBasicoEntity[]>(`${this.API_URI}/api/ServicioBasico/GetAllItems`);
  }

  save(item: ServicioBasicoEntity): Observable<ServicioBasicoEntity> {
    return this.http.post<ServicioBasicoEntity>(`${this.API_URI}/api/ServicioBasico/Save`, item);
  }
  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URI}/api/ServicioBasico/Delete/${id}`);
  }
}


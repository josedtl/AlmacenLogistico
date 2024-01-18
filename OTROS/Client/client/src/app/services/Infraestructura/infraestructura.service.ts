import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  InfraestructuraMainModel} from '../../models/Infraestructura/InfraestructuraMainModel'
import { InfraestructuraSaveModel } from '../../models/Infraestructura/InfraestructuraSaveModel'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InfraestructuraService {
  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  
  GetAllItems(): Observable<InfraestructuraSaveModel[]> {
    return this.http.get<InfraestructuraSaveModel[]>(`${this.API_URI}/api/Infraestructura/GetAllItems`);
  }

  GetAllItem(id: number): Observable<InfraestructuraSaveModel[]> {
    return this.http.get<InfraestructuraSaveModel[]>(`${this.API_URI}/api/Infraestructura/GetAllItem/${id}`);
  }


  save(item: InfraestructuraSaveModel): Observable<InfraestructuraSaveModel> {
    return this.http.post<InfraestructuraSaveModel>(`${this.API_URI}/api/Infraestructura/Save`, item);
  }
  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URI}/api/Infraestructura/Delete/${id}`);
  }

  // GetInfraestructuraMainItems(): Observable<InfraestructuraMainModel[]> {
  //   return this.http.get<InfraestructuraMainModel[]>(`${this.API_URI}/api/Infraestructura/GetInfraestructuraMainItems`);
  // }
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoDocumentoIdentidadItemModel } from '../../models/General/TipoDocumentoIdentidadItemModel'
import { UbigeoItemModel } from '../../models/General/UbigeoItemModel'
import { GeneroItemModel } from '../../models/General/GeneroItemModel'
import { EstadoCivilItemModel } from '../../models/General/EstadoCivilItemModel'
import { Observable } from 'rxjs/internal/Observable';
import { MedioComunicacionItemModel } from '../../models/General/MedioComunicacionItemModel';
@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  GetTipoDocuemntoIdentidadPersonaItems(): Observable<TipoDocumentoIdentidadItemModel[]> {
    return this.http.get<TipoDocumentoIdentidadItemModel[]>(`${this.API_URI}/api/General/GetTipoDocuemntoIdentidadPersonaItems`);
  }
  GetUbigeoLikeItem(Nombre: string): Observable<UbigeoItemModel[]> {
    return this.http.get<UbigeoItemModel[]>(`${this.API_URI}/api/General/GetUbigeoLikeItem/${Nombre}`);
  }
  GetUbigeoItem(Id: number): Observable<UbigeoItemModel[]> {
    return this.http.get<UbigeoItemModel[]>(`${this.API_URI}/api/General/GetUbigeoItem/${Id}`);
  }

  GetGeneroItems(): Observable<GeneroItemModel[]> {
    return this.http.get<GeneroItemModel[]>(`${this.API_URI}/api/General/GetGeneroItems`);
  }

  GetGeneroItem(Id: number): Observable<GeneroItemModel[]> {
    return this.http.get<GeneroItemModel[]>(`${this.API_URI}/api/General/GetGeneroItem/${Id}`);
  }

  GetEstadoCivilItems(): Observable<EstadoCivilItemModel[]> {
    return this.http.get<EstadoCivilItemModel[]>(`${this.API_URI}/api/General/GetEstadoCivilItems`);
  }

  GetEstadoCivilItem(Id: number): Observable<EstadoCivilItemModel[]> {
    return this.http.get<EstadoCivilItemModel[]>(`${this.API_URI}/api/General/GetEstadoCivilItem/${Id}`);
  }

  GetMedioComunicacionItems(): Observable<MedioComunicacionItemModel[]> {
    return this.http.get<MedioComunicacionItemModel[]>(`${this.API_URI}/api/General/GetMedioComunicacionItems`);
  }

}

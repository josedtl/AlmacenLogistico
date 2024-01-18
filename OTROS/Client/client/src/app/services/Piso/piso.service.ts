import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PisoEntity } from '../../models/Piso/PisoEntity'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PisoService {

  API_URI = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPiso(): Observable<PisoEntity[]> {
    return this.http.get<PisoEntity[]>(`${this.API_URI}/api/Piso/GetAllItems`);
  }

  save(item: PisoEntity): Observable<PisoEntity> {
    return this.http.post<PisoEntity>(`${this.API_URI}/api/Piso/Save`, item);
  }
  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URI}/api/Piso/Delete/${id}`);
  }
}

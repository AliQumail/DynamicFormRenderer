import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor( private http: HttpClient ) {}

  public getFormsJsonData(): Observable<any> {
    return this.http.get('https://localhost:7290/api/Forms/GetDynamicForms');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getFormsJsonData(): Observable<any> {
    return this.http.get('https://localhost:7290/api/Forms/GetDynamicForms');
  }
}

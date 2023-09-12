import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CasesService {
  private url = 'http://localhost:8000/api/cases';

  constructor(private http: HttpClient) {}

  getCases(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getCaseById(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }
}

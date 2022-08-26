import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConvertText } from '../model/convert-text.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  baseUrl = environment.api_gateway

  constructor(private http: HttpClient) { }

  postConvertText(text:ConvertText): Observable<any> {
    const body=JSON.stringify(text);
    const headers = { 'content-type': 'application/json'}  
    return this.http.post<any>(this.baseUrl, body, {'headers':headers})
  }

  getAudios(text:ConvertText): Observable<ConvertText> {
    return this.http.get<ConvertText>(this.baseUrl + '?' + text.id)
  }
}
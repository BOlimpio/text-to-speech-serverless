import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConvertText } from '../model/convert-text.model';
import { TableContent } from '../model/table-content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  baseUrl = "URL_API_GATEWAY"

  constructor(private http: HttpClient) { }

  postConvertText(text:ConvertText){
    var inputData = {
      "voice": text.voice,
      "text" : text.text
    };
    const body=JSON.stringify(inputData);
    const headers = { 'content-type': 'application/json'}  
    return this.http.post(this.baseUrl, body, {'headers':headers})
  }

  getAudios(id:string){
    return this.http.get<TableContent[]>(this.baseUrl + '?postId=' + id)
  }
}

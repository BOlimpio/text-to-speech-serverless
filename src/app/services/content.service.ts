import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConvertText } from '../model/convert-text.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  baseUrl = "https://brg8r3wbsl.execute-api.us-east-1.amazonaws.com/poc_stage"

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
    return this.http.get(this.baseUrl + '?postId=' + id)
  }
}

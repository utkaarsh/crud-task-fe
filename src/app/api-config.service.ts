import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  BASE_URL='http://localhost:3000';
  constructor(private httpClient:HttpClient) { }

  // API call to Backend
  get(url:string){
    return this.httpClient.get(`${this.BASE_URL}/${url}`)
  }

  post(url:string,data:Object){
    return this.httpClient.post(`${this.BASE_URL}/${url}`,data)
  }
  
  put(url:string,data:Object){
    return this.httpClient.put(`${this.BASE_URL}/${url}`,data)
  }
  
  patch(url:string,data:Object){
    return this.httpClient.patch(`${this.BASE_URL}/${url}`,data)
  }

  delete(url:string){
    return this.httpClient.delete(`${this.BASE_URL}/${url}`)
  }
}

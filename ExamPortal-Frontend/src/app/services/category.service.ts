import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private _http: HttpClient) {}
  //load all the cateogries
  public categories() {
    return this._http.get(`${baseUrl}/category/`);
  }

  public getCategory(cid: any) {
    return this._http.get(`${baseUrl}/category/${cid}`);
  }

  //add new category
  public addCategory(category) {
    return this._http.post(`${baseUrl}/category/`, category);
  }

  public deleteCategory(cid: any) {
    return this._http.delete(`${baseUrl}/category/${cid}`);
  }
  public updateCategory(data: any) {
    console.log(data);
    return this._http.put(`${baseUrl}/category/`, data);
  }
}

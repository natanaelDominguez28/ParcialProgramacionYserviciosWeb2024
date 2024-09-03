import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _http:HttpClient) {}

  public getRecipesPopular():Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com',
        'X-RapidAPI-Key': 'b8311b8596mshb9fc7545a5b9316p17b051jsn70957545d35c'
      })
    };
    return this._http.get('https://recipe-book2.p.rapidapi.com/recipes-popular',httpOptions);
  }

  public getRecipesDetails(path:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'recipe-book2.p.rapidapi.com',
        'X-RapidAPI-Key': 'b8311b8596mshb9fc7545a5b9316p17b051jsn70957545d35c'
      })
    };
    return this._http.get('https://recipe-book2.p.rapidapi.com/recipe-details?path='+path,httpOptions);
  }
}

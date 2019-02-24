/**
 * Created by hea on 2/23/19.
 */
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


//https://angular.io/guide/singleton-services
//https://angular.io/guide/providers
@Injectable({
  providedIn: 'root',
})
export class  DataService{

    constructor(private http: HttpClient){}

    getData(){
      return this.http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=4f850ae6cf93486f8012540b62510ec");
    }
}

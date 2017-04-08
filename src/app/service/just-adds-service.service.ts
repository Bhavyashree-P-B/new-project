import { Injectable } from '@angular/core';
import { listModel } from '../model/listModel';
import { listData } from '../mock/itemList';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class JustAddsServiceService {

  constructor(private http: Http) { }
  
  listDataFiltered: any = [];
  detailsData: any={};



   private extractJSON(res: any) {
        return res.json() || {};
    }

     //if service throws error
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

getList(typeOfList: any): Promise<listModel[]> {

    this.listDataFiltered = [];
    for (var i = 0; i < listData.length; i++) {
      if (listData[i].category == typeOfList) {
        this.listDataFiltered.push(listData[i]);
      }
    }
    return Promise.resolve(this.listDataFiltered);
  }

//   getList(typeOfList: any): Observable<any> {

// return this.http.get('http://localhost:8080/find')
//             .map(this.extractJSON)
//             .catch(this.handleError);
//   }

    getDetails(listId:any): Promise<listModel[]> {

    this.detailsData=[];
    for(var i=0;i<listData.length;i++){
      if(listData[i].Id==listId){
        this.detailsData=listData[i];
        break;
      }
    }
    return Promise.resolve(this.detailsData);
  }
}

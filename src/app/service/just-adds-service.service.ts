import { Injectable } from '@angular/core';
import { listModel } from '../model/listModel';
import { listData } from '../mock/itemList';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class JustAddsServiceService {

  constructor(private http: Http) { }

  listDataFiltered: any = [];
  detailsData: any = {};
  findUrl = 'http://ec2-34-201-14-1.compute-1.amazonaws.com:8080/find'

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

  getList(typeOfList: any): Observable<any> {

    return this.http.get(this.findUrl)
      .map(this.extractJSON)
      .catch(this.handleError);
  }

  getDetails(listId: any): Promise<listModel[]> {

    this.detailsData = [];
    for (var i = 0; i < listData.length; i++) {
      if (listData[i].Id == listId) {
        this.detailsData = listData[i];
        break;
      }
    }
    return Promise.resolve(this.detailsData);
  }
}

import { Injectable } from '@angular/core';
import { listModel } from '../model/listModel';
import { listData } from '../mock/itemList';

@Injectable()
export class JustAddsServiceService {

  constructor() { }
  
  listDataFiltered: any = [];
  detailsData: any={};

  getList(typeOfList: any): Promise<listModel[]> {

    this.listDataFiltered = [];
    for (var i = 0; i < listData.length; i++) {
      if (listData[i].category == typeOfList) {
        this.listDataFiltered.push(listData[i]);
      }
    }
    return Promise.resolve(this.listDataFiltered);
  }

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

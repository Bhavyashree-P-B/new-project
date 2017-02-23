import { Injectable } from '@angular/core';
import { listModel } from '../model/listModel';
import { listData } from '../mock/itemList';

@Injectable()
export class JustAddsServiceService {

  constructor() { }
listDataFiltered:any=[];
  getList(typeOfList:any): Promise<listModel[]> {

    this.listDataFiltered=[];
    for(var i=0;i<listData.length;i++){
      if(listData[i].type==typeOfList){
        this.listDataFiltered.push(listData[i]);
      }
    }
    return Promise.resolve(this.listDataFiltered);
  }
}

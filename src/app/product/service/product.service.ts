import { Injectable } from '@angular/core';
import { mockPhoneData } from 'src/app/common/mock/mockPhoneData';
import * as _ from 'lodash'
import { Observable, observable, Subject } from 'rxjs';

export type TPhoneData = {
  name: string
  brand: string,
  release_year: number,
  description: string,
  checked: boolean,
}
export type TPhoneDatas = Array<TPhoneData>

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productData: TPhoneDatas
  public dataObseverable: Subject<TPhoneDatas> = new Subject()

  constructor() {
    this.productData = mockPhoneData.phones
  }

  getAllData() {
    this.dataObseverable.next(this.productData)
    return this.productData
  }

  getOneData(index: number) {
    this.dataObseverable.next([this.productData[index]])
    return [this.productData[index]]
  }
  getWithFilter(param?: { year?: Array<number>, brand?: Array<string>, search?: string }) {
    let returnData: TPhoneDatas = []


    returnData = param.search ? _.filter(this.productData, (v => v.name.toUpperCase().includes(param.search.toUpperCase()))) : this.productData
    returnData = param.search && returnData.length < 1 ? _.filter(this.productData, (v => v.brand.toUpperCase().includes(param.search.toUpperCase()))) : returnData

    returnData = param.year?.length > 0 ? _.filter(returnData, (v) => param.year.includes(v.release_year)) : returnData

    returnData = param.brand?.length > 0 ? _.filter(returnData, (v) => param.brand.includes(v.brand)) : returnData

    this.dataObseverable.next(returnData)
    return returnData
  }
}

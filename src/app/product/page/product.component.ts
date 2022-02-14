import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { ProductService, TPhoneDatas } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public data: TPhoneDatas = []
  public form: FormGroup = this.fb.group({
    search: "",
    year: [],
    brand: []
  })

  public yearRange = [2017, 2016, 2015, 2014, 2013]
  public brandRange = ['Samsung', 'Apple', 'Lenovo', 'Xiaomi', 'LG']


  constructor(private productService: ProductService, private fb: FormBuilder, dpconf: NgbDropdownConfig) {
    dpconf.autoClose = true
    this.form.valueChanges.subscribe(ct => {
      this.data = this.productService.getWithFilter(ct)
    })
  }

  ngOnInit(): void {
    this.data = this.productService.getAllData()
  }

  public handleYearCheckbox(ev: Event, val: number) {
    let checkedVal: Array<number> = [];
    if (ev) {
      checkedVal = [...this.form.value.year || [], val]
    } else {
      checkedVal = _.filter(this.form.value.year || [], (v) => v !== val)
    }
    this.form.setValue({ ...this.form.value, ...{ year: checkedVal } })
  }

  public handleBrandCheckbox(ev: Event, val: string) {
    let checkedVal: Array<number> = [];
    if (ev) {
      checkedVal = [...this.form.value.brand || [], val]
    } else {
      checkedVal = _.filter(this.form.value.brand || [], (v) => v !== val)
    }
    this.form.setValue({ ...this.form.value, ...{ brand: checkedVal } })
  }

  public toJSONString(val: any) {
    return JSON.stringify(val, null, 4)
  }

}

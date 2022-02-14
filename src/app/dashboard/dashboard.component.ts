import { Component, OnInit } from "@angular/core";
import { BarVerticalComponent, ViewDimensions } from "@swimlane/ngx-charts";
import { ProductService } from "../product/service/product.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  public chartData: Array<{ name: string; value: number }> = [
    {
      name: "2017",
      value: 0,
    },
    {
      name: "2016",
      value: 0,
    },
    {
      name: "2015",
      value: 0,
    },
    {
      name: "2014",
      value: 0,
    },
    {
      name: "2013",
      value: 0,
    },
    {
      name: "2012",
      value: 0,
    },
  ];

  constructor(private productService: ProductService) {
    this.setChartData();
  }

  setChartData() {
    let dt = this.productService.getAllData()

    dt.forEach(v => {
      this.chartData.forEach((c,i) => {
        if(v.release_year === parseInt(c.name)){
          this.chartData[i].value++
        }
      })
    })
  }
}

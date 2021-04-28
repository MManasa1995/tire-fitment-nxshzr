import { Component, OnInit } from "@angular/core";
import { ShopTiresComponent } from "../shop-tires/shop-tires.component";
import { TireService } from "../tire.service";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years: number[];
  makes: string[];
  models: string[];
  styles: string[];

  yearFlag: boolean = false;
  makeFlag: boolean = false;
  modelFlag: boolean = false;
  styleFlag: boolean = false;
  finalFlag: boolean = false;
  btnFlag: boolean = true;

  year: number = 0;
  make: string;
  model: string;
  style: string;
  constructor(private service: TireService) {}

  ngOnInit() {}

  getYears() {
    this.service.getData().then(data => {
      this.years = data.year;
      this.yearFlag = true;
      this.btnFlag = false;
    });
  }

  getMake(item) {
    this.service.getMakes().then(data => {
      this.makes = data.make;
      this.yearFlag = false;
      this.makeFlag = true;
      this.year = item;
    });
  }

  getModel(item) {
    this.service.getModels().then(data => {
      this.models = data.model;
      this.makeFlag = false;
      this.modelFlag = true;
      this.make = item;
    });
  }

  getStyle(item) {
    this.service.getStyles().then(data => {
      this.styles = data.trim;
      this.styleFlag = true;
      this.modelFlag = false;
      this.model = item;
    });
  }

  getSelectedData(item) {
    this.finalFlag = true;
    this.styleFlag = false;
    this.style = item;
  }
  close() {
    this.yearFlag = false;
    this.makeFlag = false;
    this.modelFlag = false;
    this.styleFlag = false;
    this.finalFlag = false;
    this.btnFlag = true;
    this.year = 0;
    this.make = "";
    this.model = "";
    this.style = "";
  }
}

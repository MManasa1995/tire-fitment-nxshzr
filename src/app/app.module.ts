import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { FitmentContainerComponent } from "./fitment-container/fitment-container.component";
import { HttpClientModule } from "@angular/common/http";
import { TireService } from './tire.service';
import { ShopTiresComponent } from "./shop-tires/shop-tires.component";




@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, FitmentContainerComponent, ShopTiresComponent],
  bootstrap: [AppComponent],
  providers: [TireService]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlgoVisualizerComponent } from "./components/algo-visualizer/algo-visualizer.component";
import { MatButtonModule } from "@angular/material/button";
import {
  MatSliderModule,
  MatSlideToggleModule,
  MatButtonToggleModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, AlgoVisualizerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

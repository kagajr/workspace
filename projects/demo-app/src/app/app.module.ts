import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CanvasStrokeModule } from "ngx-canvas-stroke";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CanvasStrokeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

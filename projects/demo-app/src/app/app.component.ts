import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"]
})
export class AppComponent {
  title = "demo-app";
  file: File;
  update(file: File) {
    this.file = file;
  }
}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ngx-canvas-stroke",
  template: `
    <div class="canvas"></div>
  `,
  styles: []
})
export class CanvasStrokeComponent implements OnInit {
  constructor() {}

  @Input() image: File;
  @Input() width: string;
  @Input() height: string;

  ngOnInit() {
    if (this.image) {
      this.loadImage(this.image);
    }
  }

  draw() {
    
  }

  loadImage(image: File) {
    if (!image.type.startsWith("image/")) {
      return;
    }
    //TODO on image changing
    var canvas = document.createElement("canvas");

    if (canvas) {
      var fileReader = new FileReader();
      var img = document.createElement("img");
      img.onload = event => {
        if (this.width && this.height) {
          canvas.width = parseInt(this.width);
          canvas.height = parseInt(this.height);
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }
      };
      fileReader.onload = (() => {
        return function(e) {
          canvas.style.background = "url(" + e.target.result + ")";
          img.src = e.target.result;
        };
      })();
      fileReader.readAsDataURL(image);
      var holder = document.querySelector(".canvas");
      holder.append(canvas);
    }
  }
}

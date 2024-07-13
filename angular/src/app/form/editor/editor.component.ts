import * as Quill from "quill";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"]
})
export class EditorComponent implements OnInit {
  ngOnInit() {
    const quill = new Quill("#editor-container", {
      modules: {
        toolbar: {
          container: "#toolbar-toolbar"
        }
      },
      placeholder: "Compose an epic...",
      theme: "snow"
    });
  }
}

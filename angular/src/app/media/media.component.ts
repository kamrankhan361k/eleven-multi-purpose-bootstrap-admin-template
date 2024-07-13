import { Component, OnInit } from "@angular/core";

import { Media } from "./media";
import { MediaService } from "./media.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.scss"]
})
export class MediaComponent implements OnInit {
  media: Media[] = [];
  ngOnInit(): void {
    this.getMedia();
  }

  constructor(private mediaService: MediaService) {}

  getMedia(): void {
    this.mediaService
      .getAll()
      .pipe(first())
      .subscribe(media => {
        this.media = media;
      });
  }
}

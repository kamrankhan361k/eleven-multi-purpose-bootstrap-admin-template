import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  options = {
    boxed: false,
    darkMode: false,
    stickyHeader: false,
    stickySidebar: true,
    collapsed: false,
    topHeader: false
  };

  @Input() isTopHeader;

  @Output() toggleFullscreen = new EventEmitter<void>();
  @Output() toggleMobileSidebar = new EventEmitter<void>();
  @Output() messageEvent = new EventEmitter();

  sendOptions(option) {
    this.messageEvent.emit(option);
  }
}

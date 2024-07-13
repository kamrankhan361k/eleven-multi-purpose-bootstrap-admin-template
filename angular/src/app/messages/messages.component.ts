import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";

import { Message } from "./message";
import { MessagesService } from "./messages.service";
import { first } from "rxjs/operators";
import { randomStatus } from "../helpers";

const SMALL_WIDTH_BREAKPOINT = 991;
@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  matcher: MediaQueryList;
  messages: Message[] = [];
  currentMessage: any;

  sidebar: any = {
    opened: true,
    isOverlayVisible: false
  };

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sidebar.opened = false;
          this.sidebar.isOverlayVisible = false;
        } else {
          this.sidebar.opened = true;
        }
        this.sidebar.isOverlayVisible = false;
      });

    this.getMessages();
  }

  constructor(
    public breakpointObserver: BreakpointObserver,
    private messagesService: MessagesService
  ) {}

  getMessages(): void {
    this.messagesService
      .getAll()
      .pipe(first())
      .subscribe(messages => {
        this.messages = messages;
        this.currentMessage = messages.find(x => x.id === 1);
      });
  }

  selectMessage(id: number): void {
    this.messagesService
      .getOne(id)
      .pipe(first())
      .subscribe(message => {
        this.currentMessage = message;
      });
  }

  toggleMobileSidebar(): void {
    this.sidebar.opened = !this.sidebar.opened;
    if (this.sidebar.opened) {
      this.sidebar.isOverlayVisible = true;
    } else {
      this.sidebar.isOverlayVisible = false;
    }
  }

  getStatus() {
    const status = randomStatus();
    return status;
  }
}

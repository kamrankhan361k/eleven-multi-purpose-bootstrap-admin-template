import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

import { MultilevelMenuService } from "./multilevel-menu.service";
import { MultilevelNodes } from "./app.model";

@Component({
  selector: "app-multilevel-menu",
  template: `
    <ul
      class="d-block scroll-y flex-1 py-3 nav flex-column"
      *ngIf="items.length !== 0"
    >
      <app-list-item
        *ngFor="
          let node of items | keyvalue: multilevelMenuService.kvDummyComparerFn
        "
        [node]="node.value"
        [level]="1"
        [submenuLevel]="node.key"
        [selectedNode]="currentNode"
        (selectedItem)="selectedListItem($event)"
        class="sidebar-item"
      >
      </app-list-item>
    </ul>
  `
})
export class MultilevelMenuComponent implements OnInit, OnChanges {
  @Input() items: MultilevelNodes[];
  @Output() selectedItem = new EventEmitter<MultilevelNodes>();
  @Output() selectedLabel = new EventEmitter<MultilevelNodes>();
  currentNode: MultilevelNodes;

  constructor(
    private router: Router,
    public multilevelMenuService: MultilevelMenuService
  ) {}
  ngOnChanges() {
    this.multilevelMenuService.addRandomId(this.items);
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateNodeByURL(event.url);
      }
    });
    this.updateNodeByURL(this.router.url);
  }
  updateNodeByURL(url: string): void {
    const foundNode = this.multilevelMenuService.getMatchedObjectByUrl(
      this.items,
      url
    );
    if (
      foundNode !== undefined &&
      foundNode.path !== undefined &&
      foundNode.path !== null &&
      foundNode.path !== ""
    ) {
      this.currentNode = foundNode;
      this.selectedListItem(foundNode);
    }
  }
  selectedListItem(event: MultilevelNodes): void {
    this.currentNode = event;
    if (event.children === undefined) {
      this.selectedItem.emit(event);
    } else {
      this.selectedLabel.emit(event);
    }
  }
}

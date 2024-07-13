import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from "@angular/core";
import {
  animate,
  group,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

import { MultilevelMenuService } from "./../multilevel-menu.service";
import { MultilevelNodes } from "./../app.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  animations: [
    trigger("slideInOut", [
      state("in", style({ height: "*", opacity: 0 })),
      transition(":leave", [
        style({ height: "*", opacity: 0.2 }),
        group([
          animate(200, style({ height: 0 })),
          animate("200ms ease-out", style({ opacity: 0 }))
        ])
      ]),
      transition(":enter", [
        style({ height: "0", opacity: 0 }),
        group([
          animate(200, style({ height: "*" })),
          animate("400ms ease-out", style({ opacity: 1 }))
        ])
      ])
    ])
  ]
})
export class ListItemComponent implements OnChanges, OnInit {
  @Input() node: MultilevelNodes;
  @Input() level = 1;
  @Input() submenuLevel = 0;
  @Input() selectedNode: MultilevelNodes;
  @Output() selectedItem = new EventEmitter<MultilevelNodes>();
  isSelected = false;
  nodeChildren: MultilevelNodes[];
  classes: { [index: string]: boolean };
  selectedListClasses: { [index: string]: boolean };
  expanded = false;
  firstInitializer = false;
  constructor(
    private router: Router,
    public multilevelMenuService: MultilevelMenuService
  ) {}
  ngOnChanges() {
    this.nodeChildren =
      this.node && this.node.children ? this.node.children : [];
    if (this.selectedNode !== undefined && this.selectedNode !== null) {
      this.setSelectedClass(
        this.multilevelMenuService.recursiveCheckId(
          this.node,
          this.selectedNode.id
        )
      );
    }
  }
  ngOnInit() {
    if (typeof this.node.expanded === "boolean") {
      this.expanded = this.node.expanded;
    }
  }
  setSelectedClass(isFound: boolean): void {
    if (isFound) {
      if (!this.firstInitializer) {
        this.expanded = true;
      }
      this.isSelected = this.selectedNode.children === undefined ? true : false;
    } else {
      this.isSelected = false;
      this.expanded = false;
    }
    this.selectedListClasses = {
      active: this.isSelected
    };
  }
  hasItems(): boolean {
    return this.nodeChildren.length > 0 ? true : false;
  }
  expand(node: MultilevelNodes): void {
    this.expanded = !this.expanded;
    this.firstInitializer = true;
    if (node.path !== undefined && node.path) {
      if (node.externalRedirect !== undefined && node.externalRedirect) {
        window.location.href = node.path;
      } else {
        this.router.navigate([node.path], node.navigationExtras);
      }
    } else if (node.children === undefined) {
      this.selectedListItem(node);
    }
    this.selectedListItem(node);
  }
  selectedListItem(node: MultilevelNodes): void {
    this.selectedItem.emit(node);
  }
}

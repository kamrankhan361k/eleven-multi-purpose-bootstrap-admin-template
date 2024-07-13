import { Component, OnInit } from "@angular/core";

import { MenuService } from "./menu.service";

@Component({
  selector: "app-menu",
  template: `
    <app-multilevel-menu
      [items]="menuItems"
      style="flex: 1; overflow-y: auto"
    ></app-multilevel-menu>
  `,
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  menuItems = [];

  constructor(public menuService: MenuService) {}

  ngOnInit() {
    const menu = this.menuService.getAll();
    this.menuItems = menu;
  }
}

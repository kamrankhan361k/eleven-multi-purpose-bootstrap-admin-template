import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
  Inject
} from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { filter, map } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";

import { BreakpointObserver } from "@angular/cdk/layout";
import { Title } from "@angular/platform-browser";
import { capitalize } from "../../helpers";

const SMALL_WIDTH_BREAKPOINT = 991;

export interface Options {
  removeFooter?: boolean;
  removeHeader?: boolean;
}

@Component({
  selector: "app-layout",
  template: `
    <app-layout-inner
      [isScreenSmall]="isScreenSmall | async"
    ></app-layout-inner>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AdminLayoutComponent {
  isScreenSmall: Observable<boolean>;

  constructor(public breakpoints: BreakpointObserver) {
    this.isScreenSmall = breakpoints
      .observe(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)
      .pipe(map(breakpoint => breakpoint.matches));
  }
}

@Component({
  selector: "app-layout-inner",
  templateUrl: "./admin-layout.component.html"
})
export class LayoutComponent
  implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  private layoutRouter: Subscription;
  @Input() isScreenSmall: boolean;
  heading;
  routeOptions: Options;
  includeSpinner: false;

  options = {
    name: "Eleven",
    boxed: false,
    darkMode: false,
    stickyHeader: false,
    stickySidebar: true,
    collapsed: false,
    topHeader: false,
    fullscreen: false,
    sidebarOpened: true,
    isOverlayVisible: false
  };

  element;

  @ViewChild("sidebar", { static: false }) sidebar;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const currentScreen: SimpleChange = changes.isScreenSmall;
    if (currentScreen.currentValue) {
      this.options.sidebarOpened = false;
      this.options.isOverlayVisible = false;
    } else {
      this.options.sidebarOpened = true;
    }
    this.options.isOverlayVisible = false;
  }

  ngOnInit(): void {
    this.element = document.documentElement;

    this.layoutRouter = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Scroll to top on view load
        document.querySelector("body").scrollTop = 0;

        this.runOnRouteChange();
      });

    this.runOnRouteChange();
  }

  ngAfterViewInit(): void {
    setTimeout(_ => this.runOnRouteChange());
  }

  ngOnDestroy() {
    this.layoutRouter.unsubscribe();
  }

  runOnRouteChange(): void {
    this.heading = window.location.href.split("/").reverse()[0];
    if (this.isScreenSmall) {
      this.options.sidebarOpened = false;
    } else {
      this.options.sidebarOpened = true;
    }

    this.route.children.forEach((route: ActivatedRoute) => {
      let activeRoute: ActivatedRoute = route;
      while (activeRoute.firstChild) {
        activeRoute = activeRoute.firstChild;
      }
      this.routeOptions = activeRoute.snapshot.data;
    });
    this.setTitle();
  }

  setTitle() {
    this.titleService.setTitle(
      `${capitalize(this.heading)} | Eleven Bootstrap Admin Template`
    );
  }

  toggleSidebar(): void {
    this.options.collapsed = !this.options.collapsed;
  }

  toggleMobileSidebar(): void {
    this.options.sidebarOpened = !this.options.sidebarOpened;
    if (this.options.sidebarOpened) {
      this.options.isOverlayVisible = true;
    } else {
      this.options.isOverlayVisible = false;
    }
  }

  receiveOptions($event) {
    this.options = { ...this.options, ...$event };
  }

  toggleFullscreen(): void {
    if (!this.options.fullscreen) {
      this.options.fullscreen = true;
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        this.element.msRequestFullscreen();
      }
    } else {
      this.options.fullscreen = false;
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    }
  }
}

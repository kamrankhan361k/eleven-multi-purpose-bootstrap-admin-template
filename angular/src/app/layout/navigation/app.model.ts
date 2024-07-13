import { NavigationExtras } from "@angular/router";

export interface MultilevelNodes {
  id?: string;
  name: string;
  icon?: string;
  path?: string;
  externalRedirect?: boolean;
  data?: any;
  children?: MultilevelNodes[];
  expanded?: boolean;
  navigationExtras?: NavigationExtras;
  badge: Badge;
}

export interface Badge {
  type: string;
  value: string;
}

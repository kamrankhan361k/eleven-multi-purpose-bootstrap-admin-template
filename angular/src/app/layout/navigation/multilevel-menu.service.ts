import { Injectable } from "@angular/core";
import { MultilevelNodes } from "./app.model";

@Injectable({
  providedIn: "root"
})
export class MultilevelMenuService {
  foundLinkObject: MultilevelNodes;
  generateId(): string {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 20; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  addRandomId(nodes: MultilevelNodes[]): void {
    nodes.forEach((node: MultilevelNodes) => {
      node.id = this.generateId();
      if (node.children !== undefined) {
        this.addRandomId(node.children);
      }
    });
  }
  recursiveCheckId(node: MultilevelNodes, nodeId: string): boolean {
    if (node.id === nodeId) {
      return true;
    } else {
      if (node.children !== undefined) {
        return node.children.some((nestedNode: MultilevelNodes) => {
          return this.recursiveCheckId(nestedNode, nodeId);
        });
      }
    }
  }
  recursiveCheckLink(nodes: MultilevelNodes[], link: string): void {
    for (const node of nodes) {
      for (const key in node) {
        if (node.hasOwnProperty(key)) {
          if (encodeURI(node.path) === link) {
            this.foundLinkObject = node;
          } else {
            if (node.children !== undefined) {
              this.recursiveCheckLink(node.children, link);
            }
          }
        }
      }
    }
  }
  getMatchedObjectByUrl(
    node: MultilevelNodes[],
    link: string
  ): MultilevelNodes {
    this.recursiveCheckLink(node, link);
    return this.foundLinkObject;
  }
  // overrides key-value pipe's default reordering (by key) by implementing dummy comprarer function
  // https://angular.io/api/common/KeyValuePipe#description
  kvDummyComparerFn() {
    return 0;
  }
}

import {Output} from "@angular/core";
import {Subject} from "rxjs/Subject";
export class HeaderService {

  leftSide: string = 'search';

  rightSide: string = 'map';

  @Output() leftSideChanged = new Subject<string>();

  @Output() rightSideChanged = new Subject<string>();

  setLeftSide(leftSide: string) {
    this.leftSide = leftSide;
    this.leftSideChanged.next(leftSide);
  }

  setRigthSide(rightSide: string) {
    this.rightSide = rightSide;
    this.rightSideChanged.next(rightSide);
  }


}

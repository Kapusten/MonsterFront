import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  leftSide: string

  rightSide: string

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.leftSide = this.headerService.leftSide;
    this.rightSide = this.headerService.rightSide;
    this.headerService.leftSideChanged.subscribe(
      (leftSide: string) => {
        this.leftSide = leftSide;
      }
    )
    this.headerService.rightSideChanged.subscribe(
      (rightSide: string) => {
        this.rightSide = rightSide;
      }
    )
  }

  goBack() {
    history.back();
  }

}

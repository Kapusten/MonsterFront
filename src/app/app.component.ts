import { Component } from '@angular/core';
import {HeaderService} from "./header/header.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeaderService]
})
export class AppComponent {
}

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PanoViewer} from "@egjs/view360";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'realEstate';
  @ViewChild("myPanoViewer") myPanoViewer;
  ngAfterViewInit() {
  }
}

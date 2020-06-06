import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PanoViewer} from "@egjs/view360";
import {ElementRef} from '@angular/core';

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit, AfterViewInit {
    customCanvasStyle: { width: 400; height: 400 }
    @ViewChild("myPanoViewer") myPanoViewer;

    constructor() {
    }

    ngAfterViewInit() {
        console.log(this.myPanoViewer.nativeElement);
        var panoViewer = new PanoViewer(this.myPanoViewer.nativeElement, {height: 300, width: 400});
        panoViewer.setImage("https://naver.github.io/egjs-view360/examples/panoviewer/controls/london.jpg")
        // panoViewer.enterVR();
        panoViewer.updateViewportDimensions({height: 300, width: 400});
        console.log(panoViewer);


    }

    ngOnInit(): void {
        // console.log(this.myPanoViewer.nativeElement.value);

    }

}

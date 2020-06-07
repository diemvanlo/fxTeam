import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PanoViewer} from "@egjs/view360";

declare const PANOLENS: any;
declare const THREE: any;
declare const eg: any;

@Component({
    selector: 'app-vr-imgage',
    templateUrl: './vr-imgage.component.html',
    styleUrls: ['./vr-imgage.component.css']
})
export class VrImgageComponent implements OnInit, AfterViewInit {

    @ViewChild("myPanoViewer") myPanoViewer;

    constructor() {
    }

    ngOnInit(): void {
        let panorama, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9,
            panorama10, panorama11,
            muiten, muiten2, muiten3, muiten4, muiten5, muiten6, viewer, diemNoi, diemNoi2, diemNoi3, diemNoi4,
            diemNoi5, diemNoi6,
            diemNoi7, diemNoi8, diemNoi9, diemNoi10, diemNoi11, diemNoi12, diemNoi13, diemNoi14, diemNoi15, diemNoi16,
            diemNoi17, diemNoi18,
            diemNoi19, diemNoi20;


        panorama = new PANOLENS.ImagePanorama('https://i.ibb.co/H41Wxvs/1.jpg');
        panorama2 = new PANOLENS.ImagePanorama('https://i.ibb.co/rFcBX2D/2.jpg');
        panorama3 = new PANOLENS.ImagePanorama('https://i.ibb.co/0Gk1Skk/3.jpg');
        panorama4 = new PANOLENS.ImagePanorama('ttps://i.ibb.co/9YYH18M/4.jpg');
        panorama5 = new PANOLENS.ImagePanorama('https://i.ibb.co/J5h18Cr/5.jpg');
        panorama6 = new PANOLENS.ImagePanorama('https://i.ibb.co/2nZWjHj/6.jpg');
        panorama7 = new PANOLENS.ImagePanorama('https://i.ibb.co/BgzgN91/8.jpg');
        panorama8 = new PANOLENS.ImagePanorama('https://i.ibb.co/BgzgN91/8.jpg');
        panorama9 = new PANOLENS.ImagePanorama('https://i.ibb.co/vdn7Rzv/9.jpg');
        panorama10 = new PANOLENS.ImagePanorama('https://i.ibb.co/pZ3wFL3/10.jpg');
        panorama11 = new PANOLENS.ImagePanorama('https://i.ibb.co/vsffn0F/11.jpg');
        muiten = new PANOLENS.ImagePanorama('https://i.ibb.co/5xdT7pp/Mui-ten.pn');
        muiten2 = new PANOLENS.ImagePanorama('https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        muiten3 = new PANOLENS.ImagePanorama('https://i.ibb.co/xSyJF8k/Mui-ten3.png');
        muiten4 = new PANOLENS.ImagePanorama('https://i.ibb.co/VMkS6w9/Mui-ten4.png');
        muiten5 = new PANOLENS.ImagePanorama('img/Mui-ten5.svg');
        muiten6 = new PANOLENS.ImagePanorama('img/world-map.png');

        panorama.link(panorama2, new THREE.Vector3(1007.50, 130.0, 8000), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama2.link(panorama, new THREE.Vector3(2007.50, 54.88, 99.00), 200, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');

        panorama.link(panorama3, new THREE.Vector3(-11307.50, 2204.88, -10000.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama3.link(panorama, new THREE.Vector3(-3507.50, 254.88, -9900.00), 800, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama.link(panorama4, new THREE.Vector3(-6307.50, 1704.88, -10000.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama4.link(panorama, new THREE.Vector3(-4407.50, 504.88, -9500.00), 800, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama.link(panorama6, new THREE.Vector3(3507.50, 1004.88, -7500.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama6.link(panorama, new THREE.Vector3(-10807.50, 304.88, -6100.00), 1000, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama.link(panorama8, new THREE.Vector3(-1507.50, 1304.88, -7500.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama8.link(panorama, new THREE.Vector3(-12907.50, 1104.88, -1200.00), 800, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama2.link(panorama3, new THREE.Vector3(3007.50, -504.88, -5000.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama3.link(panorama2, new THREE.Vector3(-1207.50, 204.88, -5000.00), 500, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama3.link(panorama4, new THREE.Vector3(507.50, 604.88, 11700.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama4.link(panorama3, new THREE.Vector3(2007.50, 604.88, -9000.00), 800, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama3.link(panorama8, new THREE.Vector3(-9507.50, 604.88, -5000.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama8.link(panorama3, new THREE.Vector3(-1007.50, 604.88, -10000.00), 800, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama5.link(panorama8, new THREE.Vector3(9507.50, 254.88, 4800.00), 800, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');
        panorama8.link(panorama5, new THREE.Vector3(8007.50, 804.88, 5000.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');

        panorama4.link(panorama5, new THREE.Vector3(-11407.50, 604.88, -5000.00), 800, 'https://i.ibb.co/5xdT7pp/Mui-ten.pn');
        panorama5.link(panorama4, new THREE.Vector3(10807.50, 804.88, 8500.00), 800, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama5.link(panorama6, new THREE.Vector3(4007.50, -404.88, -3000.00), 400, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama6.link(panorama5, new THREE.Vector3(9807.50, 904.88, -8000.00), 1000, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama6.link(panorama8, new THREE.Vector3(-2407.50, 604.88, -7000.00), 400, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama8.link(panorama6, new THREE.Vector3(807.50, 604.88, 5000.00), 500, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama8.link(panorama10, new THREE.Vector3(11407.50, 904.88, 4500.00), 800, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');
        panorama10.link(panorama8, new THREE.Vector3(807.50, 74.88, 850.00), 100, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');

        panorama10.link(panorama5, new THREE.Vector3(8407.50, 504.88, -9500.00), 800, 'https://i.ibb.co/VMkS6w9/Mui-ten4.png');
        panorama5.link(panorama10, new THREE.Vector3(807.50, 74.88, 850.00), 100, 'https://i.ibb.co/5xdT7pp/Mui-ten.pn');

        panorama9.link(panorama4, new THREE.Vector3(8407.50, 504.88, 9500.00), 999, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');
        panorama4.link(panorama9, new THREE.Vector3(807.50, 284.88, 850.00), 200, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');

        panorama4.link(panorama10, new THREE.Vector3(-4407.50, 1104.88, -9500.00), 600, 'https://i.ibb.co/VMkS6w9/Mui-ten4.png');
        panorama10.link(panorama4, new THREE.Vector3(807.50, 24.88, 1250.00), 200, 'https://i.ibb.co/5xdT7pp/Mui-ten.pn');

        panorama11.link(panorama4, new THREE.Vector3(8407.50, 504.88, 9500.00), 999, 'https://i.ibb.co/xSyJF8k/Mui-ten3.png');
        panorama4.link(panorama11, new THREE.Vector3(-6807.50, 284.88, 7850.00), 1000, 'https://i.ibb.co/6PL4K9Y/Mui-ten2.png');


        diemNoi = new PANOLENS.Infospot();
        diemNoi.position.set(-10607.50, 1404.88, -10000.00, 1200, 'https://i.ibb.co/0Jc3QpC/cute3.jpg');
        diemNoi.addHoverElement(document.getElementById('desc-container6'), 50);
        panorama.add(diemNoi);


        diemNoi2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
        diemNoi2.position.set(4700.00, 214.23, -240.49);
        diemNoi2.addHoverElement(document.getElementById('desc-container'), 200);
        panorama.add(diemNoi2);

        diemNoi3 = new PANOLENS.Infospot();
        diemNoi3.position.set(1007.50, 730.0, 8000);
        diemNoi3.addHoverElement(document.getElementById('desc-container7'), 50);
        panorama.add(diemNoi3);

        diemNoi4 = new PANOLENS.Infospot();
        diemNoi4.position.set(4700.00, -114.23, -240.49);
        diemNoi4.addHoverElement(document.getElementById('desc-container8'), 50);
        panorama.add(diemNoi4);

        diemNoi6 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
        diemNoi6.position.set(5000.00, 204.23, -2000.49);
        diemNoi6.addHoverElement(document.getElementById('desc-container3'), 200);
        panorama3.add(diemNoi6);

        diemNoi7 = new PANOLENS.Infospot(400);
        diemNoi7.position.set(4500.00, 2004.23, 1400.49);
        diemNoi7.addHoverText('Phòng Hiệu Trưởng');
        panorama6.add(diemNoi7);

        diemNoi8 = new PANOLENS.Infospot(500);
        diemNoi8.position.set(9500.00, 4004.23, -2000.49);
        diemNoi8.addHoverText('Phòng Hiệu Phó');
        panorama6.add(diemNoi8);

        diemNoi9 = new PANOLENS.Infospot(500);
        diemNoi9.position.set(9500.00, 2004.23, 2300.49);
        diemNoi9.addHoverText('Phòng Hiệu Phó');
        panorama6.add(diemNoi9);

        diemNoi10 = new PANOLENS.Infospot(200);
        diemNoi10.position.set(3000.00, 1304.23, -1200.49);
        diemNoi10.addHoverText('Phòng Kế Toán');
        panorama6.add(diemNoi10);

        diemNoi12 = new PANOLENS.Infospot(500);
        diemNoi12.position.set(9500.00, 2004.23, 4200.49);
        diemNoi12.addHoverText('Phòng Đoàn');
        panorama6.add(diemNoi12);

        diemNoi13 = new PANOLENS.Infospot(500);
        diemNoi13.position.set(9500.00, 2004.23, -1900.49);
        diemNoi13.addHoverText('Văn Phòng');
        panorama6.add(diemNoi13);

        diemNoi14 = new PANOLENS.Infospot(500);
        diemNoi14.position.set(9500.00, 2004.23, -3600.49);
        diemNoi14.addHoverText('Phòng Y Tế');
        panorama6.add(diemNoi14);

        diemNoi15 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
        diemNoi15.position.set(8007.50, -1014.88, 900.00);
        diemNoi15.addHoverElement(document.getElementById('desc-container2'), 200);
        panorama9.add(diemNoi15);

        diemNoi16 = new PANOLENS.Infospot();
        diemNoi16.position.set(2507.50, 1004.88, -7000.00,);
        diemNoi16.addHoverElement(document.getElementById('desc-container9'), 50);
        panorama.add(diemNoi16);

        diemNoi17 = new PANOLENS.Infospot();
        diemNoi17.position.set(507.50, 1304.88, -7500.00);
        diemNoi17.addHoverElement(document.getElementById('desc-container4'), 200);
        panorama.add(diemNoi17);

        diemNoi18 = new PANOLENS.Infospot();
        diemNoi18.position.set(-2700.00, -234.23, -9500.49,);
        diemNoi18.addHoverElement(document.getElementById('desc-container5'), 200);
        panorama10.add(diemNoi18);

        diemNoi19 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
        diemNoi19.position.set(-2700.00, -234.23, 7500.49,);
        diemNoi19.addHoverElement(document.getElementById('desc-container10'), 50);
        panorama11.add(diemNoi19);

        diemNoi20 = new PANOLENS.Infospot(500, PANOLENS.DataImage.Info);
        diemNoi20.position.set(-2700.00, -234.23, 7500.49,);
        diemNoi20.addHoverElement(document.getElementById('desc-container11'), 50);
        panorama.add(diemNoi20);

        viewer = new PANOLENS.Viewer();
        viewer.add(panorama, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, muiten, muiten2, muiten3, muiten4, muiten5, muiten6);

    }

    ngAfterViewInit() {


        // let container = document.getElementById("myPanoViewer");
        // let panoViewer2 = new eg.view360.PanoViewer(container, {
        //     image: "https://naver.github.io/egjs-view360/examples/panoviewer/controls/london.jpg",
        //     projectionType: "equirectangular", height: 500
        // });
        //
        // container.focus();
        // console.log(container);
        // console.log(panoViewer2);
        //
        //
        // console.log(this.myPanoViewer.nativeElement);
        // var panoViewer = new PanoViewer(this.myPanoViewer.nativeElement, {
        //     height: 300,
        //     width: 400,
        //     yaw: 6,
        //     pitch: 99,
        //     projectionType: "equirectangular"
        // });
        // panoViewer.setImage("https://naver.github.io/egjs-view360/examples/panoviewer/controls/london.jpg")
        // // panoViewer.enterVR();
        // panoViewer.getProjectionType();
        // this.myPanoViewer.nativeElement.focus();
        // console.log(panoViewer);

        }
}

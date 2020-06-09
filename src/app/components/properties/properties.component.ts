import {Component, EventEmitter, OnInit} from '@angular/core';
import {LabelType, Options} from "ng5-slider";
import {HttpServiceService} from "../../service/http-service.service";


declare var $: any;
const PRODUCT_API = "http://localhost:3000/product";

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
    constructor(private userService: HttpServiceService) {
    }

    valuePrice: number = 100;
    higValuePrice: number = 300;
    optionsPrice: Options = {
        floor: 100,
        ceil: 10000,
        hideLimitLabels: true,
        translate: (value: number, label: LabelType): string => {
            switch (label) {
                case LabelType.Low:
                    return value + 'đ';
                case LabelType.High:
                    return value + 'đ';
                default:
                    return value + 'đ';
            }
        }
    };

    valueArea: number = 100;
    higValueArea: number = 300;
    optionsArea: Options = {
        floor: 50,
        ceil: 1000,
        hideLimitLabels: true,
        translate: (value: number, label: LabelType): string => {
            switch (label) {
                case LabelType.Low:
                    return value + 'm2';
                case LabelType.High:
                    return value + 'm2';
                default:
                    return value + 'm2';
            }
        }
    };
    products: Array<any>;
    page = 1;

    ngOnInit(): void {
        $(document).ready(function () {
            console.log("testing");
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-yellow',
                radioClass: 'iradio_square-yellow',
                increaseArea: '20%' // optional
            });
            $('.layout-grid').on('click', function () {
                $('.layout-grid').addClass('active');
                $('.layout-list').removeClass('active');
                $('#list-type').removeClass('proerty-th-list');
                $('#list-type').addClass('proerty-th');
            });
            $('.layout-list').on('click', function () {
                $('.layout-grid').removeClass('active');
                $('.layout-list').addClass('active');
                $('#list-type').addClass('proerty-th-list');
                $('#list-type').removeClass('proerty-th');
            });
        });

        this.userService.getAll(PRODUCT_API).subscribe(data => {
            this.products = data;
            console.log(data);
        });
    }

}

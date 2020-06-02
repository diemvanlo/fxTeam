import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
    selector: 'app-properties',
    templateUrl: './properties.component.html',
    styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

    constructor() {

    }

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
    }

}

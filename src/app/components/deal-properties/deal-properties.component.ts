import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';


@Component({
  selector: 'app-deal-properties',
  templateUrl: './deal-properties.component.html',
  styleUrls: ['./deal-properties.component.css']
})
export class DealPropertiesComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ''
    });
  }
}

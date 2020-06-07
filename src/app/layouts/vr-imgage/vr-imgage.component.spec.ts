import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrImgageComponent } from './vr-imgage.component';

describe('VrImgageComponent', () => {
  let component: VrImgageComponent;
  let fixture: ComponentFixture<VrImgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrImgageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrImgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

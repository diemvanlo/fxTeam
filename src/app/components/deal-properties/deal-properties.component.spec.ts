import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealPropertiesComponent } from './deal-properties.component';

describe('DealPropertiesComponent', () => {
  let component: DealPropertiesComponent;
  let fixture: ComponentFixture<DealPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageWeekComponent } from './package-week.component';

describe('PackageWeekComponent', () => {
  let component: PackageWeekComponent;
  let fixture: ComponentFixture<PackageWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTransportComponent } from './manage-transport.component';

describe('ManageTransportComponent', () => {
  let component: ManageTransportComponent;
  let fixture: ComponentFixture<ManageTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

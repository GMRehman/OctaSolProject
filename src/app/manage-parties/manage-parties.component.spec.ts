import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePartiesComponent } from './manage-parties.component';

describe('ManagePartiesComponent', () => {
  let component: ManagePartiesComponent;
  let fixture: ComponentFixture<ManagePartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePartiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

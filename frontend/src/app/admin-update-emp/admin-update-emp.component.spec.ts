import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateEmpComponent } from './admin-update-emp.component';

describe('AdminUpdateEmpComponent', () => {
  let component: AdminUpdateEmpComponent;
  let fixture: ComponentFixture<AdminUpdateEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUpdateEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUpdateEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

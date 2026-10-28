import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewEmpComponent } from './admin-view-emp.component';

describe('AdminViewEmpComponent', () => {
  let component: AdminViewEmpComponent;
  let fixture: ComponentFixture<AdminViewEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

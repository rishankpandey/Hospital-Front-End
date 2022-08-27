import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { doctor, DoctorserviceService } from '../service/doctorservice.service';

import { CreatedoctorComponent } from './createdoctor.component';

describe('CreatedoctorComponent', () => {
  let component: CreatedoctorComponent;
  let fixture: ComponentFixture<CreatedoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatedoctorComponent],
      imports: [FormsModule,
        MatSnackBarModule],
      providers:[{provide:DoctorserviceService, useClass:DoctorServiceStub}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class DoctorServiceStub {
  getdoctor() {
   
    return of([]);
  }
  subscribe() {

  }

}

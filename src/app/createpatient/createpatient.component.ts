
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { doctor, DoctorserviceService } from '../service/doctorservice.service';
import { PatientserviceService } from '../service/patientservice.service';

@Component({
  selector: 'app-createpatient',
  templateUrl: './createpatient.component.html',
  styleUrls: ['./createpatient.component.css']
})
export class CreatepatientComponent implements OnInit {
  public pat={
    id:0,
    name:"",
    visiteddoctor:"",
    dateofvisit:"",
    prescription:"",
  };
  docget!: doctor[];
  temp!: doctor;
  did: number;
 
  constructor(private patservice: PatientserviceService, private docservice: DoctorserviceService, private snack: MatSnackBar) {}
  ngOnInit(): void {
    this.docservice.getdoctor().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.patservice.getpatient().subscribe(response => this.pat.id = response.length + 1);
  }
  doSubmitForm() {
    this.patservice.addpatient(this.pat).subscribe((data) => {
      console.log(data);
      this.snack.open("patient Added Successfully", "OK");
      this.refresh();
    },
      (error) => {
        console.log(error);
        alert("cannot add");
      })
  }
  handleSuccessfulResponse(response: doctor[]) {
    this.docget = response;
    console.log(this.docget);
  }
  datepick(event:any) {
    this.pat.dateofvisit = JSON.stringify(event.target.value);
    console.log(this.pat.dateofvisit);
  }
  refresh(): void {
    window.location.reload();
  }
}

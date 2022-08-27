import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { doctor, DoctorserviceService } from '../service/doctorservice.service';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {
  public doct = {
    id:0,
    name:"",
    age:"",
    gender:"gender",
    speicalist: "",
    patientcount: 0,
  };
  public genlist: String[] = ["Male","Female"];

  constructor(private doctorservice: DoctorserviceService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.doctorservice.getdoctor().subscribe(response => this.doct.id = response.length + 1);
  }

  doSubmitForm() {
    //console.log(this.emp);
    this.doctorservice.adddoctor(this.doct).subscribe(
      (data) => {
        console.log(data);
        this.snack.open("Doctor Added Successfully", "OK");
        this.refresh();
      },
      (error) => {
        console.log(error);
        alert("cannot add");
      }
    )
  }

  refresh(): void {
    window.location.reload();
  }

}

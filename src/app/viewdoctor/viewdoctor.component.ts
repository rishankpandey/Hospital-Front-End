import { Component, OnInit } from '@angular/core';
import { doctor, DoctorserviceService } from '../service/doctorservice.service';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrls: ['./viewdoctor.component.css']
})
export class ViewdoctorComponent implements OnInit {
  docget!: doctor[];
  public temp = {
    id: 0,
    name: "",
    age: "",
    gender: "gender",
    patientcount: 0,
    speicalist: "NA",
  };
  did: number;
  show = false;
  constructor(private doctorservice:DoctorserviceService) { }

  ngOnInit(): void {
    this.doctorservice.getdoctor().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response: doctor[]) {
    this.docget = response;
    console.log(this.docget);
  }
  assigndoctor(id: any) {
    this.temp = this.docget.find((doct: any) => doct.id == this.did);
    this.show = true;
  }
}

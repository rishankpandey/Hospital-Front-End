import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { patient, PatientserviceService } from '../service/patientservice.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

  show = false;
 
  public pat = {
    id: 0,
    name: "",
    visiteddoctor: "",
    dateofvisit: "",
    prescription: "0",
  };
  patid: number;
  constructor(private patientservice:PatientserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  btnclick() {

    this.patientservice.getpatientbyid(this.patid).subscribe((data) => { this.pat = data; this.show = true;}, (error) => { this.router.navigate(['#']);})
    
   
    }
  }


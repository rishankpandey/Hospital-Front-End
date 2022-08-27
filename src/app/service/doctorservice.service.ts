import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class doctor {
  constructor(
    public id: number,
    public name: string,
    public age: string,
    public gender: string,
    public speicalist:string,
    public patientcount: number,) {}
}
@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  constructor(private http: HttpClient) { }

  public getdoctor() {
    return this.http.get<doctor[]>('http://localhost:8081/doctor');

  }

  public adddoctor(doct:any) {
    return this.http.post('http://localhost:8081/doctor', doct);
  }
}

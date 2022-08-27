import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class patient {
  constructor(
    public id: number,
    public name: string,
    public visiteddoctor: string,
    public dateofvisit: string,
    public prescription: string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http: HttpClient) { }

  public addpatient(pat: any) {
    return this.http.post('http://localhost:8082/patient', pat)
  }
  public getpatient() {
    return this.http.get<patient[]>('http://localhost:8082/patient');
  }
  public getpatientbyid(id: any) {
    return this.http.get<patient>('http://localhost:8082/patient/' + id);
  }
}

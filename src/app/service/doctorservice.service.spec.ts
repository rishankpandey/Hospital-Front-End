import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DoctorserviceService } from './doctorservice.service';

describe('DoctorserviceService', () => {
  let service: DoctorserviceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        DoctorserviceService
      ],
    });
    service = TestBed.get(DoctorserviceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, DoctorserviceService],
    (httpClient: HttpTestingController, service: DoctorserviceService) => {
      const postItem = [
        {
          
          "id": 1,
          "name": "Random",
          "age": "32",
          "gender": "Male",
          "speicalist": "xyz",
          "patientcount":0

        },
        {
          "id": 1,
          "name": "Random",
          "age": "32",
          "gender": "Male",
          "speicalist": "xyz",
          "patientcount": 0
        },
        {
          "id": 1,
          "name": "Random",
          "age": "32",
          "gender": "Male",
          "speicalist": "xyz",
          "patientcount": 0
        }
      ];
      service.getdoctor()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });
      let req = httpMock.expectOne('http://localhost:8081/doctor');
      expect(req.request.method).toBe("GET");
      req.flush(postItem);
      httpMock.verify();
    })));
});

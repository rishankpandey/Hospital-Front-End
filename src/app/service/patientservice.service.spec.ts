import { async, inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientserviceService } from './patientservice.service';

describe('PatientserviceService', () => {
  let service: PatientserviceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
       PatientserviceService
      ],    });
    service = TestBed.inject(PatientserviceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should fetch posts as an Observable`, async(inject([HttpTestingController, PatientserviceService],
    (httpClient: HttpTestingController, service: PatientserviceService) => {
      const postItem = [
        {

          "id": 1,
          "name": "abc",
          "visiteddoctor": "Random",
          "dateofvisit": "2022-08-22T18:30:00.000Z",
          "prescription": "xyz"

        },
        {
          "id": 1,
          "name": "def",
          "visiteddoctor": "Random",
          "dateofvisit": "2022-08-22T18:30:00.000Z",
          "prescription": "xyz"
        },
        {
          "id": 1,
          "name": "ghi",
          "visiteddoctor": "Random",
          "dateofvisit": "2022-08-22T18:30:00.000Z",
          "prescription": "xyz"
        }
      ];
      service.getpatient()
        .subscribe((posts: any) => {
          expect(posts.length).toBe(3);
        });
      let req = httpMock.expectOne('http://localhost:8082/patient');
      expect(req.request.method).toBe("GET");
      req.flush(postItem);
      httpMock.verify();
    })));
});

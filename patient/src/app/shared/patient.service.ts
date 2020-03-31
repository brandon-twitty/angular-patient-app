import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Patient} from './patient';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientApi = 'https://wrmnx4jqu9.execute-api.us-east-2.amazonaws.com/dev';
  private patient: Patient = new Patient();

  private patientSubject = new Subject();
  patientUpdate$ = this.patientSubject.asObservable();
  constructor(private http: HttpClient) { }
  savePatient(patient: Patient) {
    return this.http.post(`${this.patientApi}/create-patient/${patient.ID}`, patient);
  }
  public createPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.patientApi}/create-patient/${patient.ID}`, patient);
  }
}

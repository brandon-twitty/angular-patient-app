import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './patient';
import { Subject } from 'rxjs';
let PatientService = class PatientService {
    constructor(http) {
        this.http = http;
        this.patientApi = 'https://wrmnx4jqu9.execute-api.us-east-2.amazonaws.com/dev';
        this.patient = new Patient();
        this.patientSubject = new Subject();
        this.patientUpdate$ = this.patientSubject.asObservable();
    }
    savePatient(patient) {
        return this.http.post(`${this.patientApi}/create-patient/${patient.ID}`, patient);
    }
    createPatient(patient) {
        return this.http.post(`${this.patientApi}/create-patient/${patient.ID}`, patient);
    }
};
PatientService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], PatientService);
export { PatientService };
//# sourceMappingURL=patient.service.js.map
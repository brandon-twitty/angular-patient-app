import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientService } from '../shared/patient.service';
let Tab2Page = class Tab2Page {
    constructor(fb, patientService) {
        this.fb = fb;
        this.patientService = patientService;
        this.scheduleDateForm = fb.group({
            appointmentDate: [''],
        });
    }
    ngOnInit() {
        this.updatePatient();
    }
    updatePatient() {
        this.sub = this.patientService.patientUpdate$.subscribe(() => {
            const { appointmentDate } = this.scheduleDateForm.value;
            this.patient.appointmentDate = appointmentDate;
        });
    }
};
Tab2Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab2',
        templateUrl: 'tab2.page.html',
        styleUrls: ['tab2.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, PatientService])
], Tab2Page);
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map
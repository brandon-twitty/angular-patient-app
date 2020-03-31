import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientService } from '../shared/patient.service';
let Tab1Page = class Tab1Page {
    constructor(fb, patientService) {
        this.fb = fb;
        this.patientService = patientService;
        this.patientForm = fb.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            phoneNumber: ['']
        });
    }
    ngOnInit() {
        // this.contactForm.get('name').setValue(this.contact.name);
    }
    createPatient() {
        this.patientService.savePatient(this.patientForm.value).subscribe();
    }
};
Tab1Page = tslib_1.__decorate([
    Component({
        selector: 'app-tab1',
        templateUrl: 'tab1.page.html',
        styleUrls: ['tab1.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, PatientService])
], Tab1Page);
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map
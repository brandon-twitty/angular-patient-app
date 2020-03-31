import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Patient} from '../shared/patient';
import {PatientService} from '../shared/patient.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  patientForm: FormGroup;
  scheduleDate: FormGroup;
  patient: Patient;
  constructor(public fb: FormBuilder, private patientService: PatientService) {
    this.patientForm = fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: ['']
    });

  }
  ngOnInit(): void {
    // this.contactForm.get('name').setValue(this.contact.name);
  }

  createPatient() {
    this.patientService.savePatient(this.patientForm.value).subscribe();
  }
}

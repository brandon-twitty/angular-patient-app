import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Patient} from '../shared/patient';
import {Subscription} from 'rxjs';
import {PatientService} from '../shared/patient.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  patient: Patient;
  sub: Subscription;
  scheduleDateForm: FormGroup;
  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.scheduleDateForm = fb.group({
      appointmentDate: [''],
    });
  }
  ngOnInit(): void {
    this.updatePatient();
  }
  updatePatient() {
    this.sub = this.patientService.patientUpdate$.subscribe(() => {
      const { appointmentDate } = this.scheduleDateForm.value;
      this.patient.appointmentDate = appointmentDate;
      });
  }

}

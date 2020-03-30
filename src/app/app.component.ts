import { Component } from '@angular/core';
import {AmplifyService} from "aws-amplify-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-patient-app';

  constructor(public amplify: AmplifyService) {
    amplify.auth().currentAuthenticatedUser().then(console.log)
  }
  ngOnInit(){
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div class="app">
      <dynamic-form 
        [config]="config"
        (submitted)="formSubmitted($event)">
      </dynamic-form>
    </div>
  `
})
export class AppComponent {
  config = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];
  formSubmitted(value) {
    console.log(value);
  }
}

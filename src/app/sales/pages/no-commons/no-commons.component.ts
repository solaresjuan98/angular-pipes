import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [],
})
export class NoCommonsComponent {
  // i18nSelect
  name: string = 'Susana';
  gender: string = 'female';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  customers: string[] = ['Maria', 'Pedro', 'Luis', 'Claudia'];

  customersMap = {
    '=0': "we don't have any customers waiting.",
    '=1': 'we have one customer waiting.',
    other: 'we have # customers waiting ',
  };


  changeCustomer() {
    this.name = 'Luis';
    this.gender = 'male'
  }

  deleteCustomer() {
    this.customers.pop();
  }
}

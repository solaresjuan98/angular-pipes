import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and dates',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'Non commons',
            icon: 'pi pi-globe',
            routerLink: 'no-commons',
          },
        ],
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        routerLink: 'order'
      },
    ];
  }
}

// this.items = [
//   {
//     label: 'File',
//     items: [
//       {
//         label: 'New',
//         icon: 'pi pi-fw pi-plus',
//         items: [{ label: 'Project' }, { label: 'Other' }],
//       },
//       { label: 'Open' },
//       { label: 'Quit' },
//     ],
//   },
//   {
//     label: 'Edit',
//     icon: 'pi pi-fw pi-pencil',
//     items: [
//       { label: 'Delete', icon: 'pi pi-fw pi-trash' },
//       { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
//     ],
//   },
// ];

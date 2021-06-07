import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimerNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
//import { MenuItem } from 'primeng/api';

@NgModule({
  exports: [ButtonModule, CardModule, FieldsetModule, MenubarModule],
  imports: [CommonModule],
})
export class PrimeNgModule {}

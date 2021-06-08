import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimerNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
//import { MenuItem } from 'primeng/api';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule,
    TableModule
  ],
  imports: [CommonModule],
})
export class PrimeNgModule {}

import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  exports: [
    MatIconModule, 
    MatToolbarModule, 
    MatCheckboxModule, 
    MatTableModule, 
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }

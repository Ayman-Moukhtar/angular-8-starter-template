import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MatIconModule, 
    MatToolbarModule, 
    MatCheckboxModule, 
    MatTableModule, 
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { BlockingLoaderComponent } from './components/blocking-loader/blocking-loader.component';

@NgModule({
  declarations: [CapitalizePipe, BlockingLoaderComponent],
  imports: [MaterialModule],
  exports: [
    MaterialModule, CommonModule, CapitalizePipe, BlockingLoaderComponent
  ]
})
export class SharedModule { }

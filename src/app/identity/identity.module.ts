import { NgModule } from '@angular/core';
import { IdentityRoutingModule } from './identity-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [IdentityRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
    declarations: [IdentityRoutingModule.components]
})
export class IdentityModule { }

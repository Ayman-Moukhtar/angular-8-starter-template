import { NgModule } from '@angular/core';
import { IdentityRoutingModule } from './identity-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [IdentityRoutingModule, SharedModule],
    declarations: [IdentityRoutingModule.components]
})
export class IdentityModule { }

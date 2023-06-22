import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyManualRoutingModule } from './policy-manual-routing.module';
import { PolicyManualComponent } from './policy-manual.component';


@NgModule({
  declarations: [
    PolicyManualComponent
  ],
  imports: [
    CommonModule,
    PolicyManualRoutingModule
  ]
})
export class PolicyManualModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicyManualComponent } from './policy-manual.component';

const routes: Routes = [{ path: '', component: PolicyManualComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicyManualRoutingModule { }

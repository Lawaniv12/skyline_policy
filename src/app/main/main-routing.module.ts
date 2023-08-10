import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    {
      path: 'policy-manual',
      loadChildren: () =>
        import('./pages/policy-manual/policy-manual.module').then(
          (m) => m.PolicyManualModule
        ),
    },
    {
      path: 'procedures',
      loadChildren: () =>
        import('./pages/procedures/procedures.module').then(
          (m) => m.ProceduresModule
        ),
    },
    {
      path: 'forms',
      loadChildren: () =>
        import('./pages/forms/forms.module').then((m) => m.FormsModule),
    },
  ]
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

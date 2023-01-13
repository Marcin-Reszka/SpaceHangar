import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntelBrowserComponent } from './intel-browser/intel-browser.component';

const routes: Routes = [
  { path: 'browser', component: IntelBrowserComponent },
  { path: '', pathMatch: 'full', redirectTo: 'browser' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntelRoutingModule {}

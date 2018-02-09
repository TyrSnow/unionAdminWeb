import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FrameComponent } from './frame/frame.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: FrameComponent, pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

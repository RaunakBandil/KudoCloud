import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaykudoComponent } from './playkudo/playkudo.component';
import { HomeComponent } from './home/home.component';
import { WinComponent } from './win/win.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'play', component: PlaykudoComponent },
  { path: 'win', component: WinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

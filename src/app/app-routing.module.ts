import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaykudoComponent } from './playkudo/playkudo.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'play', component: PlaykudoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

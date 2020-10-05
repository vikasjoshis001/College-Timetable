import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullTTComponent } from './full-tt/full-tt.component';
import { DailyTTComponent } from './daily-tt/daily-tt.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  { path: "fulltt", component: FullTTComponent },
  { path: "", component: DailyTTComponent },
  { path: "about", component: AboutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { AddimageComponent } from './components/addimage/addimage.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


const routes: Routes = [{path: 'addimage', component: AddimageComponent},
{path: 'imageList', component: MainComponent},
{path: '', redirectTo: 'imageList', pathMatch: 'full'},
{path: '**' , component: PagenotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

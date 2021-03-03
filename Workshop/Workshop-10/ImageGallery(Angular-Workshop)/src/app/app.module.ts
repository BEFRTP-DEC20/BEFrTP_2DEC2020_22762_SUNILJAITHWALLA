import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ChildComponent } from './components/child/child.component';
import { ConvertTospacePipe } from './utility/convert-tospace.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryfilterPipe } from './utility/categoryfilter.pipe';
import { AddimageComponent } from './components/addimage/addimage.component';
import { NavComponent } from './components/nav/nav.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EditimageComponent } from './components/editimage/editimage.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ChildComponent,
    ConvertTospacePipe,
    CategoryfilterPipe,
    AddimageComponent,
    NavComponent,
    PagenotfoundComponent,
    EditimageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

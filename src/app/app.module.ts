import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { ChitietComponent } from './chitiet/chitiet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QlyteComponent } from './qlyte/qlyte.component';
import { TypeComponent } from './type/type.component';
import { TintucComponent } from './tintuc/tintuc.component';



const routes: Routes = [
  {
    path: '',
    component: MainComponent,
   
  },
  {
    path:'chitiet/:id',
    component: ChitietComponent,
  },
  {
    path:'qlye',
    component: QlyteComponent,
  },
  {
    path:'tintuc',
    component: TintucComponent,
  },
  {
    path:'type/:id',
    component: TypeComponent,
  }
  
 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ChitietComponent,
    QlyteComponent,
    TypeComponent,
    TintucComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

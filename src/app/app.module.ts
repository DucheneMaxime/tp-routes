import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ROUTES } from "./app.routes";
import { FormationsComponent } from './formations/formations.component';
import { ConnaissancesComponent } from './connaissances/connaissances.component';
import { FormationsResolvers } from './resolver/FormationsResolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    FormationsComponent,
    ConnaissancesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    FormationsResolvers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
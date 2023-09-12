import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CasesComponent } from './cases/cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { CasesTopBarComponent } from './cases/cases-top-bar/cases-top-bar.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cases', component: CasesComponent },
  { path: 'cases/:id', component: CasesDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CasesComponent,
    CasesDetailsComponent,
    SideNavComponent,
    TopBarComponent,
    CasesTopBarComponent,
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

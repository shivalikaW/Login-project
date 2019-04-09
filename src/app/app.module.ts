import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import {AgGridModule} from 'ag-grid-angular';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import {DatagridService} from './datagrid.service';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents(null),
  ],
  providers: [DatagridService,
              MainComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

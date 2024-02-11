import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HostEventComponent } from './host-event/host-event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SignupComponent } from './signup/signup.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {ConfirmationService, MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    EventDetailsComponent,
    LoginSignupComponent,
    HostEventComponent,
    DashboardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RadioButtonModule,
    ToastModule,
    InputTextareaModule,
    DropdownModule,
    BrowserAnimationsModule,
    ConfirmPopupModule,
    FormsModule,
    TableModule,
    CardModule,
    TagModule,
    RatingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ImageModule,
    DialogModule,
    CalendarModule,
    DataViewModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

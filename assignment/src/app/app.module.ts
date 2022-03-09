import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchApiComponent } from './fetch-api/fetch-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { routingComponents } from './app-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule }   from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    FetchApiComponent,
    routingComponents,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

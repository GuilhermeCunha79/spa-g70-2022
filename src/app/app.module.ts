import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveryDetailComponent } from './delivery-detail/delivery-detail.component';
import { DeliveryComponent } from './Delivery/delivery.component';
import { DeliverySearchComponent } from './delivery-search/delivery-search.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateTruckComponent } from './create-truck/create-truck.component';
import { LoginComponent } from './login/login.component';
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';
import { WarehouseManagerComponent } from './warehouse-manager/warehouse-manager.component';
import { RouteComponent } from './route/route.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    LoginComponent,
   // DashboardComponent,
    DeliveryComponent,
    DeliveryDetailComponent,
    MessagesComponent,
    DeliverySearchComponent,
    CreateTruckComponent,
    CreateWarehouseComponent,
    WarehouseManagerComponent,
    RouteComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

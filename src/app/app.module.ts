import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DeliveryComponent } from './create-delivery/create-delivery.component';
import { MessagesComponent } from './messages/messages.component';
import { CreateTruckComponent } from './create-truck/create-truck.component';
import { LoginComponent } from './login/login.component';
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';
import { WarehouseManagerComponent } from './warehouse-manager/warehouse-manager.component';
import { RouteComponent } from './create-route/route.component';
import { FleetManagerComponent } from './fleet-manager/fleet-manager.component';
import {SharedModule} from "./shared.module";
import { CreatePlanningComponent } from './create-planning/create-planning.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule

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
    DeliveryComponent,
    MessagesComponent,
    CreateTruckComponent,
    CreateWarehouseComponent,
    WarehouseManagerComponent,
    RouteComponent,
    FleetManagerComponent,
    CreatePlanningComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}

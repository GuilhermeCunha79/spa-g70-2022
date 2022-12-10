import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DeliveryComponent} from "./create-delivery/create-delivery.component";
import {LoginComponent} from "./login/login.component";
import {WarehouseManagerComponent} from "./warehouse-manager/warehouse-manager.component";
import {CreateWarehouseComponent} from "./create-warehouse/create-warehouse.component";
import {RouteComponent} from "./create-route/route.component";
import {CreateTruckComponent} from "./create-truck/create-truck.component";
import {FleetManagerComponent} from "./fleet-manager/fleet-manager.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  {path: 'warehouse-manager', component: WarehouseManagerComponent},
  {path: 'create-delivery', component: DeliveryComponent},
  {path: 'create-warehouse', component: CreateWarehouseComponent},

  {path: 'fleet-manager', component: FleetManagerComponent},
  {path: 'create-truck', component: CreateTruckComponent},

  {path: 'create-route', component: RouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

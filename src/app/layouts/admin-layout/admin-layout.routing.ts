import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { RtlComponent } from "src/app/pages/rtl/rtl.component";
import { MonitorComponent } from "../../pages/monitor/monitor.component";
import { ListaComponent } from "src/app/pages/lista/lista.component";

export const AdminLayoutRoutes: Routes = [
  { path: "monitor", component: MonitorComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "lista", component: ListaComponent },
  { path: "rtl", component: RtlComponent }
];

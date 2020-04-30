import { NgModule } from "@angular/core";
import { AppComponent } from '../app.component';
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from '../components/auth/auth.component';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { OrderDetailsComponent } from '../components/order-details/order-details.component';



const routes: Routes = [
    { path: "product-list", component: ProductListComponent },
   { path: "auth", component: AuthComponent},
   {path: "order-details", component: OrderDetailsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
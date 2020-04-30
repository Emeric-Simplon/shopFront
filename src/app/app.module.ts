import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { TransfereService } from './services/transfert.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AuthComponent,
    OrderDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TransfereService],
  bootstrap: [AppComponent]
})
export class AppModule { }

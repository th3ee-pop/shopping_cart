import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ShoesComponent } from './shoes/shoes.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { EmitService } from './service/message.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/shoes', pathMatch: 'full'  },
  { path: 'shoes', component: ShoesComponent},
  { path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShoesComponent,
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatListModule,
    MatTooltipModule
  ],
  providers: [EmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

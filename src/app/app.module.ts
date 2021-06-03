import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';

// Personalized modules
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRouterModule, BrowserModule, SharedModule, SalesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

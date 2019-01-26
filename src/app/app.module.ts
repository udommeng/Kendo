import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, SparklineModule, StockChartModule } from '@progress/kendo-angular-charts';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LOCALE_ID } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import 'hammerjs';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule, SparklineModule, StockChartModule,
    DateInputsModule, GridModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'th-TH'}
  ],
})
export class AppModule {
}


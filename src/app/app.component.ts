import { products } from './products';
import { Component } from '@angular/core';

import '@progress/kendo-angular-intl/locales/th/all';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gridData: any[] = products;

  public value: Date = new Date(2000, 2, 10);

  public pieData: any = [
    { category: 'ไทย', value: 20 },
    { category: 'อังกฤษ', value: 100 },
    { category: 'เลข', value: 30 }
  ];

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerProductListViewComponent } from '../customer-product-list-view/customer-product-list-view.component';

@Component({
  selector: 'app-customers-productlist',
  templateUrl: './customers-productlist.component.html',
  styleUrls: ['./customers-productlist.component.scss']
})
export class CustomersProductlistComponent implements OnInit {
  test_data = [
    { productName: 'test', description: 'Customer 1'},
    { productName: 'test', description: 'Customer 1'},
    { productName: 'test', description: 'Customer 1'},
    { productName: 'test', description: 'Customer 1'},
    { productName: 'test', description: 'Customer 1'},
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onClickText(s)
  {
    let dialogRef = this.dialog.open(CustomerProductListViewComponent, {
      width: '800px',
      height:'600px',
      data:s
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
}

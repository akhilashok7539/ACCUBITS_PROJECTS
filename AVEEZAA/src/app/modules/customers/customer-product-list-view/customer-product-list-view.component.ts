import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-product-list-view',
  templateUrl: './customer-product-list-view.component.html',
  styleUrls: ['./customer-product-list-view.component.scss']
})
export class CustomerProductListViewComponent implements OnInit {
  productListName:any;
  test_data=[
    { ProdcutCode: 'PL100', description: 'Customer 1',categroy:'category1',UOM:'EA',UnitCost:'1241'},
    { ProdcutCode: 'PL100', description: 'Customer 1',categroy:'category1',UOM:'EA',UnitCost:'1241'},
    { ProdcutCode: 'PL100', description: 'Customer 1',categroy:'category1',UOM:'EA',UnitCost:'1241'},
    { ProdcutCode: 'PL100', description: 'Customer 1',categroy:'category1',UOM:'EA',UnitCost:'1241'},
    { ProdcutCode: 'PL100', description: 'Customer 1',categroy:'category1',UOM:'EA',UnitCost:'1241'},
  ]
  constructor(  public dialogRef: MatDialogRef<CustomerProductListViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      console.log(data);
    
    this.productListName = data['productName']
     }

  ngOnInit(): void {
    
  }

}

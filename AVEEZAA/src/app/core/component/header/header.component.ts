import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '@app/core/services/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , OnDestroy{
  @Output("hamburger") hamburger: EventEmitter<any> = new EventEmitter();
  showCSVFileUploadpopup = false;
  loadPage = false;
  dataSevices:Subscription;
  headerDetail;
  searchPlaceholder:any="search";
  constructor(
    private dataService:DataServiceService,
    private router:Router
  ) {
    this.dataSevices = this.dataService.headername.subscribe((res)=>{
      if(res) { 
        this.loadPage = true;
        this.headerDetail = res;
        console.log(this.headerDetail);
        if(this.headerDetail.buttonTitle === "Add Products List") {
          this.searchPlaceholder = 'Search Product List';
         
        }
        else if(this.headerDetail.buttonTitle === "Add Customers")
        {
          this.searchPlaceholder = 'Search Customers';
        }
        else if(this.headerDetail.buttonTitle === 'Add Products')
        {
          this.searchPlaceholder = 'Search Products';
    
        }
        else if(this.headerDetail.buttonTitle === 'Add Branches')
        {
          this.searchPlaceholder = 'Search Branches';
    
        }
        else if(this.headerDetail.buttonTitle === 'Add Users')
        {
          this.searchPlaceholder = 'Search Users';
    
        }
      
      }
    })
   }
  ngOnDestroy(){
    this.dataSevices.unsubscribe();
  }

  ngOnInit(): void {
  }
  onHamburgerClick() {
    this.hamburger.next();
  }
  onUploadCSV(){
    this.showCSVFileUploadpopup =! this.showCSVFileUploadpopup;
  }
  onNavigation(){
    if(this.headerDetail.titleDetailFirst === "Products Lists") {
      this.router.navigateByUrl('/products-list/list')
    }
    else
    {
    
    }
  }
  onCreate(){
    if(this.headerDetail.buttonTitle === "Add Products List") {
      this.searchPlaceholder = 'Search Product List';
      this.router.navigateByUrl('/products-list/create')
    }
    else if(this.headerDetail.buttonTitle === "Add Customers")
    {
      this.searchPlaceholder = 'Search Customers';
    }
    else if(this.headerDetail.buttonTitle === 'Add Products')
    {
      this.router.navigateByUrl('/products/create')
      this.searchPlaceholder = 'Search Products';

    }
    else if(this.headerDetail.buttonTitle === 'Add Branches')
    {
      this.router.navigateByUrl('/branches/create')
      this.searchPlaceholder = 'Search Branches';

    }

  }
}

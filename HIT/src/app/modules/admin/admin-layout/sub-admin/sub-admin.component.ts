import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddEditPopComponent } from '../admin-add-edit-pop/admin-add-edit-pop.component'


@Component({
  selector: 'app-sub-admin',
  templateUrl: './sub-admin.component.html',
  styleUrls: ['./sub-admin.component.scss']
})
export class SubAdminComponent implements OnInit {
  adminList=[];
  adminType;
  searchText='';
  p = 1;
  total = 0;
  limit = 10;
  adminTypeList=[];
  adminRoles=[];
  constructor(private service: ApiService,
    public commonService: CommonService ,
    private toastr: ToastrService, 
    public dialog: MatDialog,
    private router:Router) { }

  ngOnInit(): void {
    this.getAdminList();
    this.adminType = localStorage.Admtype

  }
  getAdminList(){
    let apiParams = {
      searchTerm: this.searchText,
      pageLimit: this.limit,
      pageNo: this.p,
    };
    const params = this.commonService.removeEmptyStringsData(apiParams);
    this.service.httpGet('/v1/admin/settings/subadmin?' + params).subscribe((response) => {
      this.adminList = response.data.rows;
      this.total = response.data.totalCount;
      this.adminTypeList = response.data.roles;
      sessionStorage.setItem("adminRoles",JSON.stringify(this.adminTypeList))
    });
  }
  paginateGames(e){
    this.p=e;
    this.getAdminList();
  }
  getData(e){
    this.p=1;
    this.searchText = e;
    this.getAdminList();
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AdminAddEditPopComponent,{
      width: '400px',data:''
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result=='Added'){
        this.getAdminList();
      }
    });
  }

  editAdmin(details){
    let dialogRef = this.dialog.open(AdminAddEditPopComponent,{
      width: '400px',data:details
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result=='Added'){
        this.getAdminList();
      }
    });
  }
  deleteAdmin(details){
    this.service.httpDelete('/v1/admin/settings/subadmin/'+details.guid).subscribe((response) => {
      this.toastr.success(response.message);
      this.getAdminList();
    });
  }
  getadminrole(id)
  {
    return (
      this.adminTypeList.find((el) => el.id.toString() === (id || "").toString()) || {
        name: "",
      }
    );
  }
}

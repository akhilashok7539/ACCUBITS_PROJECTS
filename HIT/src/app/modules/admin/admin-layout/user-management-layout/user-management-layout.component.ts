import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/service/api.service';
import { CommonService } from '../../../../core/service/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-management-layout',
  templateUrl: './user-management-layout.component.html',
  styleUrls: ['./user-management-layout.component.scss']
})
export class UserManagementLayoutComponent implements OnInit {
  currentUser;
  adminType;
  isactive = '0';
  user:any;
  userReferenceId='';
  constructor(
    private service: ApiService,
    private toastr: ToastrService,
    private router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params.user){
        this.userReferenceId = params.user
        this.getUser()
      }
    });
    this.adminType = localStorage.Admtype
  }

  getUser(){
    this.service.httpGet('/v1/admin/user/view?referenceId='+this.userReferenceId).subscribe((response) => {
      this.user=response.data;
    });
  }
  blockUnblockUser(){
    if(this.user?.status==1){
      this.blockUser();
    }
    if(this.user?.status==2){
      this.unBlockUser();
    }
    if(this.user?.status==3){
      this.unBlockUser();
    }
  }
  blockUser(){
    this.service.httpPost('/v1/admin/user/block?referenceId='+this.userReferenceId,null).subscribe((response) => {
      this.getUser();
      this.toastr.success(response.message);
    });
  }
  unBlockUser(){
    this.service.httpPost('/v1/admin/user/unblock?referenceId='+this.userReferenceId,null).subscribe((response) => {
      this.getUser();
      this.toastr.success(response.message);
    });
  }
  onback() {
    this.router.navigateByUrl('/admin/layout/user-management')
  }
  onClick(data) {
    this.isactive = data;
  }
}

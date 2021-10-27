import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';
import { ApiService } from 'src/app/core/service/api.service';
import { DataServiceService } from 'src/app/shared/service/data-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userDetailsForm: FormGroup;
  subscribeProfile: Subscription;
  userProfile;
  conversionRate;
  selectedCheckBox = false;
  settingDetail;
  MastersettingDetail;
  disabled = false;
  todayDate: Date = new Date();
  onEdit = false;
  loading = false;
  editProfile = false;
  phoneNumber = '';
  filterFromDate: string;
  checked = false;
  requestBody;
  conversionCurrency;
  userFilter: any = [
    {
      "id": "0",
      "name": "Total"
    },
    {
      "id": "1",
      "name": "Per Day"
    },
    {
      "id": "7",
      "name": "Per Week"
    },
    {
      "id": "30",
      "name": "Per month"
    }
  ]
  checkboxClearIndefinite = false;
  checkboxCleardefinite = false;
  checkboxstatusDeposit ;
  checkboxStatusBetlimit ;
  checkedUnselctCheckbox;
  constructor(private dataService: DataServiceService, private service: ApiService, private toaster: ToastrService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscribeProfile = this.dataService.currentUser.subscribe(data => {
      if (data) {
        this.userProfile = data;
      }
    });
    this.settingDetails();
    this.createForm();
  }
  ngOnDestroy() {
    this.subscribeProfile.unsubscribe();
  }
  createForm(): void {
    this.userDetailsForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.minLength(7)]],
    });
  }
  selectValues()
  {
    console.log("current lang" );
    if(localStorage.getItem('lang') === 'en')
    {
      this.userFilter = [
        {
          "id":"0",
          "name":"Disable"
        },
        {
          "id":"1",
          "name":"Per Day"
        },
        {
          "id":"7",
          "name":"Per Week"
        },
        {
          "id":"30",
          "name":"Per month"
        }
      ]
    }
    if(localStorage.getItem('lang') === 'por')
    {
      this.userFilter = [
        {
          "id":"0",
          "name":"Desativar"
        },
        {
          "id":"1",
          "name":"Por Dia"
        },
        {
          "id":"7",
          "name":"Por Semana"
        },
        {
          "id":"30",
          "name":"Por Mês"
        }
      ]
    }
    
  }

  showEdit() {
    this.phoneNumber = this.userProfile?.mobileNumber;
    this.editProfile = !this.editProfile;
  }
  fromDateChanged(e, index, text) {
    console.log('index', index)
    if (text === 'endDate') {
      this.settingDetail[index].endDate = moment(e.value).format('YYYY-MM-DD');
      this.settingDetail[index].endDate_edit = true;
    }
    if (text === 'startDate') {
      this.settingDetail[index].startDate = moment(e.value).format('YYYY-MM-DD');
      this.settingDetail[index].startDate_edit = true;
    }
  }
  settingDetails() {
    this.service.httpGet(`/v1/user/settings`).subscribe((response) => {
      this.settingDetail = response.data.settings;
      this.conversionRate = response.data.conversionRate;
      this.conversionCurrency = response.data.conversionCurrency;
      this.settingDetail.forEach(el => {
        el.startDate = moment(el.startDate);
        el.endDate = moment(el.endDate);
        el.amount = el.amount * this.conversionRate;
        el.enable_edit = false;
        el.amount_edit = false;
        el.endDate_edit = false;
        el.startDate_edit = false;
        el.edit = false;
        el.schdl = false;
        if (el.status === 1) {
          el.enable = true;
        } else {
          el.enable = false;

        }
        if (el.rec == 3) {

        }
        if (el.status === 1) {
          console.log(el.startDate.format());

          if (el.startDate.format() == 'Invalid date') {
            el.IndefiniteSelfExclude = true;
          }
          else {
            el.IndefiniteSelfExclude = false;
          }
        }
        if (el.status === 0) {
          console.log(el.status);

          this.disabled = true;
        }

      });
      console.log(this.settingDetail)
      this.loading = true;
      this.onEdit = false
      if (this.settingDetail[2].status === 0) {
        this.disabled = true;
        console.log("disabled true");
        
      }
      else {
        this.disabled = false;
        console.log("disabled fasle");

      }
      console.log(this.settingDetail);
    });


  }
  onchangedate(index) {
    this.settingDetail[index].endDate_edit = true;
  }
  onchange_amount(index) {
    this.settingDetail[index].amount_edit = true;
  }
  showDepositeEdit() {


    this.settingDetail[0].edit = !this.settingDetail[0].edit;
    this.settingDetail[0].change_done = true;
    this.onEdit = true;
    console.log(this.settingDetail[0].endDate.format());
    this.settingDetail[0].endDate = this.settingDetail[0].endDate.format();
    this.settingDetail[0].recurrence = this.settingDetail[0].recurrence;

  }
  showBetEdit() {
    this.settingDetail[1].edit = !this.settingDetail[1].edit;
    this.settingDetail[1].change_done = true;
    this.onEdit = true;
    this.settingDetail[1].endDate = this.settingDetail[1].endDate.format();
    this.settingDetail[1].recurrence = this.settingDetail[1].recurrence;
  }
  showSelfExcludeEdit() {
    this.settingDetail[2].edit = !this.settingDetail[2].edit;
    this.settingDetail[2].change_done = true;
    this.onEdit = true;

  }
  checkedIndefiniteself(event) {
    console.log(event.target.checked);
    this.checked = event.target.checked;
    console.log(this.checked);

    if (this.settingDetail[2].enable == false) {
      this.settingDetail[2].enable = true;
    }

    if (event.target.checked == true) {
      this.settingDetail[2].IndefiniteSelfExclude = true;
    }
    else {
      this.settingDetail[2].IndefiniteSelfExclude = false;
      this.settingDetail[2].enable = true;
    }



    // this.submitDetails();
  }
  checkeddefiniteself(event) {
    console.log(event.target.checked);
    console.log(this.settingDetail[2].IndefiniteSelfExclude);
    console.log(this.checked);



    if (event.target.checked == true) {
      this.settingDetail[2].IndefiniteSelfExclude = false;
      this.settingDetail[2].enable = true;
    }
    else {
      this.settingDetail[2].IndefiniteSelfExclude = true;

    }
  }
  submitDetails() {
    let data = [];

    this.settingDetail.forEach(el => {
      console.log(el.enable);

      if (el.enable === true) {
        el.enable = 1;
      } else {
        el.enable = 0;
      }
      if (el.type === 1) {


        const parmam = {
          "type": el.type,
          "enable": el.enable,
          "amount": el.amount,
          "toDate": el.endDate,
          "recurrence": el.recurrence
        }


        if (parmam.recurrence == null) {
          delete parmam.recurrence

        }
        if (el.amount_edit === false) {
          delete parmam.amount
        }
        if (el.endDate_edit === false) {
          delete parmam.toDate
        }
        if (this.settingDetail[0].edit != true) {
          delete parmam.recurrence
        }
        if (this.settingDetail[0].change_done == undefined) {
          delete parmam.recurrence
          delete parmam.toDate
          delete parmam.amount

        }
        if (this.settingDetail[0].edit == false) {
          console.log('edit 0 false');

          delete parmam.enable
        }
       if(this.checkboxstatusDeposit == false)
       {
         parmam.enable = 0;
       } 
       if(this.checkboxstatusDeposit == true)
       {
         parmam.enable = 1;
       } 
        data.push(parmam)

      }
      if (el.type === 2) {
        const parmam = {
          "type": el.type,
          "enable": el.enable,
          "amount": el.amount,
          "toDate": el.endDate,
          "recurrence": el.recurrence
        }

        if (this.settingDetail[1].edit != true) {
          delete parmam.recurrence
        }
        if (parmam.recurrence == null) {
          delete parmam.recurrence

        }
        if (el.amount_edit === false) {
          delete parmam.amount
        }
        if (el.endDate_edit === false) {
          delete parmam.toDate
        }
        if (this.settingDetail[1].change_done == undefined) {
          delete parmam.amount
          delete parmam.toDate
          delete parmam.recurrence
        }
        if (this.settingDetail[1].edit == false) {
          delete parmam.enable
        }
        if(this.checkboxStatusBetlimit == false)
        {
          parmam.enable = 0;
        } 
        // if(this.checkboxStatusBetlimit == false)
        // {
        //   parmam.enable = 1;
        // } 
        if(this.checkboxStatusBetlimit == true)
        {
          parmam.enable = 1;
        } 
        data.push(parmam)
      }
      if (el.type === 3) {
        console.log(this.checked);
        
        if (this.checked == true) {
          this.requestBody = {
            "type": 3,
            "enable": el.enable,
            "fromDate": null,
            "toDate": null,
          }
        }
        else {
          this.requestBody = {
            "type": 3,
            "enable": el.enable,
            "fromDate": el.startDate,
            "toDate": el.endDate,

          }
        }
        const parmam = this.requestBody;

        // if(this.checked == true)
        // {
        //   delete parmam.fromDate
        //   delete parmam.toDate
        // }
        // if(el.startDate_edit === false){
        //   delete parmam.fromDate
        // }
        // if(el.endDate_edit === false){
        //   delete parmam.toDate
        // }
        // if(el.startDate_edit === false && el.endDate_edit === false) {
        //   delete parmam.enable
        // }
        if (this.checked != true) {
          if (this.settingDetail[2].change_done == undefined) {
            delete parmam.amount
            delete parmam.toDate
            delete parmam.recurrence
            delete parmam.fromDate

          }
        }
        if (this.settingDetail[2].edit == false) {
          delete parmam.enable
          console.log("checked status",this.checked);
          if(this.checked === true)
          {
            parmam.enable = 1
          }
        }
        if (this.selectedCheckBox == false) {
          // delete parmam.enable
        }
        else {
          if (this.disabled === true) {
            parmam.enable = 0;
            delete parmam.amount
            delete parmam.toDate
            delete parmam.recurrence
            delete parmam.fromDate
          }
          if (this.disabled == false) {
            parmam.enable = 1;
          }
          if(this.checkedUnselctCheckbox== true)
          {

          }else{
          //  delete parmam.enable;
          }
        }

        data.push(parmam)
      }
    });

    const parms = {
      "settings": data
    }
    console.log(parms);

    this.service.httpPost(`/v1/user/settings`,parms).subscribe((response) => {
      this.toaster.success(response.message)
     this.disabled = false;
     this.checkboxStatusBetlimit= null;
     this.checkboxstatusDeposit= null;
     this.checkedUnselctCheckbox = null;
    this.checked = false;
      this.settingDetails();
    });
  }
  onchangeStatu(event,index) {
    this.onEdit = true;
    this.settingDetail[index].enable_edit = true;
    // this.settingDetail[index].enableCheckBox = 
    console.log(index);
    
    if(index === '0')
    {
      this.checkboxstatusDeposit = event.target.checked;
      console.log(this.checkboxstatusDeposit);
      
    }
    if(index === '1')
    {
      this.checkboxStatusBetlimit = event.target.checked;
      console.log(this.checkboxStatusBetlimit);
    }

    if (this.settingDetail[index].enable == true) {
      this.settingDetail[index].enable = false
    }
    else {
      this.settingDetail[index].enable = true
    }
    if (index == 2) {
      this.checked = false;

    }
  }
  clearIndefinite() {
    this.onEdit = true;
    this.checkboxClearIndefinite = true;

  }
  clearDefinite() {
    this.onEdit = true;
    this.checkboxCleardefinite = true;

  }
  //    var firstDay = new Date();
  // var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);    
  // console.log(nextWeek)
  // var nextmonth = new Date(firstDay.setMonth(firstDay.getMonth() + 1));
  // console.log(nextmonth)
  getrecurencename(id) {
    return (
      this.userFilter.find((el) => el.id.toString() === (id || "").toString()) || {
        name: "",
      }
    );
  }
  disable(event) {
    this.disabled = true;
    this.onEdit = true;
    this.selectedCheckBox = true;
    this.checkedUnselctCheckbox=true;
  }
  enable(event) {
    this.disabled = false;
    this.checkedUnselctCheckbox= true;
    this.selectedCheckBox = true;
  }
}

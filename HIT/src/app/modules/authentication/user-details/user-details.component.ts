import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import * as googleLibphonenumber from "google-libphonenumber";
import { parse } from "libphonenumber-js";
import { DataServiceService } from '../../../shared/service/data-service.service';
import { AuthService } from '../../../core/service/auth.service';
import { CommonService } from '../../../core/service/common.service';
import * as moment from 'moment';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { PasswordResponse } from 'src/app/core/interfaces/password.interface';
// import currency from '../../../../assets/json/currencies.json';
declare let fbq: Function;
declare global {
  interface Window { dataLayer: any; }
}


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetailsForm: FormGroup;
  // signupForm: FormGroup;
  date;
  month;
  year;
  showpassword=false;
  reshowpassword=false;
  mobileview =false;
  countryCode = +55;
  country = "BR";
  userVerified = false;
  emailVerified = false;
  phoneVerified = false;
  currencyDropDown = false;
  countryDropDown = false;
  stateDropDown = false;
  cityDropDown = false;
  userNameLength = false;
  emaiLength = false;
  phoneLength = false;
  validCurrency = false;
  isFbLogin = false;
  showTerms = false;
  showPrivacy = false;
  showDobError = false;
  filterText;
  filterstate;
  filtercountry;
  filtercity;
  socialMediaData;
  userError = '';
  // Validations=[{specialchar:{text: '1+ Symbols', value: false}},
  // {minlength: {text:'8+ Characters',value:false}}];

  Validations={
    minlength: {
      text:'8+ Characters',
      value:false
    },
    capital: {
      text:'1+ Capital Letters',
      value:false
    },
    specialchar:{
      text: '1+ Symbols', 
      value: false
    },
    number: {
      text:'1+ Numbers',
      value:false
    }
  }


  username = '';
  depositLimit = {
    type: 1,
    amount: '',
    enable: false,
    endDate: '',
    recurrence: '',
  }
  betLimit = {
    type: 2,
    amount: '',
    enable: false,
    endDate: '',
    recurrence: ''
  }
  todayDate: Date = new Date();

  email = '';
  emailError = '';
  phoneError = '';
  langDropdown = false;
  languagename;
  socialMediaAuth = false;
  currencyList = [];
  countrySelected;
  referenceId = '';
  countryList: any;
  stateList: any;
  cityList: any;
  countryCodeSelected: any;
  countcodeIsoSelected;

  // public currencyList = currency;
  userFilter: any = [
    {
      "id": "0",
      "name": "Disable"
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
  langList: any = [
    {
      "id": "1",
      "name": "English"
    },
    {
      "id": "2",
      "name": "Português"
    },
    {
      "id": "3",
      "name": "Spanish"
    }
  ]
  currentAction: string = '';
  passwordIsValid = false;

  activepage = 2;
  welcomescreen=false;
  monthValue;
  currencyListSorted: any = [];
  validDateerror = false;
  validyearError = false;
  validmonthError = false;
  nolimit: boolean;
  limit=true;
  notlimit: boolean;
  constructor(private fb: FormBuilder, public commonService: CommonService, public router: Router, private dataServiceService: DataServiceService,
    private auth: AuthService, private route: ActivatedRoute, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (Object.keys(params).length != 0) {
        this.username = params.username;
        this.socialMediaAuth = true;
        this.socialMediaData = params;
        this.referenceId = params.referenceId;
        if (this.socialMediaData?.isEmailRequired == 1) {
          this.isFbLogin = true;
          this.email = this.socialMediaData?.email;
        }
        this.getSocialmediaName(this.username);
      }
    });
    this.createForm();
    // this.signupForm = this.fb.group({
    //   password: [''],
    //   reEnterPassword: [''],
    // },
    // {validator: this.passwordMatchValidator});
    this.getCountryLocation();
    if (sessionStorage.getItem("otpReference") !== null) {
      const id = JSON.parse(sessionStorage.otpReference)
      this.referenceId = id.referenceId;
    }

  }

  // ngAfterViewInit()
  // {
  //   if (window.screen.width < 500) {
  //     console.log("screen width mobile enters");
  //     if(this.activepage === 4)
  //     {
  //      this.signupForm.controls['passowrd'].setValidators([Validators.required])
  //      this.signupForm.controls['reEnterPassword'].setValidators([Validators.required])

  //     }
  //   }
  // }
  _getCurrentAction(): void {
    this.route.paramMap.subscribe(params => {
      this.currentAction = params['params'].id;
    });
  }
  validatePassword(event){
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    let value = event.target.value;
    this.Validations.minlength.value = (value.length>8 && /[a-z]+/.test(value)) ? true : false;
    this.Validations.specialchar.value = regex.test(value) ? true : false;
    this.Validations.number.value = /[0-9]+/.test(value) ? true : false;
    this.Validations.capital.value = /[A-Z]+/.test(value)? true: false;
}
  passwordMatchValidator(frm: FormGroup) {
    return frm.controls.password.value === frm.controls.reEnterPassword.value ? null : { mismatch: true };
  }
  passwordValid(event) {
    this.passwordIsValid = event;
  }
  selectValues() {
    if (localStorage.getItem('lang') === 'en') {
      this.userFilter = [
        {
          "id": "0",
          "name": "Disable"
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
    }
    if (localStorage.getItem('lang') === 'por') {
      this.userFilter = [
        {
          "id": "0",
          "name": "Desativar"
        },
        {
          "id": "1",
          "name": "Por Dia"
        },
        {
          "id": "7",
          "name": "Por Semana"
        },
        {
          "id": "30",
          "name": "Por Mês"
        }
      ]
    }

  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  getCurrentLocation() {
    this.commonService._getLocationInfo().subscribe((response) => {
      this.userDetailsForm.value.currency = response.data.currency;
      this.filterText = response.data.currency;
      this.countrySelected = response.data.countryCode;
      this.currencyList = response.data.allowedCountries;
    });
  }

  getCountryLocation() {
    this.commonService._getLocationInfo().subscribe((response) => {
      this.countryList = response.data.allowedCountries;
      for (let i = 0; i < this.countryList.length; i++) {
        if (this.countryList[i].isAllowed === true) {
          // this.currencyListSorted = this.countryList[i];
          this.currencyListSorted.push(this.countryList[i])
        }
      }
    });

  }
  getstateLocation(data) {
    let q = '?countryCode=' + data.countryCode
    this.countryCodeSelected = data.countryCode;
    this.commonService._getLocationInfo(q).subscribe((response) => {
      this.stateList = response.data.states;
    });
  }
  getCityLocation(data) {
    let q = '?stateCode=' + data.stateCode + '&countryCode=' + this.countryCodeSelected
    this.commonService._getLocationInfo(q).subscribe((response) => {
      this.cityList = response.data.cities;
    });
  }
  getDob(data) {
    const convertAge = new Date(data.value);
    const age = moment().diff(moment(convertAge), 'years');
    if (age < 18) {
      this.showDobError = true;
    } else {
      this.showDobError = false;
    }
  }
  onSearchChange(event) {
    if (event.length < 4) {
      this.validyearError = true;
    }
    else {
      this.validyearError = false;

    }
    let currentYear = new Date().getFullYear();
    var age = currentYear - event;
    // if(this.month < 10)
    // {
    //   this.month = `0${this.month}`
    // }
    if (this.month.toString().length === 1) {
      this.month = `0${this.month}`
    }
    if (this.date.toString().length === 1) {
      this.date = `0${this.date}`
    }
    // this.monthValue =`0${this.month}`;
    if (event.length === 4) {
      if (age < 18) {
        this.showDobError = true;
        console.log("age is lessthan 18");
        // moment(userDetailsVal.dob).format('YYYY-MM-DD');
        this.userDetailsForm.value['dob'] = this.year + '-' + this.month + '-' + this.date;
      } else {
        this.showDobError = false;
        console.log("age is greater 18");

      }
    }

  }


  // disabledforsoftlaunch *************

  checkCurr() {
    const selectedCurrency = this.userDetailsForm.value.currency.toUpperCase();
    if (selectedCurrency) {
      this.currencyList.map((x) => {
        if (x.currency === selectedCurrency) {
          this.validCurrency = true;
          return;
        }
      })
    }
  }

  loginWithParams(data) {
    this.auth.storeTokens(data);
  }

  createForm(): void {
    if (window.screen.width < 600) {

      this.userDetailsForm = this.fb.group({
        username: ['',[Validators.required]],
        email: [],
        firstName: ['',[Validators.required]],
        lastName: ['',],
        mobileNumber: ['',],
        terms: ['',[Validators.required]],
        dob: [''],
        addressLine1: ['',],
        addressLine2: ['',],
        country: ['',],
        state: ['',],
        city: ['',],
        zipCode: ['',],
        optInEmail: [''],
        currency: ['',],
        language: ['',],
        password: [''],
        reEnterPassword: [''],
      }, { validator: this.passwordMatchValidator });
      this.mobileview = true;
    }
    else
    {
      this.userDetailsForm = this.fb.group({
        username: ['',[Validators.required]],
        email: [''],
        firstName: ['',[Validators.required]],
        lastName: [''],
        mobileNumber: ['',[Validators.required]],
        terms: ['',[Validators.requiredTrue]],
        dob: [''],
        addressLine1: ['',[Validators.required]],
        addressLine2: [''],
        country: ['',[Validators.required]],
        state: ['',[Validators.required]],
        city: ['',[Validators.required]],
        zipCode: ['',[Validators.required]],
        optInEmail: ['',[Validators.required]],
        currency: ['',[Validators.required]],
        language: ['',[Validators.required]],
       
      });
      this.mobileview = false;
    }
    this.userDetailsForm.controls['optInEmail'].setValue(0);
    this.userDetailsForm.get('addressLine2').setValue(null);
    this.userDetailsForm.get('lastName').setValue(null);
    if(this.username){
    this.getUserName(this.username);
    }
  }
  getNumber(e) {
    this.countryCode = e.dialCode;
    this.country = e.iso2;
  }
  subscribemail(event) {
    if (event.target.checked === true) {
      this.userDetailsForm.controls['optInEmail'].setValue(1);
    }
    else {
      this.userDetailsForm.controls['optInEmail'].setValue(0);
    }
  }
  selectOption(index, data) {
    console.log(index, data)
    console.log(this.countryCodeSelected);

    if (index === 0) {
      this.userDetailsForm.controls['country'].setValue(data.countryName);
      this.getstateLocation(data);
    }
    if (index === 1) {
      this.userDetailsForm.controls['state'].setValue(data.stateName);
      this.getCityLocation(data);
    }
    if (index === 2) {
      this.userDetailsForm.controls['city'].setValue(data.cityName);
    }
    if (index === 3) {
      this.userDetailsForm.controls['currency'].setValue(data.currency);
      this.countcodeIsoSelected = data.countryCode;
    }
    this.countryDropDown = false;
    this.stateDropDown = false;
    this.cityDropDown = false;
    this.currencyDropDown = false;
  }
  dateinput(event) {
    console.log(event.target.value);
    if (event.target.value.toString().length === 2) {
      if (event.target.value < 32) {
        console.log(false);
        this.validDateerror = false;
      }
      else {
        console.log(true);
        this.validDateerror = true;

      }
    }
    else {
      this.validDateerror = false;

    }

  }
  monthinput(event) {
    console.log(event.target.value);
    if (event.target.value.toString().length === 2) {
      if (event.target.value < 13) {
        console.log(false);
        this.validmonthError = false;
      }
      else {
        console.log(true);
        this.validmonthError = true;

      }
    }
    else {
      this.validmonthError = false;

    }
  }
  selectLang(item) {
    console.log(item);
    this.userDetailsForm.controls['language'].setValue(item.id);
    this.languagename = item.name;
    // this.userDetailsForm.controls['language'].setValue(item.id);
    this.langDropdown = false;
  }
  searchCurrencyDrop() {
    this.currencyDropDown = true;
  }
  searchcountryDrop() {
    console.log(this.countryDropDown);
    this.countryDropDown = true;
    console.log(this.countryDropDown);

  }
  searchstateDrop() {
    this.stateDropDown = true;
  }
  searchcityDrop() {
    this.cityDropDown = true;
  }
  closeCurrencyDropdown(event): void {
    if (event) {
      if (this.currencyDropDown) {
        this.currencyDropDown = false;
      }
    }
  }
  closecountryDropdown(event): void {
    if (event) {
      if (this.countryDropDown) {
        this.countryDropDown = false;
      }
    }
  }
  closecountryDropdownMobile(event): void {
    if (event) {
      if (this.countryDropDown) {
        this.countryDropDown = false;
      }
    }
  }
  searchlanguageDrop() {
    this.langDropdown = true;

  }
  closelangDropDown(event): void {
    if (event) {
      if (this.langDropdown) {
        this.langDropdown = false;
      }
    }
  }
  closecityDropdown(event): void {
    if (event) {
      if (this.cityDropDown) {
        this.cityDropDown = false;
      }
    }
  }
  closeDstateDropdown(event): void {
    if (event) {
      if (this.stateDropDown) {
        this.stateDropDown = false;
      }
    }
  }
  changeSelection(event,type){
    if(event.target.value && type=='first'){
      this.nolimit=false;
      this.notlimit=false;
      this.limit=true;
      this.depositLimit.enable=false;
      this.betLimit.enable=false;
    }
    if(event.target.value && type=='second'){
      this.limit=false;
      this.nolimit=true;
    }
    if(event.target.value && type=='third'){
      this.limit=false;
      this.notlimit=true;
    }
  }
  submitDetails() {
    for (let el in this.userDetailsForm.controls) {
      if (this.userDetailsForm.controls[el].errors) {
        console.log(el)

      }
    }


    if (this.validDateerror === true || this.validmonthError === true || this.validyearError === true) {
      return
    }
    else {


      let data = [];
      let enable;
      if (this.betLimit.type === 2) {
        if (this.betLimit.enable === true) {
          enable = 1;
        } else {
          enable = 0;
        }
        const parmam = {
          "type": this.betLimit.type,
          "enable": enable,
          "recurrence": this.betLimit.recurrence,
          "amount": this.betLimit.amount,
          "toDate": this.betLimit.endDate,
        }
        if (this.betLimit.amount === '') {
          delete parmam.amount
        }
        if (this.betLimit.endDate === '') {
          delete parmam.toDate
        }
        if (this.betLimit.amount === '' && this.betLimit.endDate === '') {
        } else {
          data.push(parmam)
        }
      }
      if (this.depositLimit.type === 1) {
        if (this.depositLimit.enable === true) {
          enable = 1;
        } else {
          enable = 0;
        }
        const parmam = {
          "type": this.depositLimit.type,
          "enable": enable,
          "amount": this.depositLimit.amount,
          "toDate": this.depositLimit.endDate,
          "recurrence": this.depositLimit.recurrence,
        }
        if (this.depositLimit.amount === '') {
          delete parmam.amount
        }
        if (this.depositLimit.endDate === '') {
          delete parmam.toDate
        }
        if (this.depositLimit.amount === '' && this.depositLimit.endDate === '') {
        } else {
          data.push(parmam)
        }
      }
      this.userDetailsForm.value['dob'] = this.year + '-' + this.month + '-' + this.date;
      // this.userDetailsForm.value['username'] = this.userName;

      const userDetailsVal = {
        ...this.userDetailsForm.value,
        mobileNumber: this.userDetailsForm.value.mobileNumber,
        countryCode: '+' + this.countryCode,
        countryCodeIso: this.countcodeIsoSelected,

        settings: data
      };
      this.checkCurr();
      // disabled for soft launch**********
      this.getUserName(userDetailsVal.username)
      const phoneUtil = googleLibphonenumber.PhoneNumberUtil.getInstance();
      const phoneNumber = phoneUtil.isValidNumberForRegion(phoneUtil.parse(userDetailsVal.mobileNumber, this.country), this.country);
      if (this.userVerified == false) {
        // this.toastr.error("User name already taken");
        return;
      }
      if (this.isFbLogin && this.emaiLength) {
        this.toastr.error("Enter a valid email");
        return;
      }
      if (this.isFbLogin && this.email == '') {
        this.toastr.error("Enter a valid email");
        return;
      }
      if (this.isFbLogin && !this.emailVerified) {
        this.toastr.error("Enter a valid email");
        return;
      }
      if (!phoneNumber && !this.phoneVerified) {
        this.toastr.error("Invalid Mobile Number");
        return;
      }
      // disabled for soft launch**********
      // if(!this.validCurrency){
      //   this.toastr.error("Please enter a valid currency !");
      //   return;
      // }
      if (this.showDobError) {
        this.toastr.error("You must be 18 years old or above");
        return;
      }

      if (this.socialMediaAuth == false) {
        console.log('social login false')
        sessionStorage.setItem('userDetails', JSON.stringify(userDetailsVal));
        this.router.navigate(['/user/create-password/' + 'create']);
      } else {
        console.log('social login true')
        // let apiParams={
        //   username:userDetailsVal.userName,
        //   mobileNumber: userDetailsVal.mobileNumber,
        //   countryCode: '+'+this.countryCode,
        //   firstName: userDetailsVal.firstName,
        //   lastName: userDetailsVal.lastName,
        //   addressLine1: userDetailsVal.addressLine1,
        //   addressLine2: userDetailsVal.addressLine2,
        //   dob: moment(userDetailsVal.dob).format('YYYY-MM-DD'),
        //   // disabled for soft launch**********
        //   currency:userDetailsVal.currency,
        //   optInEmail:this.userDetailsForm.value.optInEmail,
        //   // currency:'USD',
        //   referenceId:this.socialMediaData.referenceId,
        //   countryCodeIso:this.countrySelected,
        //   settings:data
        // }

        // this.userDetailsForm.value['dob'] =  moment(userDetailsVal.dob).format('YYYY-MM-DD');

        // let apiParams = this.userDetailsForm.value;
        this.userDetailsForm.value['dob'] = this.year + '-' + this.month + '-' + this.date;
        let apiParams = {
          ...this.userDetailsForm.value,
          countryCode: '+' + this.countryCode,
          countryCodeIso: this.countryCodeSelected,
          settings: data,
          referenceId: this.socialMediaData.referenceId,
        }
        console.log("request for social login", apiParams);

        if(this.socialMediaAuth){
          apiParams['email'] = null;
        }
        if (this.isFbLogin) {
          apiParams['email'] = this.email
        }
        console.log(apiParams);

        this.commonService._updateProfile(apiParams).subscribe((response) => {
          // fbq('trackCustom', 'SignUp', { username:  this.userDetailsForm.value['userName'] });
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'event': 'sign_up',
            'username': this.userDetailsForm.value['username']
          });
          this.loginWithParams(response.data.token);
          this.router.navigate(['/']);
        });
      }
    }
  }
  getSocialmediaName(e) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(e) || e.length < 6) {
      this.userError = 'User name must be atleast 6 characters & does not accept special characters';
      this.userVerified = false;
    } else {
      this.userVerified = true;
    }
  }
  getEmail(e) {
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const format = re.test(String(e).toLowerCase());
    if (!format) {
      this.emailVerified = false;
      this.emailError = 'Invalid Email';
      this.emaiLength = true;
      return;
    } else {
      this.emaiLength = false;
      const email = e;
      this.auth._emailExists(email).subscribe((response) => {
        const status = response['message'];
        if (status == null) {
          this.emailVerified = true;
        } else {
          this.emailVerified = false;
          this.emailError = 'Email already taken';
          this.emaiLength = true;
        }
      });
    }
  }
  getPhoneNumber(e) {
    this.phoneLength = false;
    const phone = e;
    this.auth._phoneExists(phone).subscribe((response) => {
      const status = response['message'];
      if (status == null) {
        this.phoneVerified = true;
      } else {
        this.phoneVerified = false;
        this.phoneError = 'Phone NO. already taken';
        this.phoneLength = true;
      }
    });
  }
  getUserName(e) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var numCheck = /^\d+$/;
    if (format.test(e) || numCheck.test(e) || e.length < 6) {
      if (localStorage.getItem("lang") === 'en') {
        this.userError = 'Username must be atleast 6 characters & does not accept special characters and numeric values';

      }
      else if (localStorage.getItem("lang") === 'por') {
        this.userError = 'O nome de usuário deve ser pelo menos 6 caracteres e não aceita caracteres especiais e valores numéricos';

      }
      this.userNameLength = true;
      this.userVerified = false;
      return;
    }
    else {
      this.userNameLength = false;
      const name = e;
      this.auth._userNameExists(name, this.referenceId).subscribe((response) => {
        const status = response['message'];
        if (status == null) {
          this.userVerified = true;
        } else {
          this.userVerified = false;
          this.userError = 'User name already taken';
          this.userNameLength = true;
        }
      });
    }
  }
  showTermsPop() {
    this.showTerms = !this.showTerms;
  }
  showPrivacyPop() {
    this.showPrivacy = !this.showPrivacy;
  }
  fromDateChanged(e, index) {
    console.log('index', index)
    if (index === 0) {
      this.depositLimit.endDate = moment(e.value).format('YYYY-MM-DD');
    }
    if (index === 1) {
      this.betLimit.endDate = moment(e.value).format('YYYY-MM-DD');
    }
  }
  showTermsnewtab() {
    if (localStorage.getItem("lang") === 'en') {
      window.open("https://blog.hit-game.com/terms-of-use/", "_blank")
    }
    else {
      window.open("https://blog.hit-game.com/terms-of-use/portuguese", "_blank")
    }
  }
  showPrivacynewtab() {
    if (localStorage.getItem("lang") === 'en') {
      window.open("https://blog.hit-game.com/privacy-policy/", "_blank")
    }
    else {
      window.open("https://blog.hit-game.com/privacy-policy/portuguese/", "_blank")
    }
  }
  next() {
    console.log(this.activepage);
    if (this.activepage === 2) {
      var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      var numCheck = /^\d+$/;
      var e=this.userDetailsForm.controls.username.value;
      if (format.test(e) || numCheck.test(e) || e.length < 6) {
        this.userDetailsForm.controls['username'].setErrors({'exceed':this.userError})
      }
      this.userDetailsForm.controls['username'].setValidators([Validators.required]);
      this.userDetailsForm.controls['firstName'].setValidators([Validators.required]);
      this.userDetailsForm.controls['terms'].setValidators([Validators.required]);
    }
    if(this.userDetailsForm &&  this.Validations && this.activepage==5 &&
      (!this.Validations.specialchar.value || !this.Validations.minlength.value || !this.Validations.number.value || !this.Validations.capital.value)){
      this.userDetailsForm.setErrors({ 'invalid': true });
    }
    console.log(this.userDetailsForm);
    if (this.userDetailsForm.valid && this.year && this.month && this.date) {
      console.log('valid');
      if (this.activepage === 2 && this.year && this.month && this.date) {
        this.userDetailsForm.get('dob').setValue(this.year + '-' + this.month + '-' + this.date);
      }
      this.activepage = this.activepage + 1;
      if(this.socialMediaAuth && this.activepage==5){
        this.activepage=6;
      }
      console.log(this.userDetailsForm.value);
      if (this.activepage === 3) {
        this.userDetailsForm.controls['country'].setValidators([Validators.required])
        this.userDetailsForm.controls['language'].setValidators([Validators.required])
        this.userDetailsForm.controls['currency'].setValidators([Validators.required])
        this.userDetailsForm.controls['mobileNumber'].setValidators([Validators.required])
      }
      if (this.activepage === 4) {
        this.userDetailsForm.controls['city'].setValidators([Validators.required])
        this.userDetailsForm.controls['state'].setValidators([Validators.required])
        this.userDetailsForm.controls['addressLine1'].setValidators([Validators.required])
        this.userDetailsForm.controls['zipCode'].setValidators([Validators.required])
      }
      if (this.activepage === 5) {
        this.userDetailsForm.controls['password'].setValidators([Validators.required])
        this.userDetailsForm.controls['reEnterPassword'].setValidators([Validators.required])
      }
      if (this.activepage === 6 ) {
        this.welcomescreen=true;
      }
      if (this.activepage === 7) {
        console.log("bet limit recurrence",this.betLimit.recurrence);
        let data = [];
        let enable;
        if (this.betLimit.type === 2) {
          if (this.betLimit.enable === true) {
            enable = 1;
          } else {
            enable = 0;
          }
          const parmam = {
            "type": this.betLimit.type,
            "enable": enable,
            "recurrence": this.betLimit.recurrence,
            "amount": this.betLimit.amount,
            "toDate": this.betLimit.endDate,
          }
          if (this.betLimit.amount === '') {
            delete parmam.amount
          }
          if (this.betLimit.endDate === '') {
            delete parmam.toDate
          }
          if (this.betLimit.amount === '' && this.betLimit.endDate === '') {
          } else {
            data.push(parmam)
          }
        }
        if (this.depositLimit.type === 1) {
          if (this.depositLimit.enable === true) {
            enable = 1;
          } else {
            enable = 0;
          }
          const parmam = {
            "type": this.depositLimit.type,
            "enable": enable,
            "amount": this.depositLimit.amount,
            "toDate": this.depositLimit.endDate,
            "recurrence": this.depositLimit.recurrence,
          }
          if (this.depositLimit.amount === '') {
            delete parmam.amount
          }
          if (this.depositLimit.endDate === '') {
            delete parmam.toDate
          }
          if (this.depositLimit.amount === '' && this.depositLimit.endDate === '') {
          } else {
            data.push(parmam)
          }
        }
        const userDetailsVal = {
          ...this.userDetailsForm.value,
          mobileNumber: this.userDetailsForm.value.mobileNumber,
          countryCode: '+' + this.countryCode,
          countryCodeIso: this.countcodeIsoSelected,
          settings: data
        };


        if (this.socialMediaAuth == false) {
          console.log('social login false')
          let refid = (sessionStorage && sessionStorage.getItem && sessionStorage.getItem("otpReference")) ? JSON.parse(sessionStorage.getItem("otpReference")):null;
          console.log('refid',refid,this.activepage);
          const passwordParams = {
            referenceId :refid ? refid.referenceId: null,
            password : userDetailsVal.reEnterPassword,
            username : userDetailsVal.username,
            mobileNumber : userDetailsVal.mobileNumber,
            countryCode : userDetailsVal.countryCode,
            firstName: userDetailsVal.firstName,
            lastName: userDetailsVal.lastName,
            addressLine1: userDetailsVal.addressLine1,
            addressLine2: userDetailsVal.addressLine2,
            country: userDetailsVal.country,
            state: userDetailsVal.state,
            city: userDetailsVal.city,
            zipCode: userDetailsVal.zipCode,
            dob: moment(userDetailsVal.dob).format('YYYY-MM-DD'),
            settings:userDetailsVal.settings,
            // disabled for soft launch**********
            currency: userDetailsVal.currency,
            countryCodeIso:userDetailsVal.countryCodeIso,
            optInEmail:userDetailsVal.optInEmail,
            // currency: 'USD',
            // countryCodeIso:'US',
            language:userDetailsVal.language
          };
          console.log(passwordParams);
          
          this.auth.createPassword(passwordParams).subscribe((response: PasswordResponse) => {
            // fbq('trackCustom', 'SignUp', { username:  this.userDetails.userName });
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
           'event' : 'sign_up',
           'username' : userDetailsVal.userName 
            });
            this.toastr.success(response['message']);
            this.router.navigate(['/user']);
            sessionStorage.clear();
            // this.dataServiceService.sendRegistrationEmail(this.verifyEmail);
          }, err => { 
            this.activepage = 6;
            this.toastr.error(err.error.errors[0].msg);
          });
          
        }
        else {
          console.log('social login true')
          this.userDetailsForm.value['dob'] = this.year + '-' + this.month + '-' + this.date;
          let apiParams = {
            ...this.userDetailsForm.value,
            countryCode: '+' + this.countryCode,
            countryCodeIso: this.countryCodeSelected,
            settings: data,
            referenceId: this.socialMediaData.referenceId,
          }
          console.log("request for social login", apiParams);

          if (this.isFbLogin) {
            apiParams['email'] = this.email
          }
          console.log(apiParams);

          this.commonService._updateProfile(apiParams).subscribe((response) => {
            // fbq('trackCustom', 'SignUp', { username:  this.userDetailsForm.value['userName'] });
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'event': 'sign_up',
              'username': this.userDetailsForm.value['username']
            });
            this.loginWithParams(response.data.token);
            this.router.navigate(['/']);
          });
        }
      }     
    }

    else {
      for (let el in this.userDetailsForm.controls) {
        if (this.userDetailsForm.controls[el].errors) {
          console.log(el)

        }
      }
      console.log("not valid");
      console.log(this.userDetailsForm.value);

    }

  }
}

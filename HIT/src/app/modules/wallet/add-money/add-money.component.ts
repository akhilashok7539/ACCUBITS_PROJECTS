// import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
// import { StripeService, StripeCardComponent } from 'ngx-stripe';
// import {
//   StripeCardElementOptions,
//   StripeElementsOptions
// } from '@stripe/stripe-js';
// import { ApiService } from '../../../core/service/api.service';

// @Component({
//   selector: 'app-add-money',
//   templateUrl: './add-money.component.html',
//   styleUrls: ['./add-money.component.scss']
// })
// export class AddMoneyComponent implements OnInit {
//   @Input() amountSelected;
//   @Output() cancelPay = new EventEmitter();
//   @ViewChild(StripeCardComponent) card: StripeCardComponent;
//   amount;
 
//   cardOptions: StripeCardElementOptions = {
//     style: {
//       base: {
//         iconColor: '#FFFF',
//         color: '#FFFF',
//         fontWeight: '300',
//         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//         fontSize: '16px',
//         '::placeholder': {
//           color: '#FFFF'
//         }
//       }
//     }
//   };
//   elementsOptions: StripeElementsOptions = {
//     locale: 'en'
//   };
//   token='';
//   stripeTest: FormGroup;
//   constructor(private fb: FormBuilder, 
//     private stripeService: StripeService,
//     private service: ApiService,
//     private toastr: ToastrService) {}

//   ngOnInit(): void {
//     this.stripeTest = this.fb.group({
//       name: ['', [Validators.required]]
//     });
//     this.amount=this.amountSelected;
//   }
//   createToken(): void {
//     const name = this.stripeTest.get('name').value;
//     this.stripeService
//       .createToken(this.card.element, { name })
//       .subscribe((result) => {
//         if (result.token) {
//           this.submitPayment(result.token.id)
//         } else if (result.error) {
//         }
//       });
//   }

//   cancelPayment(){
//     this.cancelPay.emit(1);
//   }

//   submitPayment(id){
//     let paymentData = {
//       amount: this.amount,
//       tokenId: id,
//     };
//     this.service.httpPost('/v1/wallet/addMoney',paymentData).subscribe((response) => {
//       this.toastr.success(response.message);
//       this.cancelPay.emit(2);
//     }, err => { 
//       this.toastr.error(err.error.message);
//       this.cancelPay.emit(1);
//     });
//   }

// }

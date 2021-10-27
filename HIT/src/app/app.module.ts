import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShortNamePipe } from './shared/short-name.pipe';
import { tokenInterceptor } from './core/interceptor/token.interceptor';
import { LoaderInterceptor } from './core/interceptor/loader.interceptor';
import { ResponseInterceptor } from './core/interceptor/response.interceptor';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { UserIdleModule } from 'angular-user-idle';


import { MessagingService } from './shared/service/messaging.service';
import { environment } from '../environments/environment.prod';
import { AsyncPipe } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ShortNamePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    UserIdleModule.forRoot({idle: 1800, timeout: 3, ping: 120}),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 2000,
      preventDuplicates: true,
    }),
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: (http:HttpClient)=>{return new TranslateHttpLoader(http, './assets/i18n/','.json');},
        deps:[HttpClient]
      }
    }),
    NgxSpinnerModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    Title,
    CookieService,
    tokenInterceptor,
    MessagingService, AsyncPipe,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi :true}
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

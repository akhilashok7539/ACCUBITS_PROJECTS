import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { endPoints } from '../_config/endpoints';
import { ApplicationService } from '../_services/application.service';
import { InstituteService } from '../_services/institute.service';

export interface AdditionalFormControls {
  personalInfo: [],
  education: [],
  entrance: [],
  certificates: [],
}

@Component({
  selector: 'app-customize-applications',
  templateUrl: './customize-applications.page.html',
  styleUrls: ['./customize-applications.page.scss'],
})

export class CustomizeApplicationsPage implements OnInit {
  additionalFormControls: AdditionalFormControls;
  form: FormGroup;
  additionalPersonal: FormGroup;
  additionalEducation: FormGroup;
  additionalExam: FormGroup;
  additionalCertificate: FormGroup;
  additionalField = {
    personalInfo: [],
    education: [],
    entrance: [],
    certificates: []
  }
  instituteLoginDetails: any = [];
  instituteId: any;
  personinfonewfield:any;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private applicationFormService: ApplicationService, private apiService: InstituteService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;

    this.form = this.formBuilder.group({
      instituteId: [this.instituteId],
      personalInfo: this.formBuilder.group({
        courseName: [true],
        stream: [true],
        isHosteler: [true],
        adharNumber: [true],
        fullName: [true],
        dob: [true],
        age: [true],
        gender: [true],
        mothersName: [true],
        mothersOccupation: [true],
        mothersEmail: [true],
        mothersPhoneNumber: [true],
        fathersName: [true],
        fathersOccupation: [true],
        fathersEmail: [true],
        fathersPhoneNumber: [true],
        guardiansName: [true],
        gaurdiansAddress: [true],
        gaurdiansEmail: [true],
        gaurdiansPhoneNumber: [true],
        isDifferentlyAbled: [true],
        differentlyAbledCertFile: [true],
        religion: [true],
        cast: [true],
        visibleMark1: [true],
        visibleMark2: [true],
        isIndian: [true],
        isNRI: [true],
        isFilledByFather: [true],
        personinfonewfield: [''],
        // aditionalPersonal: this.formBuilder.array([
        //   this.formBuilder.group({
        //     ticked: [true],
        //     fieldName: ['', Validators.required],
        //     field: ['', Validators.required],
        //     type: ['text'],
        //   })
        // ]),
      }),
      permanentAddress: this.formBuilder.group({
        permanentAddressLine1: [true],
        permanentAddressLine2: [true],
        permanentAddressLine3: [true],
        permanentCountry: [true],
        permanentState: [true],
        permanentDistrict: [true],
        permanentPin: [true],
        permanentTelephoneSTDCode: [true],
        permanentTelephone: [true],
        permanentMobile: [true],
      }),
      communicationAddress: this.formBuilder.group({
        communicationAddressLine1: [true],
        communicationAddressLine2: [true],
        communicationAddressLine3: [true],
        communicationCountry: [true],
        communicationState: [true],
        communicationDistrict: [true],
        communicationPin: [true],
        communicationTelephoneSTDCode: [true],
        communicationTelephone: [true],
        communicationMobile: [true],
      }),
      education: this.formBuilder.group({
        accademicLevelId: [true],
        schoolName: [true],
        specialization: [true],
        yearOfStudy: [true],
        startDate: [true],
        endDate: [true],
        certificateFile: [true],
        qualificationStatus: [true],
        cgpa: [true],
        // aditionalEducation: this.formBuilder.array([
        //   this.formBuilder.group({
        //     ticked: [true],
        //     fieldName: ['', Validators.required],
        //     field: ['', Validators.required],
        //     type: ['text'],
        //   })
        // ]),
      }),
      entrance: this.formBuilder.group({
        qualifiedEntrance: [true],
        rollNumber: [true],
        yearOfQualification: [true],
        validUpto: [true],
        cgpa: [true],
        rank: [true],
        // aditionalEntrance: this.formBuilder.array([
        //   this.formBuilder.group({
        //     ticked: [true],
        //     fieldName: ['', Validators.required],
        //     field: ['', Validators.required],
        //     type: ['text'],
        //   })
        // ]),
      }),
      certificates: this.formBuilder.group({
        adharCardFile: [true],
        birthCertificateFile: [true],
        communityCertificateFile: [true],
        differentlyAbledCertificateFile: [true],
        characterCertificateFile: [true],
        conductCertificateFile: [true],
        entranceExamFile: [true],
        sslcFile: [true],
        plusTwoCertificateFile: [true],
        experienceCertificateFile: [true],
        incomeCertificateFile: [true],
        migrationCertificateFile: [true],
        nativityCertificateFile: [true],
        panCardFile: [true],
        passportSizePhotoFile: [true],
        scolarshipFile: [true],
        signatureFile: [true],
        tcFile: [true],
        thumbImpressionFile: [true],
        drivingLicenseFile: [true],
        // aditionalCertificates: this.formBuilder.array([
        //   this.formBuilder.group({
        //     ticked: [true],
        //     fieldName: ['', Validators.required],
        //     field: ['', Validators.required],
        //     type: ['file'],
        //   })
        // ]),
      }),

      entranceExams: this.formBuilder.array([
        this.formBuilder.group({
          qualifiedEntrance: ['', Validators.required],
          rollNumber: ['', Validators.required],
          yearOfQualification: ['', Validators.required],
          cgpa: ['', Validators.required],
          rank: ['', Validators.required],
        })
      ])

    });
    this.loadRemovedFields()
  }
  loadRemovedFields() {
    // fetching removed fields
    this.apiService.doGetRequest(endPoints.Get_removedField + this.instituteId + '/personalInfo').subscribe((returnData: any) => {
      const group = this.form.controls['personalInfo'] as FormGroup;
      returnData.data.map(element => {
        group.controls[element.fieldName].setValue(false)
      })
    }, error => {
      console.error(error);
    });

    this.apiService.doGetRequest(endPoints.Get_removedField + this.instituteId + '/personalInfo').subscribe((returnData: any) => {
      const group = this.form.controls['personalInfo'] as FormGroup;
      returnData.data.map(element => {
        group.controls[element.fieldName].setValue(false)
      })
    }, error => {
      console.error(error);
    });

    this.apiService.doGetRequest(endPoints.Get_removedField + this.instituteId + '/permanentAddress').subscribe((returnData: any) => {
      const group = this.form.controls['permanentAddress'] as FormGroup;
      returnData.data.map(element => {
        group.controls[element.fieldName].setValue(false)
      })
    }, error => {
      console.error(error);
    });

    this.apiService.doGetRequest(endPoints.Get_removedField + this.instituteId + '/communicationAddress').subscribe((returnData: any) => {
      const group = this.form.controls['communicationAddress'] as FormGroup;
      returnData.data.map(element => {
        group.controls[element.fieldName].setValue(false)
      })
    }, error => {
      console.error(error);
    });

    this.apiService.doGetRequest(endPoints.Get_removedField + this.instituteId + '/education').subscribe((returnData: any) => {
      const group = this.form.controls['education'] as FormGroup;
      returnData.data.map(element => {
        group.controls[element.fieldName].setValue(false)
      })
    }, error => {
      console.error(error);
    });

    this.apiService.doGetRequest(endPoints.Get_removedField + this.instituteId + '/entrance').subscribe((returnData: any) => {
      const group = this.form.controls['entrance'] as FormGroup;
      returnData.data.map(element => {
        group.controls[element.fieldName].setValue(false)
      })
    }, error => {
      console.error(error);
    });

    this.apiService.doGetRequest(endPoints.Get_removedField + this.instituteId + '/certificates').subscribe((returnData: any) => {
      const group = this.form.controls['certificates'] as FormGroup;
      returnData.data.map(element => {
        group.controls[element.fieldName].setValue(false)
      })
    }, error => {
      console.error(error);
    });
  }
  changeFormItemStatus(event, section) {
    const fieldName = event.target.getAttribute('formControlName')
    const checked = event.target.checked;
    const removedFieldObj = {
      instituteId: this.instituteId,
      formSection: section,
      fieldName: fieldName
    }

    let endpoint;
    let msg;
    console.log(endpoint, checked)
    if (checked == true) {
      endpoint = endPoints.Remove_removedField
      msg = "Field added to the form"
    }
    else {
      endpoint = endPoints.Create_removedField
      msg = "Field removed"
    }

    this.apiService.doPostRequest(
      endpoint,
      removedFieldObj)
      .subscribe((returnData: any) => {
        console.log(returnData);
        if (returnData.status == true) {
          // this.toastr.success(msg);
          alert(msg)
        }
        else {
          // this.toastr.error(returnData.error.message);
          alert(returnData.error.message)
        }
      },
        error => {
          console.error(error);
          const message = error.error ? error.error[0].message : 'Something went wrong please try again later.';
          // this.toastr.error(message);
          alert(message)

        });
  }

  get f() { return this.form.controls; }


  submitadditionfields1() {

    let req = {
      "fieldName": this.personinfonewfield,
      "fieldText": this.personinfonewfield,
      "fieldType": "text",
      "formSection": "personalInfo",
      'instituteId': this.instituteId
    }
    this.apiService.addpersonindonewfilds(req).subscribe(
      data =>{
        
      },
      error =>{

      }
    )
  }
}

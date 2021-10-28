import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postacourse } from '../_models/postaCourse';
import { ApplicationService } from '../_services/application.service';
import { InstituteService } from '../_services/institute.service';
import { LoaderService } from '../_services/loader.service';
import { ToasterService } from '../_services/toaster.service';

@Component({
  selector: 'app-post-course',
  templateUrl: './post-course.page.html',
  styleUrls: ['./post-course.page.scss'],
})
export class PostCoursePage implements OnInit {
  mainCategories: any = [];
  subCategories1: any = [];
  subCategories2: any = [];
  subCategories3: any = [];
  subCategories4: any = [];
  subCategories5: any = [];
  accademiclevesl: any = [];
  coursetype: any = [];
  apptututestestlist: any = [];
  universityTypes: any = [];
  postaCource = new Postacourse();
  formdata = new FormData();
  courseStream: any = [];
  courseSubStream: any = [];
  fileToUpload: any;
  instituteLoginDetails: any = [];
  accademicLevelCourse: any = [];
  instituteId;
  constructor(private InstituteService: InstituteService, private router: Router, private loader: LoaderService, private toaster: ToasterService) { }

  ngOnInit() {


  }
  ionViewWillEnter() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    this.postaCource.instituteId = this.instituteId;
    console.log(this.instituteId);
    this.getmaincategory();
    this.getallacademiclevvsl();
    this.getcoursetype();
    this.getuniversitytypes();
    this.getcourseStream();
    this.postaCource.maleAllowed = 'true';
    this.postaCource.femaleAllowed = 'true';
    this.postaCource.otherGenderAllowed = 'true';
    this.postaCource.onlineClassAvailability = 'true';
    this.postaCource.refundPolicy = 'true';
    this.postaCource.aptituteTestRequired = 'true';
    this.postaCource.onlineInterviewRequired = 'true';
    this.postaCource.hasPlacementAssistant = 'true';
    this.postaCource.recruiters = 'true';
    this.postaCource.isActive = 'true';
    this.getallapptitutetest();

  }
  getallacademiclevvsl() {
    this.InstituteService.getallacademiclevel().subscribe(
      data => {
        this.accademiclevesl = data;
      },
      error => {
      }
    )
  }
  getmaincategory() {

    this.InstituteService.getallmaincategory().subscribe(
      data => {
        this.mainCategories = data['data'];
      },
      error => {

      }
    )
  }
  maincategorychange(event) {
    this.loader.present();

    console.log(event.target.value);
    this.InstituteService.getmaincategorybyid1(event.target.value).subscribe(
      data => {
        this.subCategories1 = data['data']
        this.loader.dismiss();
      },
      error => {
        this.loader.dismiss();
      }
    )
  }
  subcategory1change(event) {
    this.loader.present();

    console.log(event.target.value);
    this.InstituteService.getmaincategorybyid2(event.target.value).subscribe(
      data => {
        this.subCategories2 = data['data']
        this.loader.dismiss();
      },
      error => {
        this.loader.dismiss();
      }
    )
  }
  subcategory2change(event) {
    this.loader.present();

    console.log(event.target.value);
    this.InstituteService.getmaincategorybyid3(event.target.value).subscribe(
      data => {
        this.subCategories3 = data['data']
        this.loader.dismiss();
      },
      error => {
        this.loader.dismiss();
      }
    )
  }
  subcategory3change(event) {
    this.loader.present();

    console.log(event.target.value);
    this.InstituteService.getmaincategorybyid4(event.target.value).subscribe(
      data => {
        this.subCategories4 = data['data']
        this.loader.dismiss();
      },
      error => {
        this.loader.dismiss();
      }
    )
  }
  subcategory4change(event) {
    this.loader.present();

    this.InstituteService.getmaincategorybyid5(event.target.value).subscribe(
      data => {
        this.subCategories5 = data['data']
        this.loader.dismiss();
      },
      error => {
        this.loader.dismiss();
      }
    )
  }
  getcoursetype() {

    this.InstituteService.getcoursetype().subscribe(
      data => {
        this.coursetype = data['data'];
      },
      error => {
      }
    )
  }
  getuniversitytypes() {

    this.InstituteService.getuniversitytypes().subscribe(
      data => {
        this.universityTypes = data['data'];
      },
      error => {
      }
    )
  }
  getcourseStream() {

    this.InstituteService.getcourseStream().subscribe(
      data => {
        this.courseStream = data['data'];
      },
      error => {
      }
    )
  }

  substreamcourse(event) {
    this.loader.present();

    this.InstituteService.substreamcoursespecialization(event.target.value).subscribe(
      data => {
        this.courseSubStream = data['data']
        this.loader.dismiss();
      },
      error => {
        this.loader.dismiss();
      }
    )
  }
  getallapptitutetest() {

    this.InstituteService.getalltestlist(this.instituteId).subscribe(
      data => {
        this.apptututestestlist = data['data']
      },
      error => {
      }
    )
  }
  accademicLevelCoursechange(event) {
    this.loader.present();

    this.InstituteService.accademicLevelCoursechange(event.target.value).subscribe(
      data => {
        this.accademicLevelCourse = data['data']
        this.loader.dismiss();
      },
      error => {
        this.loader.dismiss();
      }
    )
  }
  syllubus(event) {
    this.fileToUpload = event.item(0);
  }
  submit() {
    console.log(this.postaCource.admissionStartDate.split('T')[0]);
    this.loader.present();
    this.formdata.append("accademicLevelId", this.postaCource.academiclevels)
    this.formdata.append('accademicLevelCourseId', this.postaCource.accademicLevelCourseId);
    this.formdata.append("courseTypeId", this.postaCource.courseTypeId)
    this.formdata.append("courseCode", this.postaCource.courseCode)
    this.formdata.append("universityTypeId", this.postaCource.universityTypeId)
    this.formdata.append("universityName", this.postaCource.universityName)
    this.formdata.append("courseStreamId", this.postaCource.courseStreamId)
    this.formdata.append("courseStreamSpecializationId", this.postaCource.courseStreamSpecializationId)
    this.formdata.append("availableSeats", this.postaCource.availableSeats)
    this.formdata.append("accademicYear", this.postaCource.accademicYear)
    this.formdata.append("accademicYearMonth", this.postaCource.accademicYearMonth)
    this.formdata.append("courseDuration", this.postaCource.courseDuration)
    this.formdata.append("examConducted", this.postaCource.examConducted)
    this.formdata.append("admissionStartDate", this.postaCource.admissionStartDate.split('T')[0])
    this.formdata.append("admissionCloseDate", this.postaCource.admissionCloseDate.split('T')[0])
    this.formdata.append("classStartDate", this.postaCource.classStartDate.split('T')[0])
    this.formdata.append("maleAllowed", this.postaCource.maleAllowed)
    this.formdata.append("femaleAllowed", this.postaCource.femaleAllowed)
    this.formdata.append("otherGenderAllowed", this.postaCource.otherGenderAllowed)
    this.formdata.append("campusName", this.postaCource.campusName)
    this.formdata.append("campusAddressLine1", this.postaCource.campusAddressLine1)
    this.formdata.append("campusAddressLine2", this.postaCource.campusAddressLine2)
    this.formdata.append("campusAddressLine3", this.postaCource.campusAddressLine3)
    this.formdata.append("country", this.postaCource.country)
    this.formdata.append("block", this.postaCource.block)
    this.formdata.append("locality", this.postaCource.locality)
    this.formdata.append("refundPolicy", this.postaCource.refundPolicy)
    this.formdata.append("onlineClassAvailability", this.postaCource.onlineClassAvailability)
    this.formdata.append("aptituteTestRequired", this.postaCource.aptituteTestRequired)
    this.formdata.append("aptituteTestId", this.postaCource.aptituteTestId)
    this.formdata.append("onlineInterviewRequired", this.postaCource.onlineInterviewRequired)
    this.formdata.append("courseSyllabusFile", this.fileToUpload)
    this.formdata.append("CourseCategoryId", this.postaCource.maincategory)
    this.formdata.append("CourseSubCategoryId", this.postaCource.subcategory1)
    this.formdata.append("CourseSubCategory2Id", this.postaCource.subcategory2)
    this.formdata.append("CourseSubCategory3Id", this.postaCource.subcategory3)
    this.formdata.append("CourseSubCategory4Id", this.postaCource.subcategory4)
    this.formdata.append("CourseSubCategory5Id", this.postaCource.subcategory5)
    this.formdata.append("isActive", this.postaCource.isActive)



    // this.formdata.append("eligibiliyInString",this.postaCource.eligibiliyInString)
    // this.formdata.append("jobAreas",this.postaCource.jobAreas)
    // this.formdata.append("jobPositions",this.postaCource.jobPositions)
    // this.formdata.append("salaryRange",this.postaCource.salaryRange)
    // this.formdata.append("hasPlacementAssistant",this.postaCource.hasPlacementAssistant)
    // this.formdata.append("recruiters",this.postaCource.recruiters)

    // this.formdata.append("instituteId",this.postaCource.instituteId)




    this.InstituteService.addacourse(this.postaCource.instituteId, this.formdata).subscribe(
      data => {
        this.loader.dismiss();
      this.toaster.newCourseAdded();
        sessionStorage.setItem("post-course", JSON.stringify(data))
        this.router.navigateByUrl('/post-course/fees-info')
      },
      error => {
        this.formdata = new FormData();
        this.loader.dismiss();
        this.toaster.errornewCourseAdded();
        this.formdata.delete;
      
      }
    )



  }
}

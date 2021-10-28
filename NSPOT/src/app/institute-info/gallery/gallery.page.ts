import { Component, OnInit } from '@angular/core';
import { InstituteService } from 'src/app/_services/institute.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  fileImage;
  iamgedes;
  instituteLoginDetails: any=[];
  instituteId: any;
  instituteDetails:any=[];
InstituteType:any=[];
galleryiamges:any=[];
formdata = new FormData();
  constructor(private instituteservice:InstituteService) { }

  ngOnInit() {
    this.instituteLoginDetails = JSON.parse(localStorage.getItem("userLogin"));
    this.instituteId = this.instituteLoginDetails['userProfile'].userRole;
    this.getallinstituteimages();
  }
  fileimage(event)
  {
    let file = event.target.files[0]
    console.log(file);
    this.fileImage = file;
  }
  getallinstituteimages(){
    this.instituteservice.getallinstutegalley(this.instituteId).subscribe(
      data =>{
        this.galleryiamges = data['data']
      },
      error =>{

      }
    )
  }
  submit()
  {
    this.formdata.append("galleryFile",this.fileImage);
    this.formdata.append("galleryLabel",this.iamgedes);
    this.instituteservice.addgalleryiomage(this.formdata,this.instituteId).subscribe(
      data =>{
        this.iamgedes = '';
        this.formdata = new FormData();
        this.getallinstituteimages();
      },
      error =>{
        this.formdata = new FormData();

      }
    )

  }
}

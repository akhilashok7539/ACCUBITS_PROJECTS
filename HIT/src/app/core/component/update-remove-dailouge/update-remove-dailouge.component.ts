import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../core/service/api.service';

@Component({
  selector: 'app-update-remove-dailouge',
  templateUrl: './update-remove-dailouge.component.html',
  styleUrls: ['./update-remove-dailouge.component.scss']
})
export class UpdateRemoveDailougeComponent implements OnInit {
  @Input() class;
  @Output() onupload = new EventEmitter<boolean>();
  fileToUpload: File = null;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
  }
  onRemove() {
    if (this.class==1) {
      this.removeProfilePicture()
    } else {
      this.removeCoverPic()
    }
  }
  handleFileInput(files){
    this.fileToUpload = files;
    if (this.class==1) {
      this.uploadProfilePicture()
    } else {
      this.uploadCoverPic()
    }
  }
  uploadProfilePicture(){
    var fd = new FormData();
    fd.append('profileImage', this.fileToUpload[0]);
    this.service.httpPost('/v1/feed/user/profile/image',fd).subscribe((response) => {
      this.onupload.emit();
    });
  }
  uploadCoverPic(){
    var coverFd = new FormData();
    coverFd.append('profileCover', this.fileToUpload[0]);
    this.service.httpPost('/v1/feed/user/profile/cover',coverFd).subscribe((response) => {
      this.onupload.emit();
    });
  }
  removeProfilePicture(){
    this.service.httpPost('/v1/feed/user/profile/image/remove',null).subscribe((response) => {
      this.onupload.emit();
    });
  }
  removeCoverPic(){
    this.service.httpPost('/v1/feed/user/profile/cover/remove',null).subscribe((response) => {
      this.onupload.emit();
    });
  }

}

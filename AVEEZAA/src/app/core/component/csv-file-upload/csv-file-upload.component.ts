import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '@app/core/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
const incr = 1;
@Component({
  selector: 'app-csv-file-upload',
  templateUrl: './csv-file-upload.component.html',
  styleUrls: ['./csv-file-upload.component.scss']
})
export class CsvFileUploadComponent implements OnInit {
  csvUploadErrorList = [];
  @Output() onCancel = new EventEmitter<any>();
  failUploadCSv = false;
  progress = 0;
  progresStatusInterval;
  disableCancel = false;
  fileUploadProgress = false;
  public files: any[] = [];

  constructor(private builder: FormBuilder,
    private service:ApiService,
    private spinner: NgxSpinnerService,
    private toastr:ToastrService) {
  }
  ngOnInit(): void {
  }
  onCancelClick(){
    if(this.disableCancel !== true) {
      this.onCancel.emit();
    }
  }
  onNext(){
    this.fileUploadProgress = true;
    this.uploadFile(this.files[0]);
    this.disableCancel = true;
  }
  onFileChange(pFileList: File[]){
    this.files = Object.keys(pFileList).map(key => pFileList[key]);
  }

  deleteFile(f){
    this.files = this.files.filter(function(w){ return w.name != f.name });
  }

  openConfirmDialog(pIndex): void {
    this.files.splice(pIndex, 1);
  }

  deleteFromArray(index) {    
  }
  manageProgress(id) {
    this.progress = id;
    if(this.progress === 100) {
      clearInterval(this.progresStatusInterval)
      this.onCancel.emit();
      const checkapiSend = false;
      this.disableCancel = false;
      this.toastr.success('Sucessfully Uploaded the CSV')
    }
  }

   uploadFile(file: File) {
    this.csvUploadErrorList = [];
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('state_id', '1');
    this.service.httpPost(`/master_products/upload`, formData).subscribe((response) => {
        Object.keys(response.data.error).forEach((key) => {
          if(response.data.error[key].row_number === undefined){
            this.progresStatusInterval = setInterval(() => this.progressUPloadStatus(response.data.id), 1000)
          }
          else {
            this.csvUploadErrorList.push(response.data.error[key]);
             this.failUploadCSv = true;
          }
        });
    });
  }
  progressUPloadStatus(id){
    let parmsBody = {
      "process_id": id
    }
    this.spinner.hide();
    this.service.httpPost(`/process_info/progress?loadder=false`, parmsBody).subscribe((response) => {
      this.manageProgress(response.progress)
    });
  }
  onUploadAgainclick(){
    this.failUploadCSv = false;
    this.fileUploadProgress = false;
    this.files = [];
    this.disableCancel = false;
  }
}






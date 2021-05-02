import {Component, Inject, OnInit} from '@angular/core';
import {TemplateCV} from "../../../model/TemplateCV";
import {TemplateCvServiceService} from "../../../Services/template-cv-service.service";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";

// @ts-ignore
@Component({
  selector: 'app-quanlymaucv-create',
  templateUrl: './quanlymaucv-create.component.html',
  styleUrls: ['./quanlymaucv-create.component.css']
})
export class QuanlymaucvCreateComponent implements OnInit {
  // @ts-ignore
  templateCV: TemplateCV;
  selectedFile: any;
  // @ts-ignore
  currentFile: File;
  // @ts-ignore
  selectedFiles: FileList;
  progress = 0;
  message = '';
  // @ts-ignore
  fileInfos: Observable<any>;
  // @ts-ignore
  idfile: string;
  constructor(private templateCvServiceService: TemplateCvServiceService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) { }

  ngOnInit(): void {
    this.templateCV = new TemplateCV();
  }

  save(event: any) {
    this.selectedFile = event.target.files[0];
    const filename = this.selectedFile.name;
    const fileRef = this.storage.ref(filename);
    this.storage.upload(filename, this.selectedFile).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.idfile = url;
          console.log(url);
          alert('Upload Successful');
        });
      })
    ).subscribe();
  }
  add() {
    console.log("bấm add");
   // this.templateCV.path = this.idfile;
    if(confirm("Bạn muốn thêm mới template CV không ?")){
      this.templateCvServiceService.createTemplate(this.templateCV).subscribe(data=>{
        // @ts-ignore
        this.template= data;
        alert("Thêm mới thành công");
        this.templateCV = new TemplateCV();
      })
    }
  }

  // @ts-ignore
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress = 0;

    // @ts-ignore
    this.currentFile = this.selectedFiles.item(0);
    //this.templateCV.path= this.currentFile;
    this.templateCvServiceService.upload(this.currentFile,this.templateCV).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        // @ts-ignore
        this.currentFile  = undefined;
      });
  }
}

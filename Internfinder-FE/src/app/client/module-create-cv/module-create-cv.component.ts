import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from "rxjs/operators";
import {CvCreated} from "../../dto/CvCreated";
import {CvCreatedService} from "../../Services/cv-created.service";

@Component({
  selector: 'app-module-create-cv',
  templateUrl: './module-create-cv.component.html',
  styleUrls: ['./module-create-cv.component.css']
})
export class ModuleCreateCvComponent implements OnInit {

    selectImg: any = null;
    // @ts-ignore
    idImg: string;
    // @ts-ignore
    imageSrc: string;
    // @ts-ignore
    firstName: string;

    // @ts-ignore
    cv_created: CvCreated;

  // @ts-ignore
  constructor(@Inject(AngularFireStorage) private storage: AngularFireStorage, private cvCreated: CvCreatedService) {
  }

  ngOnInit(): void {
    this.cv_created = new CvCreated();
  }

  saveimg(event: any) {
    this.selectImg = event.target.files[0];
    const nameimg = this.selectImg.name;
    const fileRef = this.storage.ref(nameimg);
    this.storage.upload(nameimg, this.selectImg).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.idImg = url;
          console.log(url);
        });
      })).subscribe();

  }

  readURL(event: any): void {
    // @ts-ignore
    if (event.target.files && event.target.files[0]) {
      // @ts-ignore
      this.selectImg = event.target.files[0];
      const reader = new FileReader();
      // @ts-ignore
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(this.selectImg);
    }
  }
  add(){
    console.log('st_add');
    this.cv_created.avatar=this.imageSrc;
    console.log('abc: '+this.cv_created.avatar );
    console.log(',ten'+ this.firstName+ ' '+ this.cv_created.lastName);
    console.log(',email ' + this.cv_created.email);
    console.log(this.cv_created.gender);
    console.log( 'phone' + this.cv_created.phone);
    console.log('ngaysinh ' +this.cv_created.dayOfBirth);
    this.cvCreated.createCV(this.cv_created).subscribe(data=>{
      // @ts-ignore
      this.template= data;
      // @ts-ignore
      this.cv_created = new CvCreated();
    })
  }
}

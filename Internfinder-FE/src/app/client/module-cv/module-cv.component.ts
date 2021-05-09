import {Component, Inject, OnInit} from '@angular/core';
import {CvCreated} from "../../dto/CvCreated";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import {FormGroup, FormControl,FormArray, FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-module-cv',
  templateUrl: './module-cv.component.html',
  styleUrls: ['./module-cv.component.css']
})
export class ModuleCvComponent implements OnInit {
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
  formKinhNghiem: FormGroup;
  constructor(@Inject(AngularFireStorage) private storage: AngularFireStorage, private  fb: FormBuilder) {

    // @ts-ignore
    this.formKinhNghiem = this.fb.group({
      kinhnghiems: this.fb.array([
        this.fb.control('')
      ])
    });
  }
  get kinhnghiems() : FormArray {
    {
      return this.formKinhNghiem.get('kinhnghiems') as FormArray;
    }
  }


  newKinhNghiem(): FormGroup {
    return this.fb.group({
      lbNamKN: 'Kinh nghiêm',
      lbCapBac: 'Cấp bậc hiện tại',
      lbChucDanh: 'Vị trí/Chức danh',
      lbCongTy: 'Công ty',
      lbThoiGian: 'Thời gian làm việc',
      lbMoTa: 'Mô tả công việc',
      tbNamKN: '',
      tbCapbac: '',
      tbViTri: '',
      tbCongTy: '',
      monthStart:'',
      yearStart: '',
      monthEnd: '',
      yearEnd: '',
    })
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
  }
}

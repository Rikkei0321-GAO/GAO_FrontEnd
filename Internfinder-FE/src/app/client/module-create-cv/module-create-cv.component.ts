import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from "rxjs/operators";
import {CvCreated} from "../../dto/CvCreated";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CvCreatedService} from "../../Services/cv-created.service";
import {ShareClass} from "../../model/Share.Class";
import {LoadcssServices} from "../../Services/loadcss.services";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-module-create-cv',
  templateUrl: './module-create-cv.component.html',
  styleUrls: ['./module-create-cv.component.css']
})
export class ModuleCreateCvComponent implements OnInit {
  // @ts-ignore
  idtemplate: number;
  isLinear = false;
  // @ts-ignore
  firstFormGroup: FormGroup;
  // @ts-ignore
  secondFormGroup: FormGroup;
  selectImg: any = null;
  // @ts-ignore
  idImg: string;
  // @ts-ignore
  imageSrc: string;
  // @ts-ignore
  firstName: string;
  // @ts-ignore
  cv_created: CvCreated = new CvCreated();
  // @ts-ignore
  formKinhNghiem: FormGroup;
  // @ts-ignore
  quan: string;
  // @ts-ignore
  diachi:string;

  // @ts-ignore
  constructor(@Inject(AngularFireStorage) private storage: AngularFireStorage, private  fb: FormBuilder, private cvCreated: CvCreatedService,
              private  loadcssServices: LoadcssServices,
              private route: ActivatedRoute, private router: Router) {
    this.loadcssServices.loaddCss('assets/page/css/form.css');
    this.loadcssServices.loaddCss('assets/page/css/formtotal.css');
    this.loadcssServices.loaddCss('assets/page/css/formCV.css');
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
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['', Validators.required]
    });
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
    this.cv_created.address = this.diachi+' '+this.quan ;
    this.cv_created.avatar=this.imageSrc;
    this.cvCreated.createCV(this.cv_created).subscribe(data => {
      this.cv_created = data
      console.log(data)
    })
    this.router.navigate(['/slide_cv']);
  }
  id_now: any;
  download(){
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    console.log(this.idtemplate)
    this.cvCreated.download(this.id_now,1);
  }
}


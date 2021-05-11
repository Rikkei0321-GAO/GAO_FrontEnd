import {Component, Inject, OnInit} from '@angular/core';
import {AccountClass} from "../../model/Account.class";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {Create_CV} from "../../model/Create_CV";
import {CvCreatedService} from "../../Services/cv-created.service";
import {AccountService} from "../../Services/Account.service";
import {LoadcssServices} from "../../Services/loadcss.services";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";

@Component({
  selector: 'app-profile-sv',
  templateUrl: './profile-sv.component.html',
  styleUrls: ['./profile-sv.component.css']
})
export class ProfileSvComponent implements OnInit {

  // @ts-ignore
  account: AccountClass=new AccountClass();
  // @ts-ignore
  public cv: Create_CV[];
  public  id_now :number=0;
  // @ts-ignore
  public id: number=0;

  // @ts-ignore
  imageSrc: string;
  selectImg: any = null;
  // @ts-ignore
  idImg: string;

  constructor(private  loadcssServices: LoadcssServices,private activatedRouteService: ActivatedRoute,private cvceated: CvCreatedService,
              private  toast: ToastrService, private http: HttpClient,private  accountservice: AccountService,@Inject(AngularFireStorage) private storage: AngularFireStorage) {
    this.loadcssServices.loaddCss('assets/Client/CSS/bootstrapprofile.css');
    this.loadcssServices.loaddCss('assets/Client/CSS/profile.css');

  }

  ngOnInit(): void {
    this.cvceated.getAll().subscribe(data => {
      // @ts-ignore
      this.cv = data;
    });
    this.id = this.activatedRouteService.snapshot.params['id'];
    console.log(this.id);
    this.accountservice.getOne(this.id).subscribe(data=>{
      this.account=data;
      console.log(data)
    },error => console.log(error));
    let id_user = JSON.parse(<string>localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    console.log(this.id_now);
  }
  deletebyid(id: any){
    if(id == null){
      this.toast.warning('Xoá không thành công')
    }
    else {
      this.cvceated.deleteId(id).subscribe(data=>{
        this.toast.success('Xóa thành công')
        this.ngOnInit()
      })
    }
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
}
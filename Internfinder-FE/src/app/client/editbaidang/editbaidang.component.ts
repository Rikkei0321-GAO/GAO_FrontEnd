import { Component, OnInit } from '@angular/core';
import {NewsClass} from "../../model/News.class";
import {LoadcssServices} from "../../Services/loadcss.services";
import {ActivatedRoute, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";
import {ToastrService} from "ngx-toastr";
import {baidangservice} from "../../Services/baidangservice.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {newdto} from "../../model/Newdto";
import {Category} from "../../model/Category";
providers: [baidangservice  ]

@Component({
  selector: 'app-editbaidang',
  templateUrl: './editbaidang.component.html',
  styleUrls: ['./editbaidang.component.css']
})
export class EditbaidangComponent implements OnInit {
  // @ts-ignore
  private idNews: number;

  constructor(private  loadcssServices: LoadcssServices, private route: ActivatedRoute,
              private  token: TokenStorageService, private router: Router,private  toast: ToastrService,
              private newServiceService: baidangservice,private formBuild: FormBuilder) {
    this.loadcssServices.loaddCss('assets/Client/CCS/stylesMH.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.formUpload = this.formBuild.group({
      title: ['',[Validators.required]],
      major: ['',[Validators.required,Validators.maxLength(100)]],
      salary: ['',[Validators.required]],
      quanlity: ['',[Validators.required,Validators.pattern('^[1-9][0-9]*$')]],
      work_loaction: ['',[Validators.required]],
      position: ['',[Validators.required]],
      category_idCategory: ['',[Validators.required]],
      type_of_work: ['',[Validators.required]],
      decriptions: ['',[Validators.required]],
      benefit: ['',[Validators.required]],
      sex: ['',[Validators.required]],
      degree: ['',[Validators.required]],
      working_time: ['',[Validators.required]],
      profile_language: ['',[Validators.required]],
      job_requirements: ['',[Validators.required]],
      profile_requirement: ['',[Validators.required]],
      name_nd: ['',[Validators.required,Validators.maxLength(100)]],
      sdt_nd:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
      address_nd: ['',[Validators.required]],
      email_nd:['',[Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]]
      }
    );
  }
  validation_messages = {
    'title': [
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'major': [
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
      {type: 'maxlength', message: 'Ch???c danh ??t h??n 100 k?? t???'},

    ],
    'salary':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'quanlity':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
      {type:'pattern',message: 'Tr?????ng n??y s??? l?????ng l???n h??n 0' },

    ],
    'work_loaction':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'position':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'category_idCategory':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'type_of_work':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'decriptions':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'benefit':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'sex': [
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'degree': [
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'working_time':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'profile_language':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'job_requirements':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'profile_requirement':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'name_nd':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
      {type: 'maxlength', message: 'Tr?????ng n??y ??t h??n 100 k?? t???'},
    ],
    'sdt_nd':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
      {type: 'pattern', message: 'S??? ??i???n tho???i 10 s???'},
    ],
    'address_nd':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
    ],
    'email_nd':[
      {type: 'required',message: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng!'},
      {type:'pattern',message: 'Email sai ?????nh d???ng' }
    ]
  };
  // @ts-ignore
  editBai: newdto;
  // @ts-ignore
  private idCata:string;
  date: Date = new Date();

  ngOnInit(): void {
    // @ts-ignore
    this.editBai = new newdto();
    this.idNews=this.route.snapshot.params['idNews'];
    this.newServiceService.getNews(this.idNews).subscribe(data=>{
      this.editBai=data
    },error => console.log(error));
    // @ts-ignore
    this.newServiceService.getIdCategory().subscribe(item=>{
      this.lisstnganh=item;
      console.log(this.lisstnganh)
    })
  }
  Update() {
    // @ts-ignore
    let id_user = JSON.parse(localStorage.getItem("auth-user"));
    this.editBai.id_account=id_user['id'];
    this.newServiceService.updateNews(this.idNews,this.editBai).subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
    },error => console.log(error));
    console.log("hang ve: "+ this.editBai);
    this.newServiceService.addNews(this.editBai)
      .subscribe(
        response => {
          console.log(this.editBai.title);
          this.router.navigate(['/timkiem-trangchu']);
          this.toast.success('Update th??nh c??ng');
        },
        (error: any) => {
          console.log(error);
          this.toast.warning('????ng th???t b???i')
        });
  }
  onSubmit() {
    console.log(this.editBai);
    this.Update();
  }

  lisstnganh: Category[]=[];
  // @ts-ignore
  formUpload: FormGroup;

  // @ts-ignore
  public onOptionsSelected(event) {
    // @ts-ignore
    const value = event.target.value;
    this.idCata = value;
    console.log(value);
  }
}


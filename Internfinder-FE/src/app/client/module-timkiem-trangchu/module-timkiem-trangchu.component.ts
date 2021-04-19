import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {news} from "../../model/news";
import {TimkiemService} from "../../Services/timkiem.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoadcssServices} from "../../Services/loadcss.services";
import {baidangservice} from "../../Services/baidangservice.service";
import {Category} from "../../model/Category";


@Component({
  selector: 'app-module-timkiem-trangchu',
  templateUrl: './module-timkiem-trangchu.component.html',
  styleUrls: ['./module-timkiem-trangchu.component.css']
})
export class ModuleTimkiemTrangchuComponent implements OnInit {

  //Xuất
  baidang: news[] = [];
  xemlichsulist: news[] = [];
  // @ts-ignore
  private idCata:string;
  lisstnganh: Category[]=[];
  // @ts-ignore
  nganhId:Category;
  titledangtin:string = "Tim ";
  // @ts-ignore
  private _titleNew: string | '';
  // @ts-ignore
  private _noilam:string;
  // @ts-ignore
  private _nganh:string;
  // @ts-ignore
  totalRec: string;
  page: number = 1;

  get titleNew(): string {
    return this._titleNew;
  }
  ngOnInit(): void {
    // @ts-ignore
    this._timkiemService.findAll().subscribe(data => {
      this.baidang = data;
      this.xemlichsulist = data;
    }, error => {
      console.log('loi me roi: ' + error);
    });
    // @ts-ignore
    this._timkiemService.getIdCategory().subscribe(item=>{
      this.lisstnganh=item;
    })
  }
  @Input()
  set titleNew(value: string) {
    this._titleNew = value;
    this.search();
  }
  @Input()
  set noilam(value: string) {
    this._noilam = value;
    this.search();
  }
  @Input()
  set nganh(value: string) {
    this._nganh = value;
    this.search();
    console.log("the selected value is " + value);
  }

  // @ts-ignore
  public onOptionsSelected(event) {
    // @ts-ignore
    const value = event.target.value;
    this.idCata = value;
    console.log(value);
  }


  constructor(private _timkiemService:TimkiemService, private  loadcssServices: LoadcssServices,private route: ActivatedRoute, private router: Router,) {
    // this.loadcssServices.loaddCss('assets/Client/minhhoang/bootstrap.css');
    this.loadcssServices.loaddCss('/assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('/assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');


  }
  search(){
    let dem = 0;
    this.baidang=this.xemlichsulist;
    if (this._titleNew){
      this.baidang = this.baidang.filter( item => {
        return item.title.toLocaleLowerCase().includes(this._titleNew.toLocaleLowerCase());
      });
      dem++;
    }
    if (this._noilam){
      this.baidang = this.baidang.filter( item => {
        return item.work_loaction.includes(this._noilam);
      });
      dem++;
    }
    if (this._nganh){
      this.baidang = this.baidang.filter( item => {
        // @ts-ignore
        return item.category_idCategory.toString().toLocaleLowerCase().includes(this._nganh.toString().toLocaleLowerCase());
      });
      dem++;
    }
    if (dem == 0) {
      this.baidang=this.xemlichsulist;
    }
    console.log("nganh: "+ this._nganh)
  }

}

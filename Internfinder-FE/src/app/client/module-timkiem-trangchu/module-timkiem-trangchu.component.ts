// @ts-ignore
import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {NewsClass} from "../../model/News.class";
import {Category} from "../../model/Category";
import {TimkiemService} from "../../Services/timkiem.service";
import {LoadcssServices} from "../../Services/loadcss.services";

// @ts-ignore
@Component({
  selector: 'app-module-timkiem-trangchu',
  templateUrl: './module-timkiem-trangchu.component.html',
  styleUrls: ['./module-timkiem-trangchu.component.css'],
  providers: [TimkiemService]

})
export class ModuleTimkiemTrangchuComponent implements OnInit {
  myControl = new FormControl();
  //Xuất
  baidang: NewsClass[] = [];
  xemlichsulist: NewsClass[] = [];
  thonbao:string = "Các ngành đang tuyển "
  // @ts-ignore
  private idCata: string;
  lisstnganh: Category[] = [];
  // @ts-ignore
  private _titleNew: string | '';
  // @ts-ignore
  private _noilam: string = "";
  // @ts-ignore
  private _nganh: string= "";
  // @ts-ignore
  totalRec: string;

  // @ts-ignore
  idNew: number;
  page: number = 1;

  get titleNew(): string {
    return this._titleNew;
  }

  ngOnInit(): void {
    this.idNew=this.route.snapshot.params['idNew'];
    // @ts-ignore
    this._timkiemService.getNewsAllDay().subscribe(data => {
      this.baidang = data;
      this.xemlichsulist = data;
    },error=>{
      console.log('loi me roi: ' + error);
    });
    // @ts-ignore
    this._timkiemService.getIdCategory().subscribe(item => {
      this.lisstnganh = item;
    })
  }
  private init(): void {
    //Lay dữ liệu từ trang tìm kiếm
    this.route.queryParams.subscribe(data => {
        this.titleNew = data.getKeytitle;
        this.nganh = data.getidCategory;
        this.noilam = data.getDiadiem;
      }
    );
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


  constructor(private _timkiemService: TimkiemService, private  loadcssServices: LoadcssServices, private route: ActivatedRoute, private router: Router) {
    this.loadcssServices.loaddCss('/assets/Client/minhhoang/style.css');
    this.loadcssServices.loaddCss('/assets/Client/minhhoang/matrialize.css');
    this.loadcssServices.loaddCss('/assets/Client/fontawesome-free-5.15.2-web/css/all.css');
  }
  search() {
    this.baidang = this.xemlichsulist;
    let dem=0;
    if (this._titleNew) {
      this.baidang = this.baidang.filter(item => {
        return item.title.toLocaleLowerCase().includes(this._titleNew.toLocaleLowerCase());
      });
      dem++;
    }
    if (this._noilam) {
      this.baidang = this.baidang.filter(item => {
        return item.work_loaction.includes(this._noilam);
      });
      dem++;
    }
    if (this._nganh) {
      this.baidang = this.baidang.filter(item => {
        // @ts-ignore
        return item.category.idCategory.toString().toLocaleLowerCase().includes(this._nganh.toString().toLocaleLowerCase());
      });
      dem++;
    }
    if (dem == 0) {
      this.baidang = this.xemlichsulist;
    }
    console.log("nganh: " + this._nganh)
  }
  details(idNew: number){
    this.router.navigate(['/xembaidangtuyen/',idNew])
  }

}
